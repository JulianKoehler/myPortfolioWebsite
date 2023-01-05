import React from "react";
import ContactForm from "../../styles/Contact/ContactForm";

const Form = () => {
  return (
    <ContactForm>
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
      <textarea
        name="message"
        id="message"
        placeholder="Your Message"
        cols="30"
        rows="10"></textarea>
      <button>Send</button>
    </ContactForm>
  );
};

export default Form;
