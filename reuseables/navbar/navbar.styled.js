import styled from "styled-components";

const StyledNav = styled.nav`
  width: 100%;
  padding: 2rem;
  display: flex;
  box-shadow: 0 1rem 0.7rem 0 #121128ea;
  > div {
    margin-left: auto;
    display: flex;
    gap: 2rem;
    > div {
      width: 15rem;
      padding: 1rem;
      background-color: #111;
      overflow: hidden;
      span {
        width: 100%;
      }
    }
    button {
      padding: 1rem;
      background-color: #3f48cc;
      border: none;
    }
  }
`;
export default StyledNav;
