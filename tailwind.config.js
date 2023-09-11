/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				hero_bg: "url('../src/assets/background-bg.svg')",
			},
			fontFamily: {
				dm_sans: ["DM Sans", "sans-serif"],
			},
			colors: {
				"my-black": "#111827",
				"my-gray": "#6B7280",
				"my-pink": "#BE123C",
			},
		},
	},
	plugins: [],
};
