import SectionTitle from '../../../components/SectionTitle'
import Cite from '../../../components/Cite'

const Recomendations = () => {
	return (
		<div id='recomendations'>
		<SectionTitle title="recomendations"/>
		<div className='flex flex-col justify-around items-center gap-10'>
			<Cite
				author={
					<div>
						<a className='text-primary' href='https://www.linkedin.com/in/ivan-stanevich-678708149/' target='_blank' rel="noreferrer">Ivan Stanevich</a>
						<p className='text-base'>Software Engineer | Team lead – Itransition Group</p>
						<p className='text-xs'>September 27, 2023, Ivan was Alinur’s mentor</p>
					</div>
				}
			>
				<p>
					I have had the privilege of mentoring Alinur during their web development course, and I amconsistently impressed by their skills and dedication.
				</p>
				<br/>
				<p>
					Alinur is an exceptional web developer with a strong focus on front-end development. Theyexcel in using React, TypeScript, Hooks, form validation, ESLint, and PostCSS to createdynamic and responsive user interfaces. Their commitment to maintaining an atomic commitstructure in their work ensures clear version control and collaboration.
				</p>
				<br/>
				<p>
					Moreover, Alinur possesses a remarkable ability to decompose complex tasks intomanageable steps. This skill has been pivotal in their project management, allowing them totackle large projects with precision and efficiency.
				</p>
				<br/>
				<p>
					On the back end, their proficiency with MySQL, Express, and Sequelize is equally impressive.What sets Alinur apart is their readiness to embrace emerging technologies like WebSockets,demonstrating a commitment to staying at the forefront of web development trends.
				</p>
				<br/>
				<p>
					I highly recommend Alinur to any team or project looking for a talented web developer whonot only delivers high-quality work with precision and passion but also excels in maintainingbest practices in version control and project management.
				</p>
			</Cite>
			<Cite
				author={
					<div>
						<a className='text-primary' href='https://www.linkedin.com/in/kristina-volosiuk-815354ab/' target='_blank' rel="noreferrer">Kristina Volosiuk</a>
						<p className='text-base'>Frontend Developer – Яндекс.Маркет</p>
						<p className='text-xs'>June 5, 2023, Kristina was Alinur’s mentor</p>
					</div>
				}
			>
				<p>
					I was Alinur&apos;s mentor for 5 weeks and I can give very positive feedback without any doubt.Alinur showed himself as a very responsible, motivated developer, who is not afraid to divedeep into new tools and products and get into them on his own in a short time. During theinternship Alinur helped our team a lot with various tasks, both simple and complex, and theteam and I were very happy with Alinur&apos;s work. I would be happy to work together in the future.
				</p>
			</Cite>
		</div>
	</div>
	)
}

export default Recomendations