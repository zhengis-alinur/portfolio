import SectionTitle from "../../../components/SectionTitle"

const Project = ({project}) => (
	<div className="border-2 w-3/4 max-w-1/3 border-gray h-fit md:w-48">
		<img src={project.picture}/>
		<div>
			<p className="text-xl px-2">{project.name}</p>
		</div>
		<div className="flex gap-2 flex-wrap p-2 border-graytext-gray">
			{project.stack.map((technology, index) => <span key={index} className="text-gray text-xs text-light">{technology}</span>)}
		</div>
		<div className="flex flex-col border-y-2 border-gray">
			<div className="flex flex-row justify-between p-3">
				<a href={project.deploy} className="cursor-pointer text-primary whitespace-nowrap" target="_blank" rel="noreferrer">Live ◈</a>
				<a href={project.code} className="cursor-pointer  text-gray  whitespace-nowrap" target="_blank" rel="noreferrer">{'Code </>'}</a>
			</div>
		</div>
	</div>
)
const Projects = () => {
	const projects = [
		{
			picture: "opinius.jpg",
			stack: ['Typescript', 'React', 'Tailwind', 'RTK-Query', 'MySQL', 'Sequelize', 'Express.js'],
			name: "Fullstack Opinius",
			description:"Awesome fullstack app",
			deploy: "https://opinius-front.onrender.com/",
			code: "https://github.com/zhengis-alinur/opinius-frontend"
		},
		{
			picture: "usermanager.jpg",
			stack: ['Typescript', 'React', 'Bootstrap', 'RTK', 'MongoDB', 'Express.js'],
			name: "User manager",
			description:"Awesome fullstack app",
			deploy: "https://itransition-task-4-frontend.onrender.com/",
			code: "https://github.com/zhengis-alinur/fullstack-app"
		},
		{
			picture: "random.jpg",
			stack: ['Typescript', 'React', 'RTK'],
			name: "Stable Random Data Generator",
			description:"Awesome fullstack app",
			deploy: "https://itransition-task-5-lafp.onrender.com/",
			code: "https://github.com/zhengis-alinur/randomDataGenerator"
		},
		{
			picture: "mernchat.jpg",
			stack:  ['MongoDB', 'Express.js', 'Socket.io', 'React', 'Node.js', 'Typescript', 'RTK'],
			name: "Realtime Chat",
			description:"Awesome fullstack app",
			deploy: "https://itransition-task-6-frontend.onrender.com/",
			code: "https://github.com/zhengis-alinur/mern-chat"
		}
	]
	return (
		<div  id="works">
			<SectionTitle title='projects'/>
			<div className="flex flex-col items-center justify-center flex-wrap gap-5 md:flex-row md:items-start" >
				{projects.map((project, index) => <Project key={index} project={project}/>)}
			</div>
		</div>
	)
}

export default Projects