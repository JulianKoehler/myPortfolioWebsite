import styled from "styled-components";

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.2);
  width: 28rem;
  height: 48rem;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.projectCard};
  margin-inline: auto;

  &:hover img {
    filter: saturate(1);
  }

  & img {
    width: 100%;
    min-height: 35%;
    object-fit: cover;
    border-radius: 1.6rem 1.6rem 0 0;
    filter: saturate(0);
    transition: filter 0.35s;
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
    font-size: 1.4rem;
  }

  & button {
    margin: 1.6rem 0.5rem;
  }

  @media (max-height: 810px) {
    transform: scale(0.9);
  }

  @media (max-width: 430px) {
    margin: 0 auto;
  }
`;

export default ProjectCard;
