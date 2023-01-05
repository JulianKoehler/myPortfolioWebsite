import React from "react";
import ProjectCard from "../../styles/MyWork/ProjectCard";

const ProjectPreview = ({ image, title, techStack, description, githubLink, liveLink }) => {
  const techStackFormatted = techStack.map(item => {
    const isLastIndex = techStack.indexOf(item) === techStack.length - 1;
    if (!isLastIndex) {
      return `${item}, `;
    } else {
      return item;
    }
  });

  return (
    <ProjectCard>
      <img src={image} />
      <h3>{title}</h3>
      <h4>
        <span>Techstack</span>: {techStackFormatted}
      </h4>
      <p>{description}</p>
      <div className="links">
        <button>
          <a
            target="_blank"
            href={githubLink}>
            Code
          </a>
        </button>
        <button>
          <a
            target="_blank"
            href={liveLink}>
            Live Demo
          </a>
        </button>
      </div>
    </ProjectCard>
  );
};

export default ProjectPreview;
