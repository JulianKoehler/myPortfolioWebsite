import kanban from "../assets/Kanban.png";
import pomodoro from "../assets/Pomodoro.png";
import countryWiki from "../assets/countryWiki.png";
import devJobs from "../assets/DevJobs.png";

const projects = [
  {
    name: "Kanban App",
    image: kanban,
    techStack: ["Typescript", "React", "Redux", "Styled Components", "Firebase"],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    gitHubLink: "https://github.com/JulianKoehler",
    liveLink: "https://app.netlify.com/teams/juliankoehler/overview",
  },
  {
    name: "Pomodoro App",
    image: pomodoro,
    techStack: ["React", "Styled Components"],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    gitHubLink: "https://github.com/JulianKoehler/pomodoro-timer",
    liveLink: "https://pomodoro-now.netlify.app/",
  },
  {
    name: "Country Wiki",
    image: countryWiki,
    techStack: ["Typescript", "React", "Styled Components", "REST API"],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    gitHubLink: "https://github.com/JulianKoehler/CountryWiki",
    liveLink: "https://countrywiki-now.netlify.app/",
  },
  {
    name: "Devjob Market",
    image: devJobs,
    techStack: ["React", "Styled Components"],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    gitHubLink: "https://github.com/JulianKoehler/DevJobs",
    liveLink: "https://my-dev-job.netlify.app/",
  },
];

export default projects;
