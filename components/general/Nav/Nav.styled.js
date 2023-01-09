import styled from "styled-components";

const StyledNav = styled.nav`
  width: 100vw;
  background-color: grey;
  padding: 3rem 4rem;
  position: fixed;
  top: 0;
  ul {
    display: flex;
    align-items: center;
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
  //Tablet Styles
  //Mobile Styles
  @media only screen and (max-width: 480px) {
    padding: ${(props) => (props.isClosed ? 0 : "1rem")};
    ul {
      height: 100vh;
      width: 100vw;
      padding: 8rem 0;
      flex-direction: column;
      background-color: grey;
      align-items: center;
      justify-content: center;
      position: relative;
      li {
        flex-basis: 100%;
        &:first-child {
          margin-right: 0;
          position: absolute;
          top: 2rem;
          left: 2rem;
        }
        &:last-child {
          margin-left: 0;
        }
        &:nth-child(2) {
          margin-left: 0;
        }
        &:nth-child(5) {
          margin-right: 0;
        }
      }
    }
  }
`;

export default StyledNav;
