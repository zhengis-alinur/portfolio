import Cite from '../../../components/Cite'
import { useLocale } from '../../../i18n'

// The quote resolves word by word out of a blur as it enters the viewport.
const CiteSection = () => {
	const { t } = useLocale()

	return (
		<section aria-label={t.ui.quote} className="py-10">
			<Cite className="mx-auto max-w-3xl" author={<p data-reveal="fade" style={{ '--d': '900ms' }} className="font-mono text-lg">— {t.quote.author}</p>}>
				<p className="font-mono text-2xl leading-snug sm:text-3xl">
					{t.quote.text.split(' ').map((word, index) => (
						<span key={index} data-reveal="blur" style={{ '--d': `${index * 40}ms` }} className="inline-block whitespace-pre">
							{word}{' '}
						</span>
					))}
				</p>
			</Cite>
		</section>
	)
}

export default CiteSection
