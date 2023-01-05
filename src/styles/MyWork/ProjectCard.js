import styled from "styled-components";

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.2);
  width: 28rem;
  min-height: 45rem;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.projectCard};

  & img {
    width: 100%;
    height: 35%;
    object-fit: cover;
    border-radius: 1.6rem 1.6rem 0 0;
  }

  & h3,
  h4,
  p {
    text-align: left;
    margin: 1.6rem 1.6rem 0 1.6rem;
  }

  & h4 {
    font-weight: 400;
    font-size: 1.4rem;

    & span {
      font-weight: 600;
    }
  }

  & p {
    font-size: 1.2rem;
  }

  & button {
    margin: 1.6rem 0.5rem;
  }

  @media (max-width: 1350px) {
    transform: scale(0.9);
  }

  @media (max-width: 430px) {
    margin: 0 auto;
  }
`;

export default ProjectCard;
