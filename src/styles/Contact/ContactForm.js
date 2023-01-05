import styled from "styled-components";

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 50%;
  margin: 3rem auto;

  & input,
  textarea {
    border-radius: 0.6rem;
    border: none;
    padding: 1rem 1rem 1rem 2rem;
    background-color: ${({ theme }) => theme.form};
    font-family: inherit;
    color: ${({ theme }) => theme.text.soft};

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.text.soft};
    }
  }

  & input {
    max-width: 75%;
  }

  & textarea {
    resize: none;
  }

  @media (max-width: 430px) {
    max-width: 75%;

    & input {
      max-width: unset;
    }
  }
`;

export default ContactForm;
