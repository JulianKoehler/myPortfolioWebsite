import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import cv from "../data/cv.pdf";
import heroImage from "../assets/Bewerbungsfoto.jpg";
import Aside from "../components/Navbar/Aside";
import Hero from "../styles/Home/Hero";
import HomePage from "../styles/Home/HomePage";
import Greeting from "../styles/Home/Greeting";
import SocialsAndResumee from "../styles/Home/SocialsAndResumee";
import HeroImage from "../styles/Home/HeroImage";
import Badge from "../components/Hero/Badge";

const Home = () => {
  return (
    <HomePage
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      id="home">
      <Hero>
        <Greeting>
          <h2>Hi, there! I am Julian.</h2>
          <h1>Front-End Developer</h1>
        </Greeting>
        <SocialsAndResumee>
          <div className="container">
            <div className="icon-wrapper">
              <a
                target="_blank"
                href="https://github.com/JulianKoehler">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className="wrapping-circle">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/julian-k%C3%B6hler-b65964160/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <a
              className="download-btn"
              href={cv}
              download="CV Julian Köhler">
              <button>Get my resumee</button>
            </a>
          </div>
          <Badge />
        </SocialsAndResumee>
        <HeroImage src={heroImage} />
      </Hero>
      <Aside active={"home"} />
    </HomePage>
  );
};

export default Home;
