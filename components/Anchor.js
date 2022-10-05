import styled from "styled-components";

const Anchor = styled.a`
  color: var(--text-secondary);
  text-decoration: ${({ active }) => (active ? "underline" : "none")};

  &:hover {
    cursor: pointer;
    color: var(--text-primary);
  }
`;

export default Anchor;
