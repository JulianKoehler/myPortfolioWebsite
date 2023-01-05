import React from "react";
import MobileBottomNavbar from "../../styles/Header/MobileBottomNavbar";

const BottomNavbar = () => {
  return (
    <MobileBottomNavbar>
      <div className="link-container">
        <a href="#home">Home</a>
      </div>
      <div className="link-container">
        <a href="#skills">Skills</a>
      </div>
      <div className="link-container">
        <a href="#myWork">My Work</a>
      </div>
      <div className="link-container">
        <a href="#about">About</a>
      </div>
      <div className="link-container">
        <a href="#contact">Contact</a>
      </div>
    </MobileBottomNavbar>
  );
};

export default BottomNavbar;
