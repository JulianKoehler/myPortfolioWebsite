import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactPage from "../styles/Contact/ContactPage";
import Content from "../styles/Content";
import Aside from "../components/Navbar/Aside";
import Form from "../components/Contact/Form";

const Contact = () => {
  const delay = time => new Promise(resolve => setTimeout(resolve, time));

  const [copyFeedbackClassNames, setFeedbackClassNames] = useState("copied-feedback");

  function copyEmailHandler() {
    navigator.clipboard
      .writeText("julkoehl@icloud.com")
      .then(() => giveFeedback())
      .catch(err => console.log(err));
    delay(1000).then(() => removeFeedback());
  }

  function giveFeedback() {
    setFeedbackClassNames("copied-feedback show");
  }

  function removeFeedback() {
    setFeedbackClassNames("copied-feedback");
  }

  return (
    <ContactPage
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      id="contact">
      <Content>
        <h1>Contact</h1>
        <h4>
          Let's have a chat. Feel free to leave me a message via the form below.
          {/* <span
            className="email"
            onClick={copyEmailHandler}>
            <div className={copyFeedbackClassNames}>Copied!</div>julian.koehler.business@gmail.com
          </span> */}
        </h4>
        <Form />
      </Content>
      <Aside active="contact" />
    </ContactPage>
  );
};

export default Contact;
