import styled from "styled-components";

const HamBurger = styled.button`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 0.6rem;
  display: none;
  place-items: center;
  background-color: transparent;
  border: none;
  overflow: hidden;
  z-index: 5;
  position: fixed;
  top: 0;
  right: 0;
  .burger {
    position: relative;
    width: 3rem;
    &,
    &::before,
    &::after {
      border-radius: 0.2rem;
      height: 0.2rem;
      background-color: #f8fafc;
      transition: 1s;
    }
    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
    }
    &::before {
      top: -0.8rem;
    }
    &::after {
      top: 0.8rem;
    }
  }
  .burger-swipe,
  .burger-swipe::before,
  .burger-swipe::after {
    transition: 0.2s ease-in-out;
  }
  .burger-swipe.is-closed {
    transform: translateX(-5rem);
    &::before {
      transform: rotate(-45deg) translate(3rem, 4.2rem);
    }
    &::after {
      transform: rotate(45deg) translate(3rem, -4.2rem);
    }
  }
  @media only screen and (max-width: 480px) {
    display: grid;
  }
`;

export const Burger = ({ isClosed, setIsClosed }) => {
  return (
    <HamBurger onClick={() => setIsClosed(!isClosed)}>
      <div className={`burger burger-swipe ${isClosed && "is-closed"}`} />
    </HamBurger>
  );
};
