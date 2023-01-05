import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SkillContainer from "../../styles/Skills/SkillContainer";

const SkillBox = ({ name, icon, isFaIcon, colorTheme }) => {
  return isFaIcon ? (
    <SkillContainer colorTheme={colorTheme}>
      <div className="image-container">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="skill-name">{name}</h3>
    </SkillContainer>
  ) : (
    <SkillContainer colorTheme={colorTheme}>
      <div className="image-container">{icon()}</div>
      <h3 className="skill-name">{name}</h3>
    </SkillContainer>
  );
};

export default SkillBox;
