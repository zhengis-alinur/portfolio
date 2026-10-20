import { useEffect, useRef } from 'react'
import Header from './components/Header'
import SocialRope from './components/SocialRope'
import Footer from './components/Footer'
import Home from './pages/Home'
import { useRevealOnScroll } from './hooks/motion'
import { useLocale } from './i18n'

const App = () => {
	const { t, locale } = useLocale()
	const mainRef = useRef(null)
	const shownLocale = useRef(locale)
	useRevealOnScroll()

	// A switched language settles in with a short fade instead of snapping.
	useEffect(() => {
		if (shownLocale.current === locale) return
		shownLocale.current = locale
		mainRef.current?.animate([{ opacity: 0.25, filter: 'blur(2px)' }, { opacity: 1, filter: 'blur(0)' }], {
			duration: 450,
			easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
		})
	}, [locale])

	return (
		<>
			<a
				href="#experience"
				className="fixed left-4 top-3 z-50 -translate-y-20 bg-primary px-4 py-2 font-mono text-sm text-background transition-transform focus:translate-y-0"
			>
				{t.ui.skip}
			</a>
			<Header />
			<SocialRope />
			<main ref={mainRef} className="mx-auto max-w-page px-4 sm:px-8 lg:px-12">
				<Home />
			</main>
			<Footer />
		</>
	)
}

export default App
