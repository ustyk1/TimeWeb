/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'sm': {'max': '499px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '500px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '650px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '800px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1000px'},
      // => @media (min-width: 1536px) { ... }
    },

    extend: {},
  },
  plugins: [],
}
