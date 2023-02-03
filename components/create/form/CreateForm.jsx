import StyledForm from './createForm.styled'
import { useState, useEffect } from 'react';
import algosdk from 'algosdk';
import { NFTStorage, Blob } from 'nft.storage';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import { useAsync } from '../../../hooks'
import { HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi'
import Modal from '../../../utils/Modal';
import Loader from '../../../utils/Loader';
import { useToggle } from '../../../hooks';

export const CreateForm = () => {
    //UseState
    const [name, setName] = useState('');
    const [media, setMedia] = useState(null);
    const [file, setFile] = useState(null);
    const [unit_Name, setUnitName] = useState('');
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

    const handleChange = (e) => {
        if (e.target.files) {
            const data = e.target.files[0]
            setFile(data)
            const reader = new window.FileReader();
            reader.readAsArrayBuffer(data);
            reader.onloadend = () => {
                setMedia(Buffer(reader.result))
            }
            e.preventDefault();
        }
    }

    async function handleIPFSUpload() {
        const endpoint = "https://api.nft.storage";
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDdCNTFENGNjYzg5RGE4M0NGNjZlZjU5NjBBMjM5NTM1RWY1YmM1MDMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NjU1OTMwODcxNywibmFtZSI6ImhpZEFsZ29ORlRTIn0.jdiVjeCn647Rzgd60DUrQgL3aqe2hp2ezwWOQM00NOo'
        const storage = new NFTStorage({ endpoint, token });
        const cid = await storage.storeBlob(new Blob([media]));
        let ipfs = `ipfs://${cid}`
        return ipfs;
    }

    //Mint NFT 
    async function handleNftMint() {
        const myAlgoWallet = new MyAlgoConnect();
        //Client Parameters
        const token =
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        const server = "https://node.testnet.algoexplorerapi.io";
        const port = 443;
        //Init Client
        let algodClient = new algosdk.Algodv2(token, server, port);
        //NFT
        let address = addr;
        let params = await algodClient.getTransactionParams().do();
        var enc = new TextEncoder();
        let note = enc.encode(JSON.stringify({
            standard: "arc69",
            description: description,
            mime_type: file.type,
            externalUrl: url
        }));
        let defaultFrozen = false;
        let decimals = 0;
        let totalIssuance = 1;
        let unitName = unit_Name;
        let assetName = name;
        let assetURL = await handleIPFSUpload();
        let assetMetadataHash = undefined;
        let manager = address;
        let reserve = address;
        let freeze = undefined;
        let clawback = undefined;
        let txn = algosdk.makeAssetCreateTxnWithSuggestedParams(
            address,
            note,
            totalIssuance,
            decimals,
            defaultFrozen,
            manager,
            reserve,
            freeze,
            clawback,
            unitName,
            assetName,
            assetURL,
            assetMetadataHash,
            params
        );
        let rawSignedTxn = await myAlgoWallet.signTransaction(txn.toByte());
        const response = await algodClient.sendRawTransaction(rawSignedTxn.blob).do();
        let assetID = null;
        // Get the new asset's information from the creator account
        let ptx = await algosdk.waitForConfirmation(algodClient, response.txId, 4)
        assetID = ptx["asset-index"];
        setTxnResponse({
            assetID: assetID,
            txID: response.txId
        })
        setName('')
        setMedia(null)
        setFile(null)
        setUnitName('')
        setDescription('')
        setUrl('')
    }

    //useAsync
    const { execute, status } = useAsync(handleNftMint, false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        toggleIsModalOpen();
        await execute();
        return 'Nft Minted!'
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
                            <StyledForm onSubmit={handleSubmit}>
                                <h1
                                    style={{ fontSize: '3rem', marginBottom: '2rem' }}>
                                    Mint NFTS the easy way</h1>
                                {/* Name */}
                                <label htmlFor="nft-name">Name of NFT</label>
                                <input type="text" id="nft-name" placeholder='Ex: SMC #1' value={name} onChange={(e) => setName(e.target.value)} required />
                                {/* Media */}
                                <label htmlFor="media">Media</label>
                                <input type="file" id="media" onChange={handleChange} required />
                                {/* Unit-name */}
                                <label htmlFor="unit-name">Unit Name</label>
                                <input type="text" id="unit-name" placeholder='(Optional) Ex: SMC#001' value={unit_Name} onChange={(e) => setUnitName(e.target.value)} />
                                {/* Descripton */}
                                <label htmlFor="description">Description</label>
                                <input type="text" id="description" placeholder='(Optional) Ex: Dapper Cat' value={description} onChange={(e) => setDescription(e.target.value)} />
                                {/* URL */}
                                <label htmlFor="url">External URL</label>
                                <input type="text" id="url" placeholder='(Optional) Ex: yourwebsite.com' value={url} onChange={(e) => setUrl(e.target.value)} />
                                {/* Submit */}
                                <input type="submit" value="Mint" disabled={name === '' || file === null || status === "pending"} />
                            </StyledForm>
                            <Modal
                                icon={status === "pending" ? (<Loader />) : status === 'success' ? (<HiOutlineCheckCircle style={{ color: 'greenyellow' }} />) : status === 'error' ? (<HiOutlineXCircle style={{ color: 'red' }} />) : null}
                                tx={txnResponse.txID}
                                status={status}
                                isModalOpen={isModalOpen}
                                toggleIsModalOpen={toggleIsModalOpen}>
                                {
                                    status === "pending" ? 'Minting in Progress...' : status === 'success' ? `Asset: ${txnResponse.assetID} has been minted` : status === 'error' ? 'An Error has occured' : null
                                }
                            </Modal>
                        </>
                    )
            }
        </>
    )
}