import styled from "styled-components";
import { motion } from "framer-motion";

const ContactPage = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  min-height: 100vh;

  & h4 {
    width: 73rem;
    text-align: left;
    margin: 7% 0 0 25.3%;

    & span {
      color: ${({ theme }) => theme.h1};
    }

    @media (max-width: 430px) {
      width: 73%;
      margin: 15% auto 3rem;
    }
  }

  & button {
    max-width: 10rem;
  }
`;

export default ContactPage;
