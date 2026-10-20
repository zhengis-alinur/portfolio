import { useCallback, useEffect, useMemo, useState } from 'react';
import { LocaleContext, detectLocale, locales, storeLocale } from './index';

const setMeta = (selector, content) => document.querySelector(selector)?.setAttribute('content', content);

const LocaleProvider = ({ children }) => {
	const [locale, setLocaleState] = useState(detectLocale);
	const t = locales[locale];

	const setLocale = useCallback((code) => {
		if (!locales[code]) return;
		setLocaleState(code);
		storeLocale(code);

		// Keep a shared `?lang=` link honest after the visitor switches.
		const url = new URL(window.location.href);
		if (url.searchParams.has('lang')) {
			url.searchParams.set('lang', code === 'kk' ? 'kz' : code);
			window.history.replaceState(null, '', url);
		}
	}, []);

	useEffect(() => {
		document.documentElement.lang = t.code;
		document.title = t.meta.title;
		setMeta('meta[name="description"]', t.meta.description);
		setMeta('meta[property="og:title"]', t.meta.title);
		setMeta('meta[property="og:description"]', t.meta.description);
	}, [t]);

	const value = useMemo(() => ({ locale, t, setLocale }), [locale, t, setLocale]);

	return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export default LocaleProvider;
