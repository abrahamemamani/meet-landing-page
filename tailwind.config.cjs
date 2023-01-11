/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable comma-dangle */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Red Hat Display', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        main: '#4D96A9',
        secondary: '#855FB1',
        dark: '#28283D',
        'default-grey': '#87879D',
        accent: '#8FE3F9',
        'secondary-light': '#D9B8FF',
        'grey-light': '#FAFAFA',
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/hero-pattern.svg')",
      }
    },
  },
  plugins: [],
}
