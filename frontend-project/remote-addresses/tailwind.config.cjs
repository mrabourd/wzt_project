/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'rem-',
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'guide-title': 'var(--guide-title)',
        'guide-red': 'var(--guide-red)',
        'guide-blue': 'var(--guide-blue)',
        'guide-green': 'var(--guide-green)',
        'guide-yellow': 'var(--guide-yellow)',
        'guide-pink': 'var(--guide-pink)',
        'guide-blue-light': 'var(--guide-blue-light)',
      }
    },
  },
  plugins: [],
}

