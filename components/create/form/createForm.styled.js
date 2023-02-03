import styled from "styled-components";

const StyledForm = styled.form`
  padding: 4rem;
  label,
  input {
    display: block;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    max-width: 50rem;
    padding: 1rem;
    border: 1px solid;
    &:focus {
      outline: none;
      border: 0.1rem solid #84caff;
      box-shadow: 0.1rem 0.2rem #1018280d, 0 0 0 0.4rem #d1e9ff;
    }
    &[type="submit"] {
      background-color: #9788ee;
      &:hover {
        background-color: #84caff;
      }
    }
  }
  label {
    font-size: 2rem;
  }
`;

export default StyledForm;
