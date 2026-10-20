import { localeOrder, locales, useLocale } from '../i18n'

// Three equal segments; the filled block slides under the active one.
const LocaleSwitch = ({ className = '' }) => {
	const { locale, setLocale, t } = useLocale()
	const index = localeOrder.indexOf(locale)

	return (
		<div role="group" aria-label={t.ui.language} className={`relative grid grid-cols-3 border border-line ${className}`}>
			<span
				aria-hidden="true"
				className="absolute inset-y-0 left-0 w-1/3 bg-primary transition-transform duration-500 ease-out"
				style={{ transform: `translateX(${index * 100}%)` }}
			/>
			{localeOrder.map((code) => {
				const active = code === locale
				return (
					<button
						key={code}
						type="button"
						lang={locales[code].code}
						title={locales[code].name}
						aria-pressed={active}
						onClick={() => setLocale(code)}
						className={`relative flex h-[38px] w-10 items-center justify-center font-mono text-xs font-medium transition-colors duration-300 ${
							active ? 'text-background' : 'text-gray hover:text-white'
						}`}
					>
						{locales[code].label}
						<span className="sr-only"> {locales[code].name}</span>
					</button>
				)
			})}
		</div>
	)
}

export default LocaleSwitch
