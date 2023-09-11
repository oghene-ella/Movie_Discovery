/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		// colors: {
		// 	button: "#BE123C"
		// },
		fontFamily: {
			dm_sans: ["DM Sans", "sans-serif"],
		},
		extend: {
			backgroundImage: {
				hero_bg: "url('../src/assets/background-bg.svg')",
			},
		},
	},
	plugins: [],
};
