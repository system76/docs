module.exports = {
  plugins: [
    require('@tailwindcss/typography')
  ],

  extend: {
    typography: {
      DEFAULT: {
        css: {
          maxWidth: null
        }
      }
    }
  }
}
