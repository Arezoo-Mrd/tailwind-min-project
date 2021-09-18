module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    debugScreens: {
      position: ['top', 'right'],
      },
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ]
}
