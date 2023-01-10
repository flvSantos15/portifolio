import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-between;
  height: 4rem;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};

  > div {
    display: flex;
    /* justify-content: space-between; */
    gap: 2rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${props => props.theme.primary};
  }

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  button {
    /* width: 5rem; */
    /* height: 2.5rem; */
    background-color: ${props => props.theme.primary};
    border: 0;
    border-radius: 8px;
    padding: 1rem;
    font-size: 1rem;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;
    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.textHighlight)};
    }
  }
`;
