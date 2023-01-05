import React from "react";
import ThemeToggler from "../../styles//Header/ThemeToggler";
import Wrapper from "../../styles/Header/Wrapper";
import { motion } from "framer-motion";

const Header = ({ onChangeTheme, colorTheme }) => {
  return (
    <Wrapper>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#myWork">My Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <ThemeToggler
        colorTheme={colorTheme}
        onClick={onChangeTheme}>
        <motion.div
          layout
          transition={spring}
          className="togglerCircle"
        />
      </ThemeToggler>
    </Wrapper>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default Header;
