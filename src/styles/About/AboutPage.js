import styled from "styled-components";
import { motion } from "framer-motion";

const AboutPage = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  color: ${({ theme }) => theme.text.soft};
`;

export default AboutPage;
