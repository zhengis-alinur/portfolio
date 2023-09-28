import SectionTitle from "../../../components/SectionTitle"
import StyleGroups from "../../../components/StyleGroups"

import Nodejs from "../../../icons/Nodejs"
import React from "../../../icons/React"
import Redux from "../../../icons/Redux"
import Tailwind from "../../../icons/Tailwind"
import Typescript from "../../../icons/Typescript"
import HTML from "../../../icons/HTML"
import Express from "../../../icons/Express"

const Skill = ({area, technologies}) => (<div className="flex flex-col w-full max-w-full md:max-w-[200px] h-fit border-2 border-gray">
	<p className="p-3 font-bold border-b-2 border-gray">
		{area}
	</p>
	<div className="flex flex-wrap p-3 gap-3">
		{technologies.map((technology, index) => <span key={index} className="text-gray">{technology}</span>)}
	</div>
</div>)

const Skills = () => {
	const technologies = [
		[
			{
				area: "Languages",
				technologies: ["Typescript", "Javascipt", "Java SE8"]
			},
		],
		[
			{
				area: "Frameworks",
				technologies: ["React.js","Express.js", "Tailwind"]
			},
			{
				area: "Tools",
				technologies: ["Git","Github", "npm", "SASS"]
			}
		],
			[
				{
					area: "Libraries",
					technologies: ["Redux","Redux Toolkit(query)"]
				},
				{
					area: "Databases",
					technologies: ["MongoDB","MySQL", "Sequelize"]
				},
				{
					area: "Additional info",
					technologies: ["Node.js","HTML", "CSS", "Python"]
				},
			]
		]
		return (
		<div id="skills">
			<SectionTitle title='skills'/>
			<div className="flex items-center justify-around relative">
				<StyleGroups className="hidden md:block" />
				<div className="absolute hidden w-1/2 top-0 left-0 h-full md:block">
					<Nodejs className="absolute left-20 top-80"/>
					<React className="absolute left-1/3"/>
					<Redux className="absolute top-1/2 left-10"/>
					<Express className="absolute right-36 bottom-36"/>
					<Tailwind className="absolute left-1/3 top-36"/>
					<Typescript className="absolute right-1/4 top-10"/>
					<HTML className="absolute left-20 top-20"/>
				</div>
				<div className="flex flex-col gap-3 items-center md:flex-row">
					{
						technologies.map((group, index) => 
							<div key={index} className="flex flex-col w-full gap-3">
								{group.map((tech, index) => <Skill key={index} {...tech}/>)}
							</div>
						)
					}
					
				</div>
			</div>
		</div>
  )
}

export default Skills