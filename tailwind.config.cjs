/** @type {import('tailwindcss').Config} */

const colors = require('./constants/color-palette.js');

module.exports = {
  content: [
    './App.vue',
    './index.html',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './views/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};
