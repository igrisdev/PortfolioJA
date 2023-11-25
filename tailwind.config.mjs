/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['class'],
	theme: {
		extend: {
			colors: {
				'P-light-title-primary': 'rgb(251 146 60)',
				'P-light-subtitle-primary': '#fff',
				'P-light-text-primary': 'rgb(156 163 175)',
				'P-light-text-secondary': '#000',
				'P-light-background-primary': '#101964',
				'P-light-background-secondary': 'rgb(251 146 60)',
				'P-light-background-tertiary': '#fff',

				'P-dark-title-primary': '#fff',
				'P-dark-subtitle-primary': '#ccccc9',
				'P-dark-text-primary': 'rgb(156 163 175)',
				'P-dark-text-secondary': '#9facb8',
				'P-dark-background-primary': '#1d2938',
				'P-dark-background-secondary': '#2a3545',
				'P-dark-background-tertiary': '#fff',
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
