import styled from "styled-components";

const Facts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  max-width: 50%;
  margin: 10% auto 0;

  & .aboutme-item-container {
    text-align: left;
  }

  @media (min-width: 1530px) {
    font-size: 2rem;
  }
`;

export default Facts;
