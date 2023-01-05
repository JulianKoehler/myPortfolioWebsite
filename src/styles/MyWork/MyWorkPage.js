import styled from "styled-components";
import { motion } from "framer-motion";

const MyWorkPage = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  min-height: 100vh;

  & .project-cards-container {
    width: 90%;
    margin-inline: auto;
    padding-top: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media (max-width: 430px) {
      grid-template-columns: 1fr;
      margin: 0 auto;
    }
  }

  & p {
    margin-top: 7%;

    & a {
      color: ${({ theme }) => theme.h1};
    }
  }
`;

export default MyWorkPage;
