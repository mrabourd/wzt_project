/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,htlm}"
  ],
  html: {
    template: './src/index.html',
  },
  theme: {
    extend: {
      colors: {
        'guide-title': '#c0625f',
        'guide-red': '#b92d25',
        'guide-blue': '#3a4995',
        'guide-green': '#3f9970',
        'guide-yellow': '#fbaf35',
        'guide-pink': '#ed008c',
      }
    },
  },
  plugins: [],
}
