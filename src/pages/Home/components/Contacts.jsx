import { useEffect, useRef, useState } from 'react'
import SectionTitle from '../../../components/SectionTitle'
import Button from '../../../components/Button'
import Email from '../../../icons/Email'
import Whatsapp from '../../../icons/Whatsapp'
import Telegram from '../../../icons/Telegram'
import Linkedin from '../../../icons/Linkedin'
import Github from '../../../icons/Github'
import { ArrowIcon, CheckIcon, CopyIcon, DownloadIcon } from '../../../icons/Ui'
import { contacts, profile } from '../../../data/profile'
import { useLocale } from '../../../i18n'

const icons = { email: Email, whatsapp: Whatsapp, telegram: Telegram, linkedin: Linkedin, github: Github }

const ContactRow = ({ contact, label, copyLabel, copied, onCopy, index }) => {
	const Icon = icons[contact.id]
	const external = !contact.href.startsWith('mailto:')

	return (
		<li data-reveal="up" style={{ '--d': `${index * 60}ms` }} className="group flex items-stretch border-b border-line">
			<a
				href={contact.href}
				target={external ? '_blank' : undefined}
				rel={external ? 'noreferrer' : undefined}
				className="flex min-h-[64px] min-w-0 flex-1 items-center gap-4 py-3 pr-2"
			>
				<Icon className="h-7 w-7 shrink-0 text-gray transition-colors duration-200 group-hover:text-primary" />
				<span className="flex min-w-0 flex-col">
					<span className="font-mono text-xs text-gray">{label}</span>
					<span className="truncate text-white transition-transform duration-300 ease-out group-hover:translate-x-1">{contact.value}</span>
				</span>
			</a>
			<button
				type="button"
				onClick={() => onCopy(contact, label)}
				aria-label={copyLabel}
				className="flex w-12 shrink-0 items-center justify-center text-gray transition-colors duration-200 hover:text-white"
			>
				{copied ? <CheckIcon className="h-5 w-5 text-primary" /> : <CopyIcon className="h-5 w-5" />}
			</button>
		</li>
	)
}

const Contacts = () => {
	const { t } = useLocale()
	const [copiedId, setCopiedId] = useState(null)
	const [toast, setToast] = useState(null)
	const timer = useRef(0)

	useEffect(() => () => clearTimeout(timer.current), [])

	const onCopy = async (contact, label) => {
		clearTimeout(timer.current)
		try {
			await navigator.clipboard.writeText(contact.copy ?? contact.value)
			setCopiedId(contact.id)
			setToast(t.contacts.copied(label))
		} catch {
			setCopiedId(null)
			setToast(t.contacts.copyFailed)
		}
		timer.current = setTimeout(() => {
			setCopiedId(null)
			setToast(null)
		}, 1800)
	}

	return (
		<section id="contacts" aria-labelledby="contacts-title" className="py-16 md:py-24">
			<SectionTitle id="contacts-title" title={t.sections.contacts} />
			<div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
				<div className="flex flex-col gap-6">
					<p data-reveal="up" className="font-mono text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-[2.75rem]">
						{t.contacts.heading((phrase) => <span className="text-primary">{phrase}</span>)}
					</p>
					<p data-reveal="up" style={{ '--d': '80ms' }} className="max-w-[56ch] text-lg leading-relaxed text-gray">
						{t.contacts.body}
					</p>
					<div data-reveal="up" style={{ '--d': '160ms' }} className="flex flex-wrap gap-3 pt-2">
						<Button href={contacts[0].href}>
							{t.contacts.email}
							<ArrowIcon className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
						</Button>
						<Button variant="ghost" href={profile.cv} download>
							<DownloadIcon className="h-4 w-4" />
							{t.ui.downloadCv}
						</Button>
					</div>
				</div>

				<ul className="border-t border-line">
					{contacts.map((contact, index) => (
						<ContactRow
							key={contact.id}
							index={index}
							contact={contact}
							label={t.contacts.labels[contact.id]}
							copyLabel={t.contacts.copy(t.contacts.labels[contact.id])}
							copied={copiedId === contact.id}
							onCopy={onCopy}
						/>
					))}
				</ul>
			</div>

			<div
				role="status"
				aria-live="polite"
				className={`pointer-events-none fixed left-1/2 top-20 z-50 -translate-x-1/2 border border-primary bg-background px-4 py-2 font-mono text-sm transition-[opacity,transform] duration-300 ease-out ${
					toast ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
				}`}
			>
				{toast}
			</div>
		</section>
	)
}

export default Contacts
