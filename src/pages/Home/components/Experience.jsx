import SectionTitle from "../../../components/SectionTitle";

const Job = ({ job }) => (
  <div
    className={`flex flex-col px-6 flex-start items-center md:items-start mx-2 md:mx-10 `}
  >
    <div className="flex flex-col md:flex-row">
      <p className="font-bold whitespace-nowrap text-xl text-center border-b-2 text-primary border-primary py-2">
        {job.company}
      </p>
      <p className="text-xl border-b-2 whitespace-nowrap border-primary py-2  pl-6 w-fit pr-5">
        {job.position}
      </p>
    </div>
    <p className="whitespace-nowrap text-primary  py-2">{job.deadlines}</p>
    <p className="py-2  pl-6 text-gray">{job.description}</p>
  </div>
);

const Experience = () => {
  const jobs = [
    {
      company: "EPAM Systems",
      active: true,
      deadlines: "november 2023 - present",
      position: "Full-stack Software Engineer",
      description:
        "While interning at iTransition in the field of frontend development, I am developing full-stack applications based on Node.js and React. My goal is to gain practical skills in creating web servers and strengthen my knowledge in frontend development.",
    },
    {
      company: "Itransition",
      deadlines: "july 2023 - september 2023",
      position: "Software Engineer Intern",
      description:
        "While interning at iTransition in the field of frontend development, I am developing full-stack applications based on Node.js and React. My goal is to gain practical skills in creating web servers and strengthen my knowledge in frontend development.",
    },
    {
      company: "Yandex Market",
      deadlines: "march 2023 - may 2023",
      position: "Frontend Developer Intern",
      description:
        "During my work at Yandex Market, I was responsible for creating key dynamic elements and components, as well as writing tests using React, Redux, RxJS, and Flow/Typescript. My work significantly improved the functionality of server communication and simplified its development in the future. I worked as part of a team and successfully collaborated with colleagues, which allowed me to gain valuable experience, achieve good results, and receive a recommendation from my employer.",
    },
    {
      company: "Bukable",
      deadlines: "september 2022 - december 2022",
      position: "Frontend Developer Intern",
      description:
        "At the Bukable startup, I developed authentication, authorization, and confirmation pages using Next.js, Redux Toolkit, and SCSS technologies.",
    },
    {
      company: "EuroEducation",
      deadlines: "september 2021 - december 2021",
      position: "Physics/Math teacher",
      description:
        "EuroEducation is an educational institution specializing in preparing school students for entrance exams to specialized schools. By profession, I am a physicist, and my task was to teach students physics and mathematics.",
    },
    {
      company: "Robopolis",
      deadlines: "september 2019 - january 2020",
      position: "Arduino Bots teacher",
      description:
        "I taught children microcontroller programming and robot construction.",
    },
  ];

  return (
    <div id="experience">
      <SectionTitle title="experience" />
      <div className="flex flex-col gap-4">
        {jobs.map((job, index) => (
          <Job key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
