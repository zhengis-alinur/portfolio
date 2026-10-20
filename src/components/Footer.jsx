import Logo from './Logo'
import { profile } from '../data/profile'
import { ArrowUpIcon } from '../icons/Ui'
import { useLocale } from '../i18n'

const Footer = () => {
	const { t } = useLocale()

	return (
		<footer className="mt-24 border-t border-line/70">
			<div className="mx-auto flex max-w-page flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
				<div className="flex flex-col gap-1">
					<Logo />
					<p className="text-sm text-gray">{t.title} · {t.places.astana}</p>
				</div>
				<div className="flex items-center justify-between gap-8 sm:justify-end">
					<p className="text-sm text-gray">© {new Date().getFullYear()} {profile.name}</p>
					<a href="#home" className="group inline-flex min-h-[44px] items-center gap-2 font-mono text-sm text-gray transition-colors hover:text-white">
						{t.ui.backToTop}
						<ArrowUpIcon className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-1" />
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
