import Intro from "./components/Intro"
import CiteSection from "./components/CiteSection"
import Projects from "../../components/Projects"
import Skills from "./components/Skills"
import AboutMe from "./components/AboutMe"
import Contacts from "./components/Contacts"
import Experience from "./components/Experience"
import Recomendations from "./components/Recomendations"

const Home = () => {
  return (
	<div className="flex flex-col gap-10">
		<Intro/>
		<CiteSection />
		<Experience />
		<Projects />
		<Skills />
		<AboutMe />
		<Recomendations />
		<Contacts />
	</div>
  )
}

export default Home