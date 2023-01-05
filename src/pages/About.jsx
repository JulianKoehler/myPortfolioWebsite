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
              the help of online resources and by building my own projects, I could gain a decent level of
              knowledge and skills in frontend web development.
            </p>
          </div>
          <div className="aboutme-item-container">
            <h4>I am looking for a team</h4>
            <p>
              where I can create added value and from which I can learn a lot more than I could ever by
              building projects on my own. I am willing to challenge myself and to push my skills to the next
              level.
            </p>
          </div>
          <div className="aboutme-item-container">
            <h4>I am a cat guy</h4>
            <p>
              who likes to spend time with his two male cats Floki and Bounty. I also really enjoy being
              outside in nature, going for a run or hitting the gym. I am keen about staying healthy and to
              also push myself in terms of physical fitness.
            </p>
          </div>
          <div className="aboutme-item-container">
            <h4>It’s never too late</h4>
            <p>
              to chase your dreams and do what you love. I never felt a drive like this when doing things. I
              want to be part of the ever evolving Tech-industry to drive digitilization and solve problems.
            </p>
          </div>
        </Facts>
      </Content>
      <Aside active="about" />
    </AboutPage>
  );
};

export default About;
