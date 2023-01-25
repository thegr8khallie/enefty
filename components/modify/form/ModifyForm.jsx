import { useState } from "react";
import StyledModifyForm from "./modifyForm.styled";

export const ModifyForm = () => {
    const [formState, setFormState] = useState('');
    return (
        <StyledModifyForm>
            <h1>Modify Your already existing NFTs</h1>
            <select>
                <option value="Select...">Select...</option>
                <option value="Edit" onClick={() => setFormState('Edit')}>Edit</option>
                <option value="Destroy" onClick={() => setFormState('Destroy')}>Destroy</option>
            </select>
        </StyledModifyForm>
    )
}
