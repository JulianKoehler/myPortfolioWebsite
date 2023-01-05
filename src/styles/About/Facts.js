import styled from "styled-components";

const Facts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 80%;
  margin: 10% auto 0;

  & .aboutme-item-container {
    text-align: left;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1530px) {
    font-size: 2rem;
  }
`;

export default Facts;
