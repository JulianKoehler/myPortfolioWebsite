import React from "react";
import ContactForm from "../../styles/Contact/ContactForm";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm("mdovozve");
  if (state.succeeded) {
    return <p>Thanks for your message! I will get in contact with you asap.</p>;
  }

  return (
    <ContactForm onSubmit={handleSubmit}>
      <input
        name="name"
        id="name"
        type="text"
        placeholder="Your Name"
      />
      <input
        name="email"
        id="email"
        type="email"
        placeholder="Your Email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        name="message"
        id="message"
        placeholder="Your Message"
        cols="30"
        rows="10"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button
        type="submit"
        disabled={state.submitting}>
        Send
      </button>
    </ContactForm>
  );
};

export default Form;
