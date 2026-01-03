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
    extend: {},
  },
  plugins: [],
}
