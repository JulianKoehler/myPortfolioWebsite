import styled from "styled-components";

const Greeting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  grid-area: greeting;

  & h2 {
    margin-right: 6.5rem;

    @media (max-width: 430px) {
      margin-right: 0;
    }
  }

  @media (max-width: 750px) {
    align-items: flex-start;

    & h2 {
      margin-right: 0;
    }
  }

  @media (max-width: 430px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    & h1,
    h2 {
      font-size: 3.6rem;
    }
  }

  @media (max-width: 390px) {
    & h1,
    h2 {
      font-size: 3.2rem;
    }
  }
`;

export default Greeting;
