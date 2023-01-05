import styled from "styled-components";

const Wrapper = styled.aside`
  display: flex;
  align-items: center;
  height: 100%;
  margin: auto 0;
  margin-right: 5rem;

  & nav div {
    cursor: pointer;
  }

  @media (max-width: 430px) {
    margin-right: 3rem;
  }
`;

export default Wrapper;
