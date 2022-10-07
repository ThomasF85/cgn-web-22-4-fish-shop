import styled from "styled-components";

const Button = styled.button`
  background-color: var(--text-secondary);
  color: var(--white);
  border: none;
  border-radius: 0.2rem;
  padding: 0.4rem 0.75rem;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    cursor: pointer;
    background-color: var(--text-primary);
  }
`;

export default Button;
