const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			sans: ['"Inter"', 'sans-serif'],
		},
		colors: {
			transparent: colors.transparent,
			white: colors.white,
			black: colors.black,
			gray: colors.gray,
			blue: colors.blue,
			indigo: colors.indigo,
			red: colors.red,
			orange: colors.orange,
			green: colors.green,
		},
		extend: {
			opacity: {
				15: '.15',
			},
			scale: {
				99: '.99',
			},
		},
	},
};
