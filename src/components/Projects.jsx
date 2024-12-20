import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const Project = ({ project }) => (
  <div className="border-2 w-3/4 max-w-1/3 border-gray h-fit md:w-48">
    <img src={project.picture} />
    <div>
      <p className="text-xl px-2">{project.name}</p>
    </div>
    <div className="flex gap-2 flex-wrap p-2 border-graytext-gray">
      {project.stack.map((technology, index) => (
        <span key={index} className="text-gray text-xs text-light">
          {technology}
        </span>
      ))}
    </div>
    <div className="flex flex-col border-y-2 border-gray">
      <div className="flex flex-row justify-between p-3">
        <a
          href={project.deploy}
          className="cursor-pointer text-primary whitespace-nowrap"
          target="_blank"
          rel="noreferrer"
        >
          Live ◈
        </a>
        <a
          href={project.code}
          className="cursor-pointer  text-gray  whitespace-nowrap"
          target="_blank"
          rel="noreferrer"
        >
          {"Code </>"}
        </a>
      </div>
    </div>
  </div>
);
const Projects = ({ full }) => {
  const projects = [
    {
      picture: "arucake.jpg",
      stack: ["Typescript", "React", "Tailwind", "RTK-Query"],
      name: "AruCake",
      description: "Awesome fullstack app",
      deploy: "https://arucake.netlify.app/",
    },
    {
      picture: "anamenbala.jpg",
      stack: [
        "Typescript",
        "React",
        "Django",
        "ChatGPT",
        "Tailwind",
        "RTK-Query",
      ],
      name: "Ana men Bala",
      description: "Awesome fullstack app",
      deploy: "https://anamenbala.netlify.app/",
    },
    {
      picture: "teacher.jpg",
      stack: ["Vite", "React", "Tailwind"],
      name: "Teacher Landing Page",
      description: "Landing Page",
      deploy: "https://aiym.onrender.com/",
      code: "https://github.com/zhengis-alinur/aiym-page",
    },
    {
      picture: "bukable.jpg",
      stack: ["React", "SCSS", "Javascript"],
      name: "Bukable Landing Page",
      description: "Landing Page",
      deploy: "https://bukable-intern-alinur.netlify.app/",
      code: "https://github.com/zhengis-alinur/bukable",
    },
    {
      picture: "piano.jpg",
      stack: ["HTML", "CSS", "Javascript"],
      name: "Virtual Piano",
      description: "Landing Page",
      deploy:
        "https://rolling-scopes-school.github.io/zhengis-alinur-JSFE2021Q1/virtual-piano/",
      code: "https://github.com/zhengis-alinur/virtual-piano-rs",
    },
    {
      picture: "opinius.jpg",
      stack: [
        "Typescript",
        "React",
        "Tailwind",
        "RTK-Query",
        "MySQL",
        "Sequelize",
        "Express.js",
      ],
      name: "Fullstack Opinius",
      description: "Awesome fullstack app",
      deploy: "https://opinius-front.onrender.com/",
      code: "https://github.com/zhengis-alinur/opinius-frontend",
    },
    {
      picture: "usermanager.jpg",
      stack: [
        "Typescript",
        "React",
        "Bootstrap",
        "RTK",
        "MongoDB",
        "Express.js",
      ],
      name: "User manager",
      description: "Awesome fullstack app",
      deploy: "https://itransition-task-4-frontend.onrender.com/",
      code: "https://github.com/zhengis-alinur/fullstack-app",
    },
    {
      picture: "random.jpg",
      stack: ["Typescript", "React", "RTK"],
      name: "Stable Random Data Generator",
      description: "Awesome fullstack app",
      deploy: "https://itransition-task-5-lafp.onrender.com/",
      code: "https://github.com/zhengis-alinur/randomDataGenerator",
    },
    {
      picture: "mernchat.jpg",
      stack: [
        "MongoDB",
        "Express.js",
        "Socket.io",
        "React",
        "Node.js",
        "Typescript",
        "RTK",
      ],
      name: "Realtime Chat",
      description: "Awesome fullstack app",
      deploy: "https://itransition-task-6-frontend.onrender.com/",
      code: "https://github.com/zhengis-alinur/mern-chat",
    },
    {
      picture: "mntn.jpg",
      stack: ["Vite", "React", "Tailwind"],
      name: "MNTN Landing Page",
      description: "Landing Page",
      deploy: "https://mntn-landing.onrender.com/",
      code: "https://github.com/zhengis-alinur/mntn-landing",
    },
  ];
  return (
    <div id="works">
      <div className="flex w-full justify-between items-center">
        <SectionTitle title="projects" />
        {!full && (
          <Link to="/projects">
            <span>View All</span>
          </Link>
        )}
      </div>
      <div className="flex flex-col items-center justify-center flex-wrap gap-5 md:flex-row md:items-start">
        {projects.map((project, index) =>
          full ? (
            <Project key={index} project={project} />
          ) : (
            index < 4 && <Project key={index} project={project} />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
