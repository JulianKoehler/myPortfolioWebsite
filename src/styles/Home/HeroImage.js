import styled from "styled-components";

const HeroImage = styled.img`
  border-radius: 2rem;
  width: 35rem;
  margin: auto;
  grid-area: image;
  filter: saturate(0);
  transition: filter 0.35s;

  &:hover {
    filter: saturate(1);
  }

  @media (max-width: 750px) {
    margin: 5rem auto;
  }

  @media (max-width: 430px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export default HeroImage;
