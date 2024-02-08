/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"], // Specify your HTML files
  theme: {
    extend: {
      screens: {
        '2xl': '1440px', // Customize the 2xl breakpoint size
      },
      zIndex: {
        'fullZ': 9999,
      },
      colors: {
        'green-button': '#67CC0E',
        'toggle-button':'#117B01',
        'custom-dark-green': '#062601',
        'custom-green': '#117B01',
        'custom-yellow':'#FFF6B6',
        'yellow-button': '#FFE500',
        'custom-grey' : '#D9D9D9',
        'gray-text': '#404040',
      },
      fontFamily: {
        // Define custom font families
        raleway: ['Raleway', 'sans-serif'],
        customFont: ['Roboto', 'sans-serif'],
        inter: [ 'Inter', 'sans-serif'],
        headingFont: ['Big Shoulders Text', 'sans-serif' ], // Corrected definition
      },
      // Add more customizations as needed
    },
  },
  plugins: [],
};
