import { useState } from "react";
import StyledModifyForm from "./modifyForm.styled";
import algosdk from "algosdk";
import MyAlgoConnect from "@randlabs/myalgo-connect";

export const ModifyForm = () => {
    const [assetID, setAssetID] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const updateNFTNote = async (client, wallet) => {
        let address = JSON.parse(localStorage.getItem('address'));
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
        setAssetID('');
        setDescription('');
        setUrl('');
    }
    const handleNftEdit = async (e) => {
        e.preventDefault();
        const myAlgoWallet = new MyAlgoConnect();
        //Client Parameters
        const token =
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        const server = "https://node.testnet.algoexplorerapi.io";
        const port = 443;
        //Init Client
        let algodClient = new algosdk.Algodv2(token, server, port);
        //NFT
        try {
            // let assetIndex = parseInt(assetID)
            let existingAsset = await algodClient.getAssetByID(assetID).do();
            updateNFTNote(algodClient, myAlgoWallet);
            //alert(`${existingAsset.index} found!`)
        } catch (err) {
            alert('assetnotfound!!')
        }
    }
    return (
        <StyledModifyForm onSubmit={handleNftEdit}>
            <h1>Modify Your already existing NFTs</h1>
            <label htmlFor="assetID">AssetID</label>
            <input type="number" id="assetID" placeholder="Enter AssetID" value={assetID} onChange={(e) => setAssetID(e.target.value)} />
            <label htmlFor="description">Description</label>
            <input type="text" id="description" placeholder="Edit Asset description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <label htmlFor="url">External URL</label>
            <input type="text" id="url" placeholder="Edit Asset description" value={url} onChange={(e) => setUrl(e.target.value)} />
            <input type="submit" value="Modify" />
        </StyledModifyForm>
    )
}
