module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        sgreen: '#97e493',
        sblue: '#42b5e8',
        lgray: '#5b8092',
        footer: '#313944',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
