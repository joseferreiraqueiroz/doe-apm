/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {

    extend: {
      colors: {
        grayfull: "#121214" 
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

