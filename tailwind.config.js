/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'sm': {'max': '575px'},

      'md': {'min': '576px'},

      'lg': {'min': '768px'},

      'xl': {'min': '992px'},

      '2xl': {'min': '1200px'},

      '3xl': {'min': '1400px'},
    },

    extend: {},
  },
  plugins: [],
}
