import { useCallback, useRef, useState } from 'react'
import SectionTitle from '../../../components/SectionTitle'
import { jobs } from '../../../data/profile'
import { useScrollFrame } from '../../../hooks/motion'
import { PinIcon } from '../../../icons/Ui'
import { formatPeriod, useLocale } from '../../../i18n'

const Job = ({ job, reached, t }) => (
	<li data-node className="relative pb-14 pl-8 last:pb-0 sm:pl-12">
		<span
			aria-hidden="true"
			className={`absolute left-[-5px] top-2 h-[11px] w-[11px] border transition-[background-color,border-color,transform] duration-500 ease-out ${
				reached ? 'scale-100 border-primary bg-primary' : 'scale-75 border-gray bg-background'
			} ${job.current ? 'status-dot' : ''}`}
		/>
		<article data-reveal="left" className="grid gap-x-10 gap-y-3 md:grid-cols-[1fr_auto]">
			<header className="flex flex-col gap-1 md:col-start-1">
				<h3 className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xl font-semibold sm:text-2xl">
					<span className="text-primary">{job.company}</span>
					{job.project && <span className="border border-line px-2 py-0.5 text-xs font-normal text-gray">{t.experience.project}</span>}
				</h3>
				<p className="font-mono text-base text-white">{job.role}</p>
			</header>
			<div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-sm text-gray md:col-start-2 md:row-start-1 md:flex-col md:items-end md:pt-1.5">
				<span className="tabular-nums">{formatPeriod(t, job.start, job.end)}</span>
				{job.place && (
					<span className="inline-flex items-center gap-1">
						<PinIcon className="h-3.5 w-3.5" />
						{t.places[job.place]}
					</span>
				)}
			</div>
			<ul className="flex max-w-[68ch] flex-col gap-2.5 pt-2 md:col-span-2">
				{t.experience.points[job.id].map((point) => (
					<li key={point} className="relative pl-5 leading-relaxed text-gray before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-primary">
						{point}
					</li>
				))}
			</ul>
			<ul aria-label={t.ui.stack} className="flex flex-wrap gap-2 pt-2 md:col-span-2">
				{job.stack.map((tech) => (
					<li key={tech} className="border border-line px-2 py-1 font-mono text-xs text-gray">{tech}</li>
				))}
			</ul>
		</article>
	</li>
)

const Experience = () => {
	const { t } = useLocale()
	const listRef = useRef(null)
	const fillRef = useRef(null)
	const [reached, setReached] = useState(0)

	// The rail fills up to a line 60% down the viewport; markers above that line light up.
	const onFrame = useCallback(() => {
		const list = listRef.current
		if (!list) return
		const anchor = window.innerHeight * 0.6
		const rect = list.getBoundingClientRect()
		const progress = Math.min(Math.max((anchor - rect.top) / rect.height, 0), 1)
		fillRef.current.style.transform = `scaleY(${progress})`

		let count = 0
		list.querySelectorAll('[data-node]').forEach((node) => {
			if (node.getBoundingClientRect().top + 8 < anchor) count += 1
		})
		setReached(count)
	}, [])
	useScrollFrame(onFrame)

	return (
		<section id="experience" aria-labelledby="experience-title" className="py-16 md:py-24">
			<SectionTitle id="experience-title" title={t.sections.experience} />
			<div className="relative ml-1">
				<div aria-hidden="true" className="absolute bottom-0 left-0 top-2 w-px bg-line" />
				<div ref={fillRef} aria-hidden="true" className="absolute bottom-0 left-0 top-2 w-px origin-top bg-primary" style={{ transform: 'scaleY(0)' }} />
				<ol ref={listRef}>
					{jobs.map((job, index) => (
						<Job key={job.id} job={job} t={t} reached={index < reached} />
					))}
				</ol>
			</div>
		</section>
	)
}

export default Experience
