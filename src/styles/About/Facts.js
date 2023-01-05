import styled from "styled-components";

const Facts = styled.div`
  display: flex;
  gap: 4rem;
  max-width: 80%;
  margin: 10% auto 0;

  & .aboutme-item-container {
    text-align: left;
  }

  @media (max-width: 430px) {
    display: grid;
  }
`;

export default Facts;
