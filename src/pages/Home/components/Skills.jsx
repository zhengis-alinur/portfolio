import SectionTitle from '../../../components/SectionTitle'
import StyleGroups from '../../../components/StyleGroups'
import { skills } from '../../../data/profile'
import { useLocale } from '../../../i18n'

const SkillGroup = ({ area, items, wide, index }) => (
	<li
		data-reveal="up"
		style={{ '--d': `${index * 80}ms` }}
		className={`group border border-line transition-colors duration-300 hover:border-primary ${wide ? 'sm:col-span-2' : ''}`}
	>
		<h3 className="border-b border-line px-4 py-3 text-base font-semibold transition-colors duration-300 group-hover:border-primary">
			<span className="text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true">#</span>
			{area}
		</h3>
		<ul className="flex flex-wrap gap-x-4 gap-y-2 p-4">
			{items.map((item) => (
				<li key={item} className="text-gray transition-colors duration-200 hover:text-white">{item}</li>
			))}
		</ul>
	</li>
)

const Skills = () => {
	const { t } = useLocale()

	return (
		<section id="skills" aria-labelledby="skills-title" className="py-16 md:py-24">
			<SectionTitle id="skills-title" title={t.sections.skills} />
			<div className="grid items-center gap-12 lg:grid-cols-[minmax(0,20rem)_1fr]">
				<StyleGroups className="drift-slow hidden h-auto w-full lg:block" />
				<ul className="grid gap-3 sm:grid-cols-2">
					{skills.map((group, index) => (
						<SkillGroup key={group.id} index={index} area={t.skills[group.id]} {...group} />
					))}
				</ul>
			</div>
		</section>
	)
}

export default Skills
