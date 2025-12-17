import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  margin-top: 0.5rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #00FF00;
  }

  > div {
    display: flex;
    /* justify-content: space-between; */
    gap: 2rem;
  }

  @media (max-width: 1150px) {
    padding: 2rem;
  }

  @media (max-width: 1000px) {
    padding: 1.5rem;
  }

  @media (max-width: 750px) {
    padding: 1.5rem;

    h1 {
      font-size: 2rem;
    }

    > div {
      flex-direction: column;
    }
  }
`;

export const ContactItemContainer = styled.button`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  background-color: #00FF00;
  border-radius: 8px;
  cursor: pointer;
  border: 0;

  h2 {
    color: #00FF00;
  }

  svg {
    color: #00FF00;
  }

  &:hover {
    h2 {
      color: #00FF00;
    }

    svg {
      color: #00FF00;
    }
  }

  @media (max-width: 650px) {
    gap: 1rem;
    padding-right: 0.25rem;
    padding-left: 0.25rem;

    h2 {
      word-break: break-all;
    }
  }
`;
