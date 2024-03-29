/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'font1': ['ui-sans-serif', 'system-ui'],

    },

    colors: {
      blue: '#0B3B5A',
      green: '#9CA57B',
      purple: '#5D69A6',
      black:  '#262930',
      white: '#F2F2F2',  
    },
   
    extend: {},
  },
  plugins: [],
}

