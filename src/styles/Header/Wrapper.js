import styled from "styled-components";

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  backdrop-filter: blur(2rem);
  -webkit-backdrop-filter: blur(2rem);
  z-index: 2;

  & nav {
    margin-inline: auto;
  }

  & nav ul {
    list-style: none;
    display: flex;
    justify-content: center;

    & li {
      margin-inline: 2.5rem;
      color: ${({ theme }) => theme.text.navLink};
      font-weight: 700;
      font-size: 2rem;
      line-height: 3rem;
      transition: transform 0.3s;
      white-space: nowrap;

      &:hover {
        transform: scale(1.2);
      }

      @media (max-width: 720px) {
        font-size: 1.8rem;
        margin-inline: 1rem;
      }
    }
  }

  @media (max-width: 430px) {
    height: 5%;

    & nav ul li {
      display: none;
    }
  }
`;

export default Wrapper;
