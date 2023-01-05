import styled from "styled-components";

const Hero = styled.div`
  width: 100%;
  max-width: 150rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "greeting image"
    "socials image";
  margin: 0 auto;

  @media (max-width: 1050px) {
    transform: scale(0.8);
  }

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    padding-bottom: 10%;
  }
`;

export default Hero;
