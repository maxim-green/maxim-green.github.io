/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    container: {
      center: true,
      screens: {
        sm: '480px',
        md: '640px',
        lg: '800px',
        xl: '1024px',
      }
    },
		extend: {},
	},
	plugins: [],
}
