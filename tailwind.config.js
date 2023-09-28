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
			gray: '#ABB2BF',
			white: '#FFFFFF'
		},
	},
	fontFamily: {
		firo: ['"Fira Code"', '"monospace"'],
	}
  },
  plugins: [],
}

