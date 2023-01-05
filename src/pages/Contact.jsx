import React from "react";
import { motion } from "framer-motion";
import ContactPage from "../styles/Contact/ContactPage";
import Content from "../styles/Content";
import Aside from "../components/Navbar/Aside";
import Form from "../components/Contact/Form";

const Contact = () => {
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
          Get in touch with me via the form below or contact me directly via <span>julkoehl@icloud.com</span>
        </h4>
        <Form />
      </Content>
      <Aside active="contact" />
    </ContactPage>
  );
};

export default Contact;
