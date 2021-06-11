export default {
  ssr: false,
  target: 'static',

  components: true,

  head: {
    description: 'Official System76 Support and useful documentation',
    color: '#4e4540',

    titleTemplate: title => (title !== '') ? `${title} - System76 Support` : 'System76 Support',

    htmlAttrs: {
      lang: 'en',
      itemscope: true
    },

    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },

      { charset: 'utf-8' },

      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'description', name: 'description', content: 'Official System76 Support and useful documentation' },
      { hid: 'og:title', property: 'og:title', content: 'System76 Support' },
      { hid: 'og:description', property: 'og:description', content: 'Official System76 Support and useful documentation' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'System76 Support' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Official System76 Support and useful documentation' }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],

    script: [
      {
        async: true,
        defer: true,
        'data-domain': 'support.system76.com',
        src: 'https://plausible.io/js/plausible.js'
      },
      {
        innerHTML: 'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }'
      }
    ],

    __dangerouslyDisableSanitizers: ['script']
  },

  css: [
    '@system76/design/dist/index.common.css',
    '@system76/components/dist/index.common.css'
  ],

  plugins: [
    '~/plugins/components',
    '~/plugins/custom-tags'
  ],

  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxt/content'
  ],

  loading: {
    color: '#6ACAD8'
  },

  content: {
    dir: './_jekyll/_articles',
    fullTextSearchFields: ['title', 'description']
  }
}
