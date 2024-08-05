const defaultColors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      ...defaultColors,
      k1: '#B01E1d',
      k2: '#FFF600',
      success: '#D1E7DD',
      error: '#F8D7DA',
      warning: '#FFF3CD',
      info: '#CFF4FC',
    },
    extend: {
      fontFamily: {
        PB: ['Poppins-Bold', 'sans-serif'],
        PSB: ['Poppins-SemiBold', 'sans-serif'],
        PR: ['Poppins-Regular', 'sans-serif'],
        PM: ['Poppins-Medium', 'sans-serif']
      },
    },
  },
  plugins: [],
};
