import styled from "styled-components";
import { motion } from "framer-motion";

const ContactPage = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  min-height: 100vh;

  & .email {
    position: relative;
  }

  & .copied-feedback {
    position: absolute;
    bottom: 3rem;
    transform: translateX(50%);
    color: white;
    padding: 1rem;
    background-color: grey;
    border-radius: 1rem;
    opacity: 0;
    transition: opacity 0.35s;
    pointer-events: none;
  }

  & .show {
    opacity: 1;
  }

  & h4 {
    width: 73rem;
    text-align: left;
    margin: 7% 0 5rem 25.3%;
    max-width: 75%;

    & span {
      color: ${({ theme }) => theme.h1};
      cursor: pointer;
    }

    & .success-message {
      margin-top: 10rem;
    }

    @media (max-width: 900px) {
      margin: 15% auto 3rem;
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
