import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Logo from './Logo';
import LocaleSwitch from './LocaleSwitch';
import { useLocale } from '../i18n';
import { profile } from '../data/profile';
import { useActiveSection, useScrollFrame } from '../hooks/motion';
import { CloseIcon, DownloadIcon, MenuIcon } from '../icons/Ui';

const navItems = ['experience', 'skills', 'about-me', 'recommendations', 'contacts'];
const sectionIds = ['home', ...navItems];

const Header = () => {
	const { t, locale } = useLocale();
	const active = useActiveSection(sectionIds);
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const progressRef = useRef(null);
	const indicatorRef = useRef(null);
	const linkRefs = useRef({});

	const onFrame = useCallback(() => {
		const max = document.documentElement.scrollHeight - window.innerHeight;
		const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
		progressRef.current.style.transform = `scaleX(${progress})`;
		setScrolled(window.scrollY > 8);
	}, []);
	useScrollFrame(onFrame);

	// Slide the underline to the active link. It is a 1px bar scaled to the link's width.
	const placeIndicator = useCallback(() => {
		const indicator = indicatorRef.current;
		const link = linkRefs.current[active];
		if (!indicator) return;
		if (!link) {
			indicator.style.opacity = '0';
			return;
		}
		indicator.style.opacity = '1';
		indicator.style.transform = `translateX(${link.offsetLeft}px) scaleX(${link.offsetWidth})`;
	}, [active, locale]); // eslint-disable-line react-hooks/exhaustive-deps -- labels change width

	useLayoutEffect(placeIndicator, [placeIndicator]);

	useEffect(() => {
		document.fonts?.ready.then(placeIndicator);
		window.addEventListener('resize', placeIndicator);
		return () => window.removeEventListener('resize', placeIndicator);
	}, [placeIndicator]);

	useEffect(() => {
		if (!open) return;
		const onKey = (event) => event.key === 'Escape' && setOpen(false);
		document.addEventListener('keydown', onKey);
		document.body.style.overflow = 'hidden';
		return () => {
			document.removeEventListener('keydown', onKey);
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-300 ${
				scrolled || open ? 'border-b border-line/70 bg-background' : 'border-b border-transparent bg-background/0'
			}`}
		>
			<div className="mx-auto flex h-16 max-w-page items-center justify-between px-4 sm:px-8">
				<Logo />

				<nav aria-label={t.ui.sections} className="relative hidden lg:block">
					<ul className="flex items-center gap-1">
						{navItems.map((item) => (
							<li key={item}>
								<a
									ref={(el) => (linkRefs.current[item] = el)}
									href={`#${item}`}
									aria-current={active === item ? 'true' : undefined}
									className={`block px-3 py-2 font-mono text-sm transition-colors duration-200 hover:text-white ${
										active === item ? 'text-white' : 'text-gray'
									}`}
								>
									<span className="text-primary">#</span>{t.sections[item]}
								</a>
							</li>
						))}
					</ul>
					<span
						ref={indicatorRef}
						aria-hidden="true"
						className="absolute bottom-0 left-0 h-px w-px origin-left bg-primary opacity-0 transition-[transform,opacity] duration-500 ease-out"
					/>
				</nav>

				<div className="flex items-center gap-2">
					<LocaleSwitch />
					<a
						href={profile.cv}
						download
						className="hidden min-h-[40px] items-center gap-2 border border-primary px-3 font-mono text-sm transition-colors duration-200 hover:bg-primary hover:text-background sm:inline-flex"
					>
						<DownloadIcon className="h-4 w-4" />
						CV
					</a>
					<button
						type="button"
						className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-gray transition-colors hover:text-white lg:hidden"
						aria-expanded={open}
						aria-controls="mobile-menu"
						aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
						onClick={() => setOpen(!open)}
					>
						{open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
					</button>
				</div>
			</div>

			<div
				id="mobile-menu"
				className={`absolute inset-x-0 top-full h-[calc(100dvh-4rem)] bg-background transition-[opacity,visibility] duration-300 lg:hidden ${
					open ? 'visible opacity-100' : 'invisible opacity-0'
				}`}
			>
				<nav aria-label={t.ui.sections} className="px-4 pt-8">
					<ul className="flex flex-col">
						{navItems.map((item, index) => (
							<li
								key={item}
								className={`transition-[transform,opacity] duration-500 ease-out ${open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
								style={{ transitionDelay: open ? `${80 + index * 50}ms` : '0ms' }}
							>
								<a
									href={`#${item}`}
									onClick={() => setOpen(false)}
									className={`flex min-h-[56px] items-center border-b border-line/60 font-mono text-2xl ${active === item ? 'text-white' : 'text-gray'}`}
								>
									<span className="text-primary">#</span>{t.sections[item]}
								</a>
							</li>
						))}
					</ul>
					<a
						href={profile.cv}
						download
						className="mt-8 inline-flex min-h-[48px] items-center gap-2 border border-primary px-5 font-mono"
					>
						<DownloadIcon className="h-4 w-4" />
						{t.ui.downloadCv}
					</a>
				</nav>
			</div>

			<div
				ref={progressRef}
				aria-hidden="true"
				className="absolute bottom-[-1px] left-0 h-px w-full origin-left bg-primary"
				style={{ transform: 'scaleX(0)' }}
			/>
		</header>
	);
};

export default Header;
