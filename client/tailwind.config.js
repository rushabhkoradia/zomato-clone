module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navColor: {
          50: '#ffe5e7',
          100: '#fbbac0',
          200: '#f18e96',
          300: '#ea616d',
          400: '#e33644',
          500: '#c91c2a',
          600: '#9e1420',
          700: '#710d16',
          800: '#46050c',
          900: '#1e0002',
        }        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
