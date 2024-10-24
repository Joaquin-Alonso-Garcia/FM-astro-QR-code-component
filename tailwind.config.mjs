/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'primary': ['Outfit', 'sans-serif'],
			},
			colors: {
				'slate-300': 'hsl(212, 45%, 89%)',
				'slate-500': 'hsl(216, 15%, 48%)',
				'slate-900': 'hsl(218, 44%, 22%)',
			},
		},
	},
	plugins: [],
}
