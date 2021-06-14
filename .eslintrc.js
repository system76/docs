module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ]
}
