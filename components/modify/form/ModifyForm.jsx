import { useState } from "react";
import DestroyForm from "../destroyform/DestroyForm";
import EditForm from "../editform/EditForm";
import StyledModifyForm from "./modifyForm.styled";

export const ModifyForm = () => {
    const [formState, setFormState] = useState('');

    const handleChange = (e) => {
        const selectBox = e.target;
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        setFormState(selectedValue);
    }
    return (
        <StyledModifyForm>
            <h1>Modify Your already existing NFTs</h1>
            <select onChange={handleChange}>
                <option value="Select...">Select...</option>
                <option value="Edit">Edit</option>
                <option value="Destroy">Destroy</option>
            </select>
            {formState === 'Edit' ? <EditForm /> : formState === 'Destroy' ? <DestroyForm /> : null}
        </StyledModifyForm>
    )
}
