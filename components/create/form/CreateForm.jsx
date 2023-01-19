import StyledForm from './createForm.styled'
import { useState } from 'react';

export const CreateForm = () => {
    const [name, setName] = useState('');
    const [media, setMedia] = useState();
    const [unitName, setUnitName] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const handleChange = (e) => {
        if (e.target.files) {
            setMedia(e.target.files[0])
        }
    }

    return (
        <StyledForm>
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