/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  transitionProperty: {
			width: "width"
		  }
		},
		screens:{
		  'sm': '640px',
		  'md': '768px',
		  'lg': '1024px',
		  'xl': '1280px',
		  '2xl': '1536px',
		  'max-md': {'max': '768px'},
		  'max-lg': {'max': '1024px'},
		  'max-sm': {'max': '640px'},
		}
	},
	plugins: [],
}
