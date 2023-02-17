/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#340C00',
        secondary: '#917066'
      }
    },
    fontFamily:{
      sans: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}
