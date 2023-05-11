/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        'normal': '30px'
      },
      colors: {
        'regal-blue': '#243c5a',
      }
    },
  },
  plugins: [],
}

