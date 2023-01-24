import StyledForm from './createForm.styled'
import { useState } from 'react';
import algosdk from 'algosdk';
import { NFTStorage, Blob } from 'nft.storage';

export const CreateForm = () => {
    const [name, setName] = useState('');
    const [media, setMedia] = useState(null);
    const [unitName, setUnitName] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const handleChange = (e) => {
        if (e.target.files) {
            const data = e.target.files[0]
            const reader = new window.FileReader();
            reader.readAsArrayBuffer(data);
            reader.onloadend = () => {
                setMedia(Buffer(reader.result))
            }
            e.preventDefault();
        }
    }

    async function handleIPFSUpload(e) {
        e.preventDefault();
        const endpoint = "https://api.nft.storage";
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDdCNTFENGNjYzg5RGE4M0NGNjZlZjU5NjBBMjM5NTM1RWY1YmM1MDMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NjU1OTMwODcxNywibmFtZSI6ImhpZEFsZ29ORlRTIn0.jdiVjeCn647Rzgd60DUrQgL3aqe2hp2ezwWOQM00NOo'
        const storage = new NFTStorage({ endpoint, token });
        const cid = await storage.storeBlob(new Blob([media]));
        let ipfs = `ipfs://${cid}`
        return ipfs;
    }

    return (
        <StyledForm onSubmit={handleIPFSUpload}>
            <h1
                style={{ fontSize: '3rem', marginBottom: '2rem' }}>
                Mint NFTS the easy way</h1>
            {/* Name */}
            <label htmlFor="nft-name">Name of NFT</label>
            <input type="text" id="nft-name" placeholder='Ex: SMC #1' value={name} onChange={(e) => setName(e.target.value)} />
            {/* Media */}
            <label htmlFor="media">Media</label>
            <input type="file" id="media" onChange={handleChange} />
            {/* Unit-name */}
            <label htmlFor="unit-name">Unit Name</label>
            <input type="text" id="unit-name" placeholder='(Optional) Ex: SMC#001' value={unitName} onChange={(e) => setUnitName(e.target.value)} />
            {/* Descripton */}
            <label htmlFor="description">Description</label>
            <input type="text" id="description" placeholder='(Optional) Ex: Dapper Cat' value={description} onChange={(e) => setDescription(e.target.value)} />
            {/* URL */}
            <label htmlFor="url">External URL</label>
            <input type="text" id="url" placeholder='(Optional) Ex: yourwebsite.com' value={url} onChange={(e) => setUrl(e.target.value)} />
            <input type="submit" value="Mint" />
        </StyledForm>
    )
}