import Intro from "./components/Intro"
import CiteSection from "./components/CiteSection"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import AboutMe from "./components/AboutMe"
import Contacts from "./components/Contacts"
import Experience from "./components/Experience"

const Home = () => {
  return (
	<div>
		<Intro/>
		<CiteSection />
		<Experience />
		<Projects />
		<Skills />
		<AboutMe />
		<Contacts />
	</div>
  )
}

export default Home