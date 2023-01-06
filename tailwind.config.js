/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.vue',
    './index.html',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './views/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        shadow: 'hsl(0, 0, 0 / 26)',
      },
    },
  },
  plugins: [],
};
