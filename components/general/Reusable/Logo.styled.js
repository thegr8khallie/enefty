import styled from "styled-components";

export const Logo = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 2rem 0 2rem 0;
  display: ${(props) => (props.secondary ? "none" : "grid")};
  place-items: center;
  position: relative;
  background-color: hsla(191, 96%, 78%, 1);
  background-image: radial-gradient(
      at 78% 2%,
      hsla(46, 100%, 64%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 95% 67%, hsla(346, 76%, 84%, 1) 0px, transparent 50%),
    radial-gradient(at 23% 4%, hsla(346, 76%, 84%, 1) 0px, transparent 50%),
    radial-gradient(at 62% 66%, hsla(346, 76%, 84%, 1) 0px, transparent 50%),
    radial-gradient(at 34% 67%, hsla(254, 100%, 87%, 1) 0px, transparent 50%),
    radial-gradient(at 36% 42%, hsla(346, 77%, 84%, 1) 0px, transparent 50%),
    radial-gradient(at 98% 18%, hsla(46, 100%, 64%, 1) 0px, transparent 50%);
  div {
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
  @media only screen and (max-width: 480px) {
    display: ${({ secondary, isClosed }) =>
      secondary && isClosed ? "none" : "grid"};
    transform: scale(0.8);
  }
`;
