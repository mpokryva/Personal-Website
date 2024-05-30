/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Hepta Slab', 'serif'],
        display: ['Bitter', 'serif'],
      },
    },
  },
  plugins: [],
}
