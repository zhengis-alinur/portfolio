import Github from '../icons/Github'
import Linkedin from '../icons/Linkedin'
import Telegram from '../icons/Telegram'

const links = [
	{ label: 'GitHub', href: 'https://github.com/zhengis-alinur', Icon: Github },
	{ label: 'Telegram', href: 'https://t.me/zh_alinur', Icon: Telegram },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/zhengis-alinur/', Icon: Linkedin },
]

// The rope hangs from the top edge of the window and carries the social links.
const SocialRope = () => (
	<div className="fixed right-3 top-0 z-30 hidden flex-col items-center xl:right-6 xl:flex">
		<div className="rope-line h-40 w-px bg-gray/70" aria-hidden="true" />
		<ul className="flex flex-col items-center gap-1 pt-1">
			{links.map(({ label, href, Icon }, index) => (
				<li key={label} className="rope-item" style={{ '--d': `${700 + index * 90}ms` }}>
					<a
						href={href}
						target="_blank"
						rel="noreferrer"
						aria-label={label}
						className="flex h-11 w-11 items-center justify-center text-gray transition-[color,transform] duration-200 ease-out hover:-translate-x-0.5 hover:text-primary"
					>
						<Icon />
					</a>
				</li>
			))}
		</ul>
	</div>
)

export default SocialRope
