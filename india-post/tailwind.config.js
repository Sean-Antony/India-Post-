/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'PB': ['Poppins-Bold'],
        'PSB': ['Poppins-SemiBold'],
        'PM':  ['Poppins-Medium'],
        'PR': ['Poppins-Regular']
      },
    },
  },
  plugins: [],
}

