/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#260A47',
        background: '#130226',
        accent: '#5DEF72'
      }
    },
  },
  plugins: [],
}

