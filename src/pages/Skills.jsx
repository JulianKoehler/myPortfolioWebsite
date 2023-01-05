import React from "react";
import { motion } from "framer-motion";
import SkillsPage from "../styles/Skills/SkillsPage";
import Aside from "../components/Navbar/Aside";
import Content from "../styles/Content";
import SkillBoxes from "../styles/Skills/SkillBoxes";
import SkillBox from "../components/Skills/SkillBox";
import skills from "../data/skills";

const Skills = ({ colorTheme }) => {
  const skillBoxes = skills.map(skill => {
    return (
      <SkillBox
        colorTheme={colorTheme}
        name={skill.name}
        icon={skill.icon}
        isFaIcon={skill.isFaIcon}
      />
    );
  });

  return (
    <SkillsPage
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      id="skills">
      <Content>
        <h1>My Skillset</h1>
        <SkillBoxes>{skillBoxes}</SkillBoxes>
      </Content>
      <Aside active={"skills"} />
    </SkillsPage>
  );
};

export default Skills;
