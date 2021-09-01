const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Libre Franklin', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      dark: '#000249',
      light: '#FFFFFF',
      red: '#EC3750',
      yellow: '#FFEA85',
      darkshade: '#4d4e80'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
