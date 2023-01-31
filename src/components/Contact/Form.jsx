import React, { useEffect, useState } from "react";
import { Comment } from "react-loader-spinner";
import ContactForm from "../../styles/Contact/ContactForm";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm("mdovozve");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loadingSpinner = (
    <Comment
      visible={true}
      height="30"
      width="30"
      ariaLabel="comment-loading"
      wrapperStyle={{}}
      wrapperClass="comment-wrapper"
      color="#fff"
      backgroundColor="var(--dark-purple)"
    />
  );

  useEffect(() => {
    if (state.submitting) {
      setIsSubmitting(true);
    } else {
      setIsSubmitting(false);
    }
  }, [state]);

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
        disabled={isSubmitting}>
        {isSubmitting ? loadingSpinner : "Send"}
      </button>
    </ContactForm>
  );
};

export default Form;
