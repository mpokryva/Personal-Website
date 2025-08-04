/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
