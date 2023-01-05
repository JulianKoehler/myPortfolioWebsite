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
      "This project is my largest project in terms of scale so far. It's a classic kanban tool with an actual backend made with Firebase. I also added authentication to make it a more realistic project.",
    gitHubLink: "https://github.com/JulianKoehler",
    liveLink: "https://app.netlify.com/teams/juliankoehler/overview",
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
    techStack: ["Typescript", "React", "Styled Components", "REST API"],
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
      "My first bigger React project. Devjobs is a job market dedicated for developer Jobs. You can search and filter for specific jobs in the header. For each job listing a dedicated page is provided.",
    gitHubLink: "https://github.com/JulianKoehler/DevJobs",
    liveLink: "https://my-dev-job.netlify.app/",
  },
];

export default projects;
