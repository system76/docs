import contentHighlighter from './modules/content-highlighter'
import githubContributors from './modules/github-contributors'
import linkFixes from './modules/link-fixes'

export default async () => ({
  target: 'static',

  components: true,

  content: {
    markdown: {
      highlighter: await contentHighlighter(),
      rehypePlugins: [
        '~/plugins/content-replace'
      ]
    }
  },

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
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@system76/design/dist/minimal.common.css',
    '@system76/components/dist/index.common.css',
    '~/assets/styles/code-highlighting.css'
  ],

  plugins: [
    '~/plugins/components',
    '~/plugins/font-awesome'
  ],

  buildModules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-dynamic-images'
  ],

  dynamicImages: {
    puppeteerOptions: { headless: true, args: ['--no-sandbox'] }
  },

  modules: [
    'nuxt-content-git',
    '@nuxt/content'
  ],

  loading: {
    color: '#6ACAD8'
  },

  hooks: {
    'content:file:beforeInsert': doc => Promise.all([
      githubContributors(doc),
      linkFixes(doc)
    ])
  },

  image: {
    // Mirrored to tailwind breakpoints + some extra
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536
    }
  },

  tailwindcss: {
    cssPath: '~assets/styles/tailwind.css'
  }
})
