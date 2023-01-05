import styled from "styled-components";

const SkillBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 80%;
  margin: auto;

  transform: translateY(10%);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(5, 1fr);
    margin: 0 auto;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
  }

  @media (max-width: 730px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
  }

  @media (max-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
    transform: translateY(0%);
  }

  @media (max-width: 430px) {
    width: 100%;
    transform: scale(0.75) translateY(-15%);
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 5%;
  }

  @media (max-width: 390px) {
    transform: scale(0.7) translateY(-15%);
  }

  @media (max-width: 375px) {
    transform: scale(0.6) translateY(-25%) translateX(-25%);
    margin-right: -3.5rem;
  }
`;

export default SkillBoxes;
