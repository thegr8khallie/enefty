import styled from "styled-components";

const StyledModifyForm = styled.form`
  padding: 4rem;
  h1 {
    margin-bottom: 2rem;
  }
  select {
    padding: 1rem;
    margin-bottom: 2rem;
    &:focus {
      border: none;
      outline: none;
    }
  }
`;

export default StyledModifyForm;
