import styled from "styled-components";

const StyledSidebar = styled.nav`
  background-color: #1d1933;
  padding: 1rem;
  text-align: center;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  li {
    font-size: 2.5rem;
    padding: 1rem;
    transition: 0.25s;
    margin-bottom: 1rem;
    &:first-child {
      margin-top: 1rem;
    }
    &:not(:first-child):hover {
      background-color: #121128;
    }
  }
`;

export default StyledSidebar;
