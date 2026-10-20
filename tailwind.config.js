/** @type {import('tailwindcss').Config} */
export default {
	content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
		colors: {
			primary: '#C778DD',
			background: '#282C33',
			surface: '#2E333B',
			line: '#454B55',
			gray: '#ABB2BF',
			white: '#FFFFFF'
		},
		maxWidth: {
			page: '72rem',
		},
		transitionTimingFunction: {
			out: 'cubic-bezier(0.16, 1, 0.3, 1)',
		},
	},
	fontFamily: {
		mono: ['"Fira Code"', 'ui-monospace', 'monospace'],
		sans: ['"Fira Sans"', 'system-ui', 'sans-serif'],
	}
  },
  plugins: [],
}
