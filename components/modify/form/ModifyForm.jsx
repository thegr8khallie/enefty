import StyledModifyForm from "./modifyForm.styled";

export const ModifyForm = () => {


    return (
        <StyledModifyForm>
            <h1>Modify Your already existing NFTs</h1>
            <label htmlFor="assetID">AssetID</label>
            <input type="text" id="assetID" placeholder="Enter AssetID" />
            <label htmlFor="description">Description</label>
            <input type="text" id="description" placeholder="Edit Asset description" />
        </StyledModifyForm>
    )
}
