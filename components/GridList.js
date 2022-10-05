import styled from "styled-components";

const GridList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  & a {
    display: block;
    border: 1px solid var(--text-secondary);
    background-color: var(--background-light);
    color: var(--text-secondary);
    border-radius: 0.5rem;
    padding: 1rem;
    text-decoration: none;
    height: 100%;
  }

  & a:hover {
    background-color: var(--white);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default GridList;
