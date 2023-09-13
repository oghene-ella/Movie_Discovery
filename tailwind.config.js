/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				hero_bg: "url('../src/assets/background-bg.svg')",
				vid_bg: "url('../src/assets/watch.svg')"
			},
			fontFamily: {
				dm_sans: ["DM Sans", "sans-serif"],
			},
			colors: {
				"my-black": "#111827",
				"my-gray": "#6B7280",
				"my-pink": "#BE123C",
				"my-light-gray": "#7A7B83",
				"my-light-pink": "#F8E7EB",
				"my-pink-bg": "#FCF5F7",
				"button-pink": "#F0C8D2",
				"text-gray": "#333333",
				"pink-border": "#DC7E95",
				"header-black": "#404040",
			},
		},
	},
	plugins: [],
};
