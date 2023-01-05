import styled from "styled-components";

const SocialsAndResumee = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: 5rem;
  grid-area: socials;
  transition: transform 0.5s;

  & .container {
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }

  & button {
    margin-left: 1.2rem;
  }

  & a {
    font-size: 3.5rem;
    color: black;
  }

  & .wrapping-circle {
    width: 3.5rem;
    height: 3.5rem;
    background-color: ${({ theme }) => theme.text.default};
    border-radius: 50%;
    position: relative;

    & a {
      font-size: 2.2rem;
      color: ${({ theme }) => theme.text.socials};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -42%);
    }
  }

  & .icon-wrapper a {
    color: ${({ theme }) => theme.text.default};
  }

  @media (max-width: 430px) {
    width: 100%;
    justify-content: center;
    margin: 0 0 auto 0;
  }
`;

export default SocialsAndResumee;
