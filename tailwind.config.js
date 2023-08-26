/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			Montserrat: ['Montserrat', 'sans-serif'],
		},
		extend: {
			colors: {
				'primary-color': '#3FAAF0',
				'secondary-color': '#222f3e',
				'gray-color': '#d9dbe0',
			},
			width: {
				'500': '500px',
				'570': '570px'
			}, 
			order: {
				'13': '13'
			}
		},
	},
	variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
	plugins: [],
};