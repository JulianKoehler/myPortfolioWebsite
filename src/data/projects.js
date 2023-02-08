import kanban from "../assets/Kanban.png";
import pomodoro from "../assets/Pomodoro.png";
import countryWiki from "../assets/countryWiki.png";
import devJobs from "../assets/DevJobs.png";
import entertainify from "../assets/entertainify.png";

const projects = [
  {
    name: "Entertainment Web App",
    image: entertainify,
    techStack: ["Typescript", "React", "Styled Components", "Firebase REST"],
    description:
      "This project is my first fullstack application. It's an entertainment platform called 'Entertainify', which lets you browser movies and series. It comes with authentication as well",
    gitHubLink: "https://github.com/JulianKoehler/Entertainify",
    liveLink: "https://entertainify.netlify.app/",
  },
  {
    name: "Pomodoro App",
    image: pomodoro,
    techStack: ["React", "Styled Components"],
    description:
      "Multi-theme pomodoro app, with sound effects that notifies you when your time is up, so you can actually focus on your tasks. It is highly configurable, both in terms of style and timer durations.",
    gitHubLink: "https://github.com/JulianKoehler/pomodoro-timer",
    liveLink: "https://pomodoro-now.netlify.app/",
  },
  {
    name: "Country Wiki",
    image: countryWiki,
    techStack: ["Typescript", "React", "Styled Components"],
    description:
      "My first React with Typescript project. A simple Wiki that lists all of our worlds countries showing their core information. For each country there is a dedicated page with direct links to its border countries.",
    gitHubLink: "https://github.com/JulianKoehler/CountryWiki",
    liveLink: "https://countrywiki-now.netlify.app/",
  },
  {
    name: "Devjob Market",
    image: devJobs,
    techStack: ["React", "Styled Components"],
    description:
      "My first mid-sized React project. Devjobs is a job market dedicated for software engineers. You can search and filter for specific jobs in the header. For each job listing a dedicated page is provided.",
    gitHubLink: "https://github.com/JulianKoehler/DevJobs",
    liveLink: "https://my-dev-job.netlify.app/",
  },
];

export default projects;
