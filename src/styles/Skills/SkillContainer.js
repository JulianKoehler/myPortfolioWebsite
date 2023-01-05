import styled from "styled-components";

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30%;

  & .image-container {
    width: 12rem;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${({ colorTheme }) => (colorTheme ? "#fefcf3" : "#121721")};
    box-shadow: 20px 20px 60px ${({ colorTheme }) => (colorTheme ? "#d8d6cf" : "#0a0d13")},
      -20px -20px 60px ${({ colorTheme }) => (colorTheme ? "#ffffff" : "#1a212f")};

    & svg {
      font-size: 6.2rem;
    }
  }

  & h3.skill-name {
    font-size: 1.8rem;
    font-weight: 400;
    color: ${({ theme }) => theme.text.soft};
    margin-top: 3rem;
  }
`;

export default SkillContainer;
