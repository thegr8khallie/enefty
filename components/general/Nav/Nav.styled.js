import styled from "styled-components";

const StyledNav = styled.nav`
  width: 100vw;
  background-color: grey;
  padding: 3rem 4rem;
  ul {
    display: flex;
    align-items: center;
    gap: 3rem;
    li {
      &:first-child {
        margin-right: auto;
        div {
          height: 5rem;
          width: 5rem;
          border-radius: 2rem 0 2rem 0;
          display: grid;
          place-items: center;
          position: relative;
          background-color: hsla(191, 96%, 78%, 1);
          background-image: radial-gradient(
              at 78% 2%,
              hsla(46, 100%, 64%, 1) 0px,
              transparent 50%
            ),
            radial-gradient(
              at 95% 67%,
              hsla(346, 76%, 84%, 1) 0px,
              transparent 50%
            ),
            radial-gradient(
              at 23% 4%,
              hsla(346, 76%, 84%, 1) 0px,
              transparent 50%
            ),
            radial-gradient(
              at 62% 66%,
              hsla(346, 76%, 84%, 1) 0px,
              transparent 50%
            ),
            radial-gradient(
              at 34% 67%,
              hsla(254, 100%, 87%, 1) 0px,
              transparent 50%
            ),
            radial-gradient(
              at 36% 42%,
              hsla(346, 77%, 84%, 1) 0px,
              transparent 50%
            ),
            radial-gradient(
              at 98% 18%,
              hsla(46, 100%, 64%, 1) 0px,
              transparent 50%
            );
          > div {
            border-radius: 50%;
            background-color: black;
            &:first-child {
              width: 1rem;
              height: 1rem;
            }
            &:last-child {
              width: 0.5rem;
              height: 0.5rem;
              position: absolute;
              top: 0.7rem;
              right: 0.7rem;
            }
          }
        }
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
    padding: ${(props) => props.isClosed && 0};
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
