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
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '900',
      },
      colors: {
          light: "#fff",
          dark: "#333333",
          primary: "#693A25",
          secondary: "#AE9A91",
          tertiary: "#EEE0DB",
      },
    },
  },
  plugins: [],
}