import { lighten } from 'polished'
import styled from 'styled-components'

import * as Menubar from '@radix-ui/react-menubar'

interface NavLinkProps {
  isActive: boolean
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

  @media (max-width: 600px) {
    display: none;
  }

  > div {
    display: flex;
    gap: 2rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${(props) => props.theme.primary};
  }

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  button {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    border: 0;
    border-radius: 8px;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const MobileContainer = styled.header`
  width: 100%;
  display: none;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-between;
  height: 4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};

  @media (max-width: 600px) {
    display: flex;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${(props) => props.theme.primary};
  }
`

export const Trigger = styled(Menubar.Trigger)`
  padding: 0.7rem;
  background-color: ${(props) => props.theme.primary};
  border-radius: 8px;
  outline-offset: 3px;
  outline: 1px solid ${(props) => props.theme.primary};
  border: none;

  > svg {
    color: ${(props) => props.theme.backgroundLight};
    font-size: 1.25rem;
  }
  /* box-shadow: 0px 2px 10px #77c5ae4c; */
`

export const Content = styled(Menubar.Content)`
  background-color: ${(props) => props.theme.backgroundLight};
  padding: 0px;
  border-radius: 8px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);

  display: none;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`

export const BaseItem = styled(Menubar.Item)`
  /* background-color: ${(props) => props.theme.inputBackground}; */
  background-color: ${(props) => props.theme.backgroundLight};
  color: ${(props) => props.theme.primary};
  font-size: 1.125rem;
  font-weight: medium;
  text-transform: uppercase;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  outline: none;
  cursor: pointer;

  > a {
    color: ${(props) => props.theme.primary};
  }

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.inputBackground};

    > a {
      color: ${(props) => props.theme.white};
    }
  }
`

export const ItemTop = styled(BaseItem)`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const ItemBottom = styled(BaseItem)`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0px;

  button {
    background-color: ${(props) => props.theme.backgroundLight};
    /* background-color: ${(props) => props.theme.inputBackground}; */
    color: ${(props) => props.theme.primary};
    font-size: 1.125rem;
    text-transform: uppercase;
    border: 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 100%;
    height: 100%;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    &:hover {
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.white};
    }
  }
`

export const NavLinkContainer = styled.li<NavLinkProps>`
  display: flex;

  @media (max-width: 600px) {
    display: none;
  }

  a {
    text-transform: uppercase;
    color: ${(props) =>
      props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;
    &:hover {
      color: ${(props) =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.textHighlight)};
    }
  }
`

export const MobileNavLinkContainer = styled.li`
  display: none;

  @media (max-width: 600px) {
    display: flex;
  }

  a {
    color: ${(props) => props.theme.primary};
    text-transform: uppercase;
    text-align: center;
    transition: 0.5s;
  }
`
