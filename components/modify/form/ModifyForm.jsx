import { useState, useEffect } from "react";
import StyledModifyForm from "./modifyForm.styled";
import algosdk from "algosdk";
import MyAlgoConnect from "@randlabs/myalgo-connect";
import { useAsync, useToggle } from "../../../hooks";
import Modal from '../../../utils/Modal';
import Loader from '../../../utils/Loader';
import { HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi'

export const ModifyForm = () => {
    const [assetID, setAssetID] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [txnResponse, setTxnResponse] = useState({
        assetID: '',
        txID: ''
    })
    const [addr, setAddr] = useState('')
    useEffect(() => {
        if (localStorage.getItem('address')) {
            setAddr(localStorage.getItem('address'))
        }
    }, [])
    //UseToggle
    const [isModalOpen, toggleIsModalOpen] = useToggle();

    const updateNFTNote = async (client, wallet) => {
        let address = addr
        var enc = new TextEncoder();
        let note = enc.encode(JSON.stringify({
            standard: "arc69",
            description: description,
            externalUrl: url
        }));
        let assetIndex = parseInt(assetID);
        let params = await client.getTransactionParams().do();
        let manager = address;
        let reserve = address;
        let freeze = undefined;
        let clawback = undefined;
        let ctxn = algosdk.makeAssetConfigTxnWithSuggestedParams(
            address,
            note,
            assetIndex,
            manager,
            reserve,
            freeze,
            clawback,
            params,
            false
        );
        let rawSignedTxn = await wallet.signTransaction(ctxn.toByte());
        const response = await client.sendRawTransaction(rawSignedTxn.blob).do();
        setTxnResponse({
            assetID: assetID,
            txID: response.txId
        })
        setAssetID('');
        setDescription('');
        setUrl('');
    }
    const handleNftEdit = async () => {
        const myAlgoWallet = new MyAlgoConnect();
        //Client Parameters
        const token =
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        const server = "https://node.testnet.algoexplorerapi.io";
        const port = 443;
        //Init Client
        let algodClient = new algosdk.Algodv2(token, server, port);
        // let existingAsset = await algodClient.getAssetByID(assetID).do();
        updateNFTNote(algodClient, myAlgoWallet);
    }

    const { execute, status } = useAsync(handleNftEdit, false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        toggleIsModalOpen();
        await execute();
        return 'Nft Modified!'
    }
    return (
        <>
            {
                addr === '' ?
                    (
                        <h1 style={{ margin: '1rem', fontSize: '3rem' }}>Please Connect your wallet</h1>
                    ) :
                    (
                        <>
                            <StyledModifyForm onSubmit={handleNftEdit}>
                                <h1>Modify Your already existing NFTs</h1>
                                <label htmlFor="assetID">AssetID</label>
                                <input type="number" id="assetID" placeholder="Enter AssetID" value={assetID} onChange={(e) => setAssetID(e.target.value)} required={true} />
                                <label htmlFor="description">Description</label>
                                <input type="text" id="description" placeholder="Edit Asset description" value={description} onChange={(e) => setDescription(e.target.value)} />
                                <label htmlFor="url">External URL</label>
                                <input type="text" id="url" placeholder="Edit Asset description" value={url} onChange={(e) => setUrl(e.target.value)} />
                                <input type="submit" value="Modify" disabled={assetID === ''} />
                            </StyledModifyForm>
                            <Modal
                                icon={status === "pending" ? (<Loader />) : status === 'success' ? (<HiOutlineCheckCircle style={{ color: 'greenyellow' }} />) : status === 'error' ? (<HiOutlineXCircle style={{ color: 'red' }} />) : null}
                                tx={txnResponse.txID}
                                status={status}
                                isModalOpen={isModalOpen}
                                toggleIsModalOpen={toggleIsModalOpen}>
                                {
                                    status === "pending" ? 'Modifying your NFT...' : status === 'success' ? `Asset: ${txnResponse.assetID} has been modified` : status === 'error' ? 'Asset not found' : null
                                }
                            </Modal>
                        </>
                    )
            }
        </>
    )
}
