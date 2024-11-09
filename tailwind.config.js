/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        primary: ['Ubuntu', 'sans-serif'],
      },
    },
    colors: {
      'primary': '#0B192C',
      'secondary': '#1E3E62',
      'tertiary': '#B7B7B7',
      "kuning": "#FEECB3",
    },
  },

  plugins: [
    require('tailwindcss-animated'),
  ],
}

