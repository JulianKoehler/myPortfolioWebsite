import React from "react";
import { motion } from "framer-motion";
import ProjectPreview from "../components/MyWork/ProjectPreview";
import Aside from "../components/Navbar/Aside";
import Content from "../styles/Content";
import MyWorkPage from "../styles/MyWork/MyWorkPage";
import projectData from "../data/projects";

const MyWork = () => {
  const projects = projectData.map(project => {
    return (
      <ProjectPreview
        key={project.name}
        image={project.image}
        title={project.name}
        techStack={project.techStack}
        description={project.description}
        githubLink={project.gitHubLink}
        liveLink={project.liveLink}
      />
    );
  });

  return (
    <MyWorkPage
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      id="myWork">
      <Content>
        <h1>Project Portfolio</h1>
        <div className="project-cards-container">{projects}</div>
        <p>
          ...amongst many other projects for which I invite you to check out on my
          <a
            target="_blank"
            href="https://github.com/JulianKoehler">
            {" "}
            GitHub Profile
          </a>
        </p>
      </Content>
      <Aside active="myWork" />
    </MyWorkPage>
  );
};

export default MyWork;
