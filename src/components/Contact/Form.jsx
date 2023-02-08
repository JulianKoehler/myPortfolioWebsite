import React, { useEffect, useRef, useState } from "react";
import { Comment } from "react-loader-spinner";
import ContactForm from "../../styles/Contact/ContactForm";
import { useForm, ValidationError } from "@formspree/react";
import { emailRegex } from "../../util/regex";

const Form = () => {
  const [state, handleSubmit] = useForm("mdovozve");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitable =
    !isSubmitting && name.trim().length >= 3 && email.match(emailRegex) && message.trim().length > 10;

  console.log(email.match(emailRegex));
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
    return <p>Thanks for your message! I will get back to you asap.</p>;
  }

  return (
    <ContactForm onSubmit={handleSubmit}>
      <input
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        id="name"
        type="text"
        placeholder="Your Name"
      />
      <input
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
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
        value={message}
        onChange={e => setMessage(e.target.value)}
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
        disabled={!submitable}>
        {isSubmitting ? loadingSpinner : "Send"}
      </button>
    </ContactForm>
  );
};

export default Form;
