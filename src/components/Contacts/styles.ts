import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: ${props => props.theme.primary};
  }

  > div {
    display: flex;
    /* justify-content: space-between; */
    gap: 2rem;
  }
`;

export const ContactItem = styled.button`
  padding-top: 2rem;
  padding-right: 2.5rem;
  padding-bottom: 2rem;
  padding-left: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  background-color: ${props => props.theme.primary};
  border-radius: 8px;
  cursor: pointer;
  border: 0;

  h2 {
    color: ${props => props.theme.textHighlight};
  }

  svg {
    color: ${props => props.theme.textHighlight};
  }

  &:hover {
    h2 {
      color: ${props => props.theme.background};
    }

    svg {
      color: ${props => props.theme.background};
    }
  }
`;
