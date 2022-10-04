import styled from "styled-components";
import { TbFish } from "react-icons/tb";

export default function Header() {
  return (
    <StyledHeader>
      <FishIcon size="4rem" />
      <StyledNavigation>
        <Anchor>Startseite</Anchor>
        <Anchor>Produkte</Anchor>
        <Anchor>Kategorien</Anchor>
      </StyledNavigation>
    </StyledHeader>
  );
}

const FishIcon = styled(TbFish)`
  @media (max-width: 600px) {
    display: none;
  }
`;

const Anchor = styled.a`
  color: var(--text-secondary);

  &:hover {
    cursor: pointer;
    color: var(--text-primary);
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 4rem;
  border-bottom: 1px solid var(--text-primary);
  background-color: var(--background-light);
`;

const StyledNavigation = styled.nav`
  display: flex;
  gap: 2rem;
`;
