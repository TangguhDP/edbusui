const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'greenPea': '#1E6262', 
      'paradiso': '#2D767F', 
      'clearDay': '#ECFFFB', 
      'mintTulip': '#B4F1F1', 
      'backgroundColor': '#FDFDFD', 
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,

    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
