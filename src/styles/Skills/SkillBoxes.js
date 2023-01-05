import styled from "styled-components";

const SkillBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 80%;
  margin: auto;

  transform: translateY(10%);

  @media (max-width: 430px) {
    width: 100%;
    margin: 0 auto;
    transform: scale(0.75) translateY(-15%);
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 5%;
  }
`;

export default SkillBoxes;
