/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Nohemi: ["Nohemi"],
        OpenSauce: ["OpenSauce"],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'blue-dark': '#22282F',
      'primary': '#C1F861',
      'base-white': '#FFF',
      'base-black': '#0B1107',
      'base-gray': '#C2C2C2',
      'base-gray-light': '#F9F9F9',
      'yellow-light': '#E9E8D9',
      'error': '#ff4545'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

