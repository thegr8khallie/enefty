import styled from "styled-components";

const StyledLayout = styled.main`
  height: 100vh;
  width: 100vw;
  padding: 1rem;
  display: grid;
  grid-template: 100% / 6rem calc(100% - 6rem);
  gap: 1rem;
  section {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    background-color: #1d1933;
  }
`;

export default StyledLayout;
