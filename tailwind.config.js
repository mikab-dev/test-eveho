module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        xl: "46px"
      },
      colors: {
        gray: {
          e9: "#E9EAF2",
          f6: "#F6F6F6",
          a6: "#A6A6A6"
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
