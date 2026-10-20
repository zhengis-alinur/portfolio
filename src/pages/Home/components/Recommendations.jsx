import { useId, useState } from 'react'
import SectionTitle from '../../../components/SectionTitle'
import Cite from '../../../components/Cite'
import { recommendations } from '../../../data/profile'
import { formatDate, useLocale } from '../../../i18n'

const Author = ({ author, href, role, note }) => (
	<div className="flex flex-col gap-0.5 text-right">
		<a href={href} target="_blank" rel="noreferrer" className="font-mono text-primary underline decoration-primary/0 transition-[text-decoration-color] hover:decoration-primary">
			{author}
		</a>
		<p className="text-sm text-white">{role}</p>
		<p className="text-xs text-gray">{note}</p>
	</div>
)

// Long letters open to their full text; the panel grows by animating its grid row.
const Letter = ({ text, t }) => {
	const [open, setOpen] = useState(false)
	const panelId = useId()
	const [lead, ...rest] = text

	return (
		<div lang="en" className="flex flex-col gap-4 leading-relaxed text-gray">
			<p className="text-white">{lead}</p>
			{rest.length > 0 && (
				<>
					<div
						id={panelId}
						className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
						aria-hidden={!open}
					>
						<div className="flex flex-col gap-4 overflow-hidden">
							{rest.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
						</div>
					</div>
					<button
						type="button"
						aria-expanded={open}
						aria-controls={panelId}
						onClick={() => setOpen(!open)}
						className="-my-2 self-start py-2 font-mono text-sm text-primary transition-colors hover:text-white"
					>
						{open ? t.recommendations.readLess : t.recommendations.readMore}
					</button>
				</>
			)}
		</div>
	)
}

const Recommendations = () => {
	const { t } = useLocale()

	return (
		<section id="recommendations" aria-labelledby="recommendations-title" className="py-16 md:py-24">
			<SectionTitle id="recommendations-title" title={t.sections.recommendations} />
			{t.recommendations.original && (
				<p data-reveal="up" className="-mt-6 mb-10 text-sm text-gray md:-mt-8 md:mb-14">{t.recommendations.original}</p>
			)}
			<div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-8">
				{recommendations.map((item, index) => (
					<div key={item.id} data-reveal="up" style={{ '--d': `${index * 120}ms` }}>
						<Cite author={<Author {...item} note={t.recommendations.note(item.author.split(' ')[0], formatDate(t, item.date))} />}>
							<Letter text={item.text} t={t} />
						</Cite>
					</div>
				))}
			</div>
		</section>
	)
}

export default Recommendations
