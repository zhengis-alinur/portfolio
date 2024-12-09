import SectionTitle from "../../../components/SectionTitle";
import Dots from "../../../components/Dots";

const AboutMe = () => {
  return (
    <div id="about-me">
      <SectionTitle title="about-me" />
      <div className="flex flex-col justify-around items-center md:flex-row gap-10">
        <div className="relative w-3/4 md:w-1/3">
          <Dots className="absolute right-10 top-10 z-1" />
          <img className="relative z-1 w-96" src="/about.png" />
          <Dots className="absolute bottom-10 left-[-20px]" />
        </div>
        <div className="">
          <p>Hello, i’m Alinur!</p>
          <p>&nbsp;</p>
          <p className="text-gray">
            Junior Javascript fullstack developer with internship experience at
            large companies such as{" "}
            <span className="text-white font-bold">Yandex</span> and{" "}
            <span className="text-white font-bold">Itransition</span> as a web
            developer.
          </p>
          <p>&nbsp;</p>
          <p className="text-gray">
            I'm a Fullstack Developer at{" "}
            <span className="text-white font-bold">Epam Systems</span>,
            embarking on a captivating adventure in my first role at this
            position.
          </p>
          <p>&nbsp;</p>
          <p className="text-gray">
            I enjoy working in a team and can adapt to changes because it's
            important for me to be a reliable and valuable team member.
          </p>
          <p>&nbsp;</p>
          <p className="text-white">
            I'm always open to offers and to become a part of strong team,
            create interesting products, and make my valuable contribution to
            their development
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
