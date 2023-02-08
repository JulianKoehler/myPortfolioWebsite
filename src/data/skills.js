import { faHtml5, faCss3, faJsSquare, faReact, faSass, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { SiTypescript, SiStyledcomponents, SiRedux, SiChakraui } from "react-icons/si";
import { BsGearFill } from "react-icons/bs";

const skills = [
  {
    name: "HTML5",
    icon: faHtml5,
    isFaIcon: true,
  },
  {
    name: "CSS3",
    icon: faCss3,
    isFaIcon: true,
  },
  {
    name: "JavaScript",
    icon: faJsSquare,
    isFaIcon: true,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    isFaIcon: false,
  },
  {
    name: "React",
    icon: faReact,
    isFaIcon: true,
  },
  {
    name: "Redux",
    icon: SiRedux,
    isFaIcon: false,
  },
  {
    name: "SCSS",
    icon: faSass,
    isFaIcon: true,
  },
  {
    name: "Chakra UI",
    icon: SiChakraui,
    isFaIcon: false,
  },
  {
    name: "Styled Components",
    icon: SiStyledcomponents,
    isFaIcon: false,
  },
  {
    name: "Git",
    icon: faGitAlt,
    isFaIcon: true,
  },
  {
    name: "REST API",
    icon: BsGearFill,
    isFaIcon: false,
  },
];

export default skills;
