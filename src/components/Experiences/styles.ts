import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  > section {
    width: 100%;
    margin-top: 7rem;
    display: flex;
    /* gap: 1.5rem; */
    gap: 2rem;
    padding-bottom: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};
    @media (max-width: 1000px) {
      gap: 1rem;
    }
    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;
    }
  }
`;
/* Session container in display grid with 3 colums */

export const SessionContainer = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

export const ItemContainer = styled.div`
  @media (max-width: 1000px) {
    > div {
      height: 15rem;
      padding-top: 1.5rem;
      h1 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }
      h2 {
        font-size: 1rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
  @media (max-width: 700px) {
    &:nth-child(even) > div {
      margin-top: 0;
    }
    &:hover > div {
      transform: translateY(0);
    }
    > div {
      height: auto;
      padding: 2rem;
      max-width: 100%;
      h1 {
        font-size: 2rem;
      }
      h2 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;
