import styled from "styled-components";

const StyledNav = styled.nav`
  width: 100vw;
  background-color: grey;
  padding: 4rem 1rem;
  ul {
    display: flex;
    gap: 3rem;
    li {
      &:first-child {
        margin-right: auto;
      }
      &:last-child {
        margin-left: auto;
      }
      &:nth-child(2) {
        margin-left: auto;
      }
      &:nth-child(5) {
        margin-right: auto;
      }
    }
  }
`;
export default StyledNav;
