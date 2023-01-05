import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faList, faFolderOpen, faUser, faMessage } from "@fortawesome/free-solid-svg-icons";
import MobileBottomNavbar from "../../styles/Header/MobileBottomNavbar";

const BottomNavbar = () => {
  return (
    <MobileBottomNavbar>
      <div className="link-container">
        <a href="#home">
          <div className="inner-link-content">
            <FontAwesomeIcon icon={faHouse} />
            <p>Home</p>
          </div>
        </a>
      </div>
      <div className="link-container">
        <a href="#skills">
          <div className="inner-link-content">
            <FontAwesomeIcon icon={faList} />
            <p>Skills</p>
          </div>
        </a>
      </div>
      <div className="link-container">
        <a href="#myWork">
          <div className="inner-link-content">
            <FontAwesomeIcon icon={faFolderOpen} />
            <p>Projects</p>
          </div>
        </a>
      </div>
      <div className="link-container">
        <a href="#about">
          <div className="inner-link-content">
            <FontAwesomeIcon icon={faUser} />
            <p>About</p>
          </div>
        </a>
      </div>
      <div className="link-container">
        <a href="#contact">
          <div className="inner-link-content">
            <FontAwesomeIcon icon={faMessage} />
            <p>Contact</p>
          </div>
        </a>
      </div>
    </MobileBottomNavbar>
  );
};

export default BottomNavbar;
