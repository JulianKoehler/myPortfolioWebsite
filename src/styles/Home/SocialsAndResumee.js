import styled from "styled-components";

const SocialsAndResumee = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;
  gap: 5rem;
  grid-area: socials;
  transition: transform 0.5s;

  & .container {
    display: flex;
    align-items: center;
    gap: 1.4rem;

    & .download-btn {
      margin-left: 1.2rem;
    }
  }

  & .icon-wrapper {
    transition: transform 0.15s;
    &:hover {
      transform: scale(1.6) translateY(-0.4rem);
    }

    & a {
      color: ${({ theme }) => theme.text.default};
    }
  }

  & a {
    font-size: 3.5rem;
    color: black;
    display: flex;
    align-items: center;
  }

  & .wrapping-circle {
    width: 3.5rem;
    height: 3.5rem;
    background-color: ${({ theme }) => theme.text.default};
    border-radius: 50%;
    position: relative;
    transition: transform 0.15s;

    &:hover {
      transform: scale(1.6) translateY(-0.4rem);
    }

    & a {
      font-size: 2.2rem;
      color: ${({ theme }) => theme.text.socials};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -42%);
    }
  }

  @media (max-width: 430px) {
    width: 100%;
    justify-content: center;
    margin: 0 0 auto 0;
  }
`;

export default SocialsAndResumee;
