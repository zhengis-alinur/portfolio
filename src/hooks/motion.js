import { useEffect, useState } from 'react';

const REDUCED = '(prefers-reduced-motion: reduce)';

export const prefersReducedMotion = () =>
	typeof window !== 'undefined' && window.matchMedia(REDUCED).matches;

export const usePrefersReducedMotion = () => {
	const [reduced, setReduced] = useState(prefersReducedMotion);

	useEffect(() => {
		const query = window.matchMedia(REDUCED);
		const onChange = () => setReduced(query.matches);
		query.addEventListener('change', onChange);
		return () => query.removeEventListener('change', onChange);
	}, []);

	return reduced;
};

const REVEAL_TARGETS = '[data-reveal], .dots';

// Marks every `[data-reveal]` element and `.dots` grid with `.is-in` the first
// time it scrolls into view. One observer serves the whole page, including
// elements mounted later, such as the extra words of a translated quote.
export const useRevealOnScroll = () => {
	useEffect(() => {
		const targets = document.querySelectorAll(REVEAL_TARGETS);

		if (!('IntersectionObserver' in window)) {
			targets.forEach((el) => el.classList.add('is-in'));
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-in');
						observer.unobserve(entry.target);
					}
				});
			},
			{ rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
		);

		targets.forEach((el) => observer.observe(el));

		const mutations = new MutationObserver((records) => {
			records.forEach((record) => {
				record.addedNodes.forEach((node) => {
					if (node.nodeType !== Node.ELEMENT_NODE) return;
					if (node.matches(REVEAL_TARGETS)) observer.observe(node);
					node.querySelectorAll(REVEAL_TARGETS).forEach((el) => observer.observe(el));
				});
			});
		});
		mutations.observe(document.body, { childList: true, subtree: true });

		return () => {
			observer.disconnect();
			mutations.disconnect();
		};
	}, []);
};

// Returns the id of the section currently crossing the middle of the viewport.
export const useActiveSection = (ids) => {
	const [active, setActive] = useState(ids[0]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActive(entry.target.id);
				});
			},
			{ rootMargin: '-45% 0px -50% 0px' }
		);

		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, [ids]);

	return active;
};

// Calls `onFrame` at most once per animation frame while the page scrolls or resizes.
export const useScrollFrame = (onFrame) => {
	useEffect(() => {
		let frame = 0;
		const schedule = () => {
			if (frame) return;
			frame = requestAnimationFrame(() => {
				frame = 0;
				onFrame();
			});
		};

		onFrame();
		window.addEventListener('scroll', schedule, { passive: true });
		window.addEventListener('resize', schedule);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('scroll', schedule);
			window.removeEventListener('resize', schedule);
		};
	}, [onFrame]);
};
