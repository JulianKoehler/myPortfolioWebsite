import styled from "styled-components";
import { motion } from "framer-motion";

const MyWorkPage = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  min-height: 100vh;

  & .project-cards-container {
    display: grid;
    width: 90%;
    margin-inline: auto;
    padding-top: 5%;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    width: 70%;

    @media (max-width: 1100px) {
      grid-template-columns: 1fr;
      margin: 0 auto;
    }
  }

  & p:last-child {
    max-width: 80%;
    margin: 5rem auto;

    & a {
      color: ${({ theme }) => theme.h1};
    }
  }
`;

export default MyWorkPage;
