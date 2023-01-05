import styled from "styled-components";
import { motion } from "framer-motion";

const ThemeToggler = styled(motion.div)`
  display: flex;
  justify-content: ${({ colorTheme }) => (colorTheme ? "flex-end" : "flex-start")};
  align-items: center;
  width: 4rem;
  height: 2rem;
  margin-right: 5rem;
  background-color: ${({ theme }) => theme.themeToggler.bar};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5rem;
  cursor: pointer;

  & .togglerCircle {
    width: 2.2rem;
    height: 2.2rem;
    background-color: ${({ theme }) => theme.themeToggler.circle};
    border-radius: 50%;
  }
`;
export default ThemeToggler;
