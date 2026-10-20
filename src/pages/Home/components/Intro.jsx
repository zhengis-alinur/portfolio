import { useEffect, useRef, useState } from 'react'
import Lines from '../../../components/Lines'
import Dots from '../../../components/Dots'
import Button from '../../../components/Button'
import { profile } from '../../../data/profile'
import { prefersReducedMotion } from '../../../hooks/motion'
import { ArrowIcon, DownloadIcon } from '../../../icons/Ui'
import { useLocale } from '../../../i18n'

const tone = {
	kw: 'text-primary',
	fn: 'text-white',
	id: 'text-gray',
	p: 'text-gray',
}

const code = [
	[['kw', 'if'], ['p', ' ('], ['fn', 'Alinur'], ['p', '.'], ['fn', 'isHappy'], ['p', ') {']],
	[['p', '  '], ['fn', 'ship'], ['p', '({ '], ['id', 'frontend'], ['p', ', '], ['id', 'backend'], ['p', ', '], ['id', 'ai'], ['p', ' });']],
	[['p', '} '], ['kw', 'else'], ['p', ' {']],
	[['p', '  '], ['fn', 'makeSelfHappy'], ['p', '('], ['fn', 'Alinur'], ['p', ');']],
	[['p', '}']],
]

const codeText = code.map((line) => line.map(([, text]) => text).join('')).join('\n')
const codeLength = codeText.replace(/\n/g, '').length

// Streams the snippet a few characters at a time, the way a model streams tokens.
const useStream = (total, startDelay) => {
	const [shown, setShown] = useState(() => (prefersReducedMotion() ? total : 0))

	useEffect(() => {
		if (shown >= total) return
		const delay = shown === 0 ? startDelay : 22 + Math.random() * 38
		const timer = setTimeout(() => setShown((n) => Math.min(total, n + 1 + Math.floor(Math.random() * 3))), delay)
		return () => clearTimeout(timer)
	}, [shown, total, startDelay])

	return shown
}

const CodeStream = () => {
	const { t } = useLocale()
	const shown = useStream(codeLength, 1100)
	const done = shown >= codeLength
	let budget = shown
	let caretPlaced = false

	return (
		<div data-reveal="up" style={{ '--d': '560ms' }} className="mt-10 max-w-md border border-line bg-surface/60">
			<div className="flex items-center justify-between border-b border-line">
				<span className="border-t border-primary px-4 py-2 font-mono text-xs text-white">alinur.ts</span>
				<span className="px-4 font-mono text-xs text-gray" aria-hidden="true">{done ? t.hero.ready : t.hero.streaming}</span>
			</div>
			<pre className="overflow-x-auto px-4 py-4 font-mono text-sm leading-7 sm:text-[15px]">
				<span className="sr-only">{codeText}</span>
				<code aria-hidden="true">
					{code.map((line, row) => {
						const parts = line.map(([kind, text], col) => {
							const visible = text.slice(0, Math.max(0, budget))
							budget -= text.length
							return visible && <span key={col} className={tone[kind]}>{visible}</span>
						})
						const lineEnded = budget <= 0 && !caretPlaced
						if (lineEnded) caretPlaced = true
						return (
							<span key={row} className="block min-h-[1.75rem] whitespace-pre">
								{parts}
								{lineEnded && <span className="caret" />}
							</span>
						)
					})}
				</code>
			</pre>
		</div>
	)
}

const Intro = () => {
	const { t, locale } = useLocale()
	const [booting, setBooting] = useState(true)
	const artRef = useRef(null)

	// The headline rises line by line on load, and again in each newly chosen language.
	useEffect(() => {
		setBooting(true)
		let inner = 0
		const outer = requestAnimationFrame(() => {
			inner = requestAnimationFrame(() => setBooting(false))
		})
		return () => {
			cancelAnimationFrame(outer)
			cancelAnimationFrame(inner)
		}
	}, [locale])

	// The decorations around the portrait lean toward the pointer on fine-pointer screens.
	useEffect(() => {
		const art = artRef.current
		if (!art || prefersReducedMotion() || !window.matchMedia('(pointer: fine)').matches) return
		const onMove = (event) => {
			art.style.setProperty('--px', (event.clientX / window.innerWidth - 0.5).toFixed(3))
			art.style.setProperty('--py', (event.clientY / window.innerHeight - 0.5).toFixed(3))
		}
		window.addEventListener('pointermove', onMove, { passive: true })
		return () => window.removeEventListener('pointermove', onMove)
	}, [])

	const lean = (depth) => ({
		transform: `translate3d(calc(var(--px, 0) * ${depth}px), calc(var(--py, 0) * ${depth}px), 0)`,
		transition: 'transform 900ms cubic-bezier(0.16, 1, 0.3, 1)',
	})

	return (
		<section id="home" aria-labelledby="intro-title" className="relative flex min-h-[100svh] items-center pb-12 pt-24 lg:pt-20">
			<div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
				<div className={booting ? 'is-booting' : ''}>
					<h1 id="intro-title" className="text-[2.6rem] font-bold leading-[1.06] tracking-[-0.03em] sm:text-6xl lg:text-[3.5rem] xl:text-[3.75rem]">
						<span className="line-mask"><span style={{ '--d': '0ms' }}>{t.hero.lines[0]}</span></span>
						<span className="line-mask"><span style={{ '--d': '90ms' }}><span className="text-primary">{t.hero.lines[1]}</span></span></span>
						<span className="line-mask"><span style={{ '--d': '180ms' }}>{t.hero.lines[2]}</span></span>
					</h1>
					<p data-reveal="up" style={{ '--d': '320ms' }} className="mt-6 max-w-xl text-lg font-light leading-relaxed text-gray sm:text-xl">
						{t.hero.lead}
					</p>

					<div data-reveal="up" style={{ '--d': '420ms' }} className="mt-8 flex flex-wrap gap-3">
						<Button href="#contacts">
							{t.hero.contact}
							<ArrowIcon className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
						</Button>
						<Button variant="ghost" href={profile.cv} download>
							<DownloadIcon className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-y-0.5" />
							{t.ui.downloadCv}
						</Button>
					</div>

					<CodeStream />

				</div>

				<div ref={artRef} className="relative mx-auto w-full max-w-[21rem] sm:max-w-[24rem] lg:mr-0">
					<div className="absolute -left-6 top-16 sm:-left-12" style={lean(-22)} aria-hidden="true">
						<Lines className="drift h-auto w-28 sm:w-36" />
					</div>
					<div data-reveal="mask" style={{ '--d': '150ms' }} className="relative">
						<img className="w-full" src="/portrait.webp" width="900" height="1140" alt={t.hero.portraitAlt} fetchpriority="high" />
					</div>
					<div className="absolute -right-2 bottom-24 sm:-right-6" style={lean(18)}>
						<Dots className="drift-slow" delay={600} />
					</div>
					<p data-reveal="up" style={{ '--d': '900ms' }} className="relative flex items-center gap-3 border border-gray/70 bg-background px-3 py-2 text-gray">
						<span className="status-dot relative h-3 w-3 shrink-0 bg-primary" aria-hidden="true" />
						<span>{t.hero.currently(<strong className="font-mono font-semibold text-white">{profile.currently}</strong>)}</span>
					</p>
				</div>
			</div>
		</section>
	)
}

export default Intro
