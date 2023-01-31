import React from "react";
import { motion } from "framer-motion";
import Aside from "../components/Navbar/Aside";
import AboutPage from "../styles/About/AboutPage";
import Content from "../styles/Content";
import Facts from "../styles/About/Facts";

const About = () => {
  return (
    <AboutPage
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      s
      id="about">
      <Content>
        <h1>About Me</h1>
        <Facts>
          <div className="aboutme-item-container">
            <h4>I am burning for computers</h4>
            <p>
              since my childhood and fell in love with coding in July 2022. I found my passion in it and with
              the help of online resources and by coding projects on my own from scratch, I could gain a
              decent level of knowledge and skills in frontend web development.
            </p>
          </div>
          <div className="aboutme-item-container">
            <h4>I am looking for a team</h4>
            <p>
              where I can create added value and from which I can learn a lot more than I could ever by
              building projects on my own. I am willing to challenge myself and to push my skills to the next
              level. I am 100% sure my passion and intrinsic motivation will help me on that way.
            </p>
          </div>
          <div className="aboutme-item-container">
            <h4>I have a business background</h4>
            <p>
              due to my previous jobs. I know how to think economoically, analytical and customer centric. I
              even dedicated my thesis to customer relationship management and its effect on customer
              satisfactory.
            </p>
          </div>
          <div className="aboutme-item-container">
            <h4>It’s never too late</h4>
            <p>
              to chase your dreams and do what you really love. I never felt a drive like this when doing
              things. I want to be part of the solutions we find to the challenges we face.
            </p>
          </div>
        </Facts>
      </Content>
      <Aside active="about" />
    </AboutPage>
  );
};

export default About;
