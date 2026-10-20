import SectionTitle from '../../../components/SectionTitle'
import Dots from '../../../components/Dots'
import { education, profile } from '../../../data/profile'
import { useLocale } from '../../../i18n'

const b = (text) => <strong className="font-medium text-white">{text}</strong>

const AboutMe = () => {
	const { t } = useLocale()
	const { paragraphs } = t.about

	return (
		<section id="about-me" aria-labelledby="about-title" className="py-16 md:py-24">
			<SectionTitle id="about-title" title={t.sections['about-me']} />
			<div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
				<div className="relative mx-auto w-full max-w-[22rem] lg:order-2 lg:mr-0">
					<Dots className="absolute right-6 top-8" />
					<div data-reveal="mask" className="relative">
						<img className="w-full" src="/about.webp" width="900" height="1078" loading="lazy" alt={t.about.photoAlt} />
					</div>
					<Dots className="absolute -left-5 bottom-10" delay={300} />
				</div>

				<div className="flex max-w-[64ch] flex-col gap-5 text-lg leading-relaxed">
					<p data-reveal="up" className="font-mono text-xl text-white">{t.about.hello}</p>
					{paragraphs.map((paragraph, index) => (
						<p
							key={index}
							data-reveal="up"
							style={{ '--d': `${(index + 1) * 80}ms` }}
							className={index === paragraphs.length - 1 ? 'text-white' : 'text-gray'}
						>
							{paragraph(b)}
						</p>
					))}

					<dl data-reveal="up" style={{ '--d': '320ms' }} className="mt-4 grid gap-px border border-line bg-line text-base sm:grid-cols-2">
						{education.map((item) => (
							<div key={item.id} className="flex flex-col gap-1 bg-background p-4">
								<dt className="font-mono text-sm text-primary tabular-nums">{item.period}</dt>
								<dd className="text-white">{t.about.education[item.id].school}</dd>
								<dd className="text-sm text-gray">{t.about.education[item.id].degree}</dd>
							</div>
						))}
						<div className="flex flex-col gap-1 bg-background p-4 sm:col-span-2 sm:flex-row sm:justify-between">
							<dt className="font-mono text-sm text-primary">{t.about.language}</dt>
							<dd className="text-gray">{t.about.english(profile.english)}</dd>
						</div>
					</dl>
				</div>
			</div>
		</section>
	)
}

export default AboutMe
