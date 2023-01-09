import styled from "styled-components";

export const Button = styled.button`
  padding: 1.5rem 2.5rem;
  background-color: ${({ gs, create }) =>
    gs
      ? "hsla(191, 96%, 78%, 1)"
      : create
      ? "transparent"
      : "var(--charleston-green)"};
  background-image: ${({ gs }) =>
    gs &&
    `radial-gradient(
      at 78% 2%,
      hsla(46, 100%, 64%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 95% 67%, hsla(346, 76%, 84%, 1) 0px, transparent 50%),
    radial-gradient(at 23% 4%, hsla(346, 76%, 84%, 1) 0px, transparent 50%),
    radial-gradient(at 62% 66%, hsla(346, 76%, 84%, 1) 0px, transparent 50%),
    radial-gradient(at 34% 67%, hsla(254, 100%, 87%, 1) 0px, transparent 50%),
    radial-gradient(at 36% 42%, hsla(346, 77%, 84%, 1) 0px, transparent 50%),
    radial-gradient(at 98% 18%, hsla(46, 100%, 64%, 1) 0px, transparent 50%)`};
  color: ${({ gs, create }) =>
    gs || create ? "var(--charleston-green)" : "var(--silver-sand)"};
  /* color: ${({ gs, create }) =>
    gs
      ? "var(--charleston-green)"
      : create
      ? "white"
      : "var(--silver-sand)"}; */
  border: ${({ create }) =>
    create ? ".2rem solid var(--charleston-green)" : "none"};
  border-radius: 0.8rem;
`;
