import styled from "styled-components";

export const StyledHero = styled.header`
  width: 100vw;
  margin-top: 11rem;
  background-color: aqua;
  display: flex;
  justify-content: space-between;
  padding: 4rem;
  .hero-txt {
    flex-basis: 50%;
    h1 {
      font-size: 8rem;
      margin-bottom: 2rem;
    }
    p {
      margin-bottom: 2rem;
    }
    .btn-container {
      display: flex;
      width: 40%;
      justify-content: space-between;
    }
  }
  .hero-carousel {
    flex-basis: 50%;
    display: grid;
    place-items: center;
  }
`;
