import { createContext, useContext } from 'react';
import en from './locales/en';
import ru from './locales/ru';
import kk from './locales/kk';

export const locales = { en, ru, kk };
export const localeOrder = ['en', 'ru', 'kk'];

const STORAGE_KEY = 'locale';

// Maps any language tag (`ru-RU`, `kk`, `kz`) onto a supported locale code.
const normalize = (value) => {
	const tag = (value || '').toLowerCase();
	if (tag.startsWith('ru')) return 'ru';
	if (tag.startsWith('kk') || tag.startsWith('kz')) return 'kk';
	if (tag.startsWith('en')) return 'en';
	return null;
};

// `?lang=` wins, then the visitor's last choice, then the browser's languages.
export const detectLocale = () => {
	try {
		const fromQuery = normalize(new URLSearchParams(window.location.search).get('lang'));
		if (fromQuery) return fromQuery;
	} catch {
		// Ignore malformed URLs.
	}
	try {
		const stored = normalize(window.localStorage.getItem(STORAGE_KEY));
		if (stored) return stored;
	} catch {
		// Storage can be blocked; fall through to the browser languages.
	}
	const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
	for (const language of languages) {
		const match = normalize(language);
		if (match) return match;
	}
	return 'en';
};

export const storeLocale = (code) => {
	try {
		window.localStorage.setItem(STORAGE_KEY, code);
	} catch {
		// The choice still applies for this visit.
	}
};

export const LocaleContext = createContext({ locale: 'en', t: en, setLocale: () => {} });

export const useLocale = () => useContext(LocaleContext);

// '2025-08' → 'Aug 2025' in the active locale.
export const formatMonth = (t, value) => {
	const [year, month] = value.split('-').map(Number);
	return `${t.months[month - 1]} ${year}`;
};

export const formatPeriod = (t, start, end) => `${formatMonth(t, start)} — ${end ? formatMonth(t, end) : t.now}`;

// '2023-06-05' → a long date. Built from the dictionaries because browsers ship incomplete Kazakh date data.
export const formatDate = (t, value) => {
	const [year, month, day] = value.split('-').map(Number);
	return t.longDate(day, month - 1, year);
};
