import React from "react";
import NavCircle from "../../styles/Aside/NavCircle";
import Wrapper from "../../styles/Aside/Wrapper";

const Aside = ({ active }) => {
  return (
    <Wrapper>
      <nav>
        <a href="#home">
          <NavCircle active={active === "home" ? true : false} />
        </a>

        <a href="#skills">
          <NavCircle active={active === "skills" ? true : false} />
        </a>

        <a href="#myWork">
          <NavCircle active={active === "myWork" ? true : false} />
        </a>

        <a href="#about">
          <NavCircle active={active === "about" ? true : false} />
        </a>

        <a href="#contact">
          <NavCircle active={active === "contact" ? true : false} />
        </a>
      </nav>
    </Wrapper>
  );
};

export default Aside;
