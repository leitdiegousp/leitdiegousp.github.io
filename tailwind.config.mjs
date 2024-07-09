import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
        jakarta: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': '#your-primary-color',
        'secondary': '#your-secondary-color',
        'tertiary': '#your-tertiary-color',
        'light': '#your-light-color',
        'dark': '#your-dark-color',
      },
    },
  },
  plugins: [],
}