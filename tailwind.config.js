module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'background-pattern': "url('/bg2.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
