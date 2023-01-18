import styled from "styled-components";

const StyledBanner = styled.section`
  width: 100%;
  height: 50rem;
  padding: 0 2rem;
  margin-top: 2rem;
  position: relative;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  section {
    width: 100%;
    height: 100%;
    position: relative;
  }
  svg {
    width: 100%;
    height: 100%;
    .top-outer {
      transform-origin: 73px 69px;
      animation: rotate 30s linear infinite;
    }

    .top-inner {
      transform-origin: 73px 69px;
      animation: rotate 20s linear infinite;
    }

    .bottom-outer {
      transform-origin: 134px 222px;
      animation: rotate 30s linear infinite;
    }

    .bottom-inner {
      transform-origin: 134px 222px;
      animation: rotate 20s linear infinite;
    }
  }
  h1 {
    position: absolute;
    top: 2rem;
    left: 2rem;
    color: blanchedalmond;
    font-size: 7rem;
  }
  div {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    button {
      padding: 1rem;
      width: 15rem;
      &:nth-child(1) {
        background-color: #ba46e1;
        border: 0.2rem solid #ba46e1;
        margin-right: 2rem;
      }
      &:nth-child(2) {
        background-color: transparent;
        border: 0.2rem solid;
      }
    }
  }
`;

export default StyledBanner;
