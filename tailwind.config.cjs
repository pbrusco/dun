/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', 'system-ui', 'sans-serif'],
        serif: ['Lexend', 'system-ui', 'sans-serif'],
      },
      colors: {
        dun: {
          dark: '#033b38',
          darker: '#022b29',
          cream: '#eceadb',
          'cream-dark': '#cca067',
          muted: '#a1836b',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
