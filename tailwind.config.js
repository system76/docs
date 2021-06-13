const colors = require('tailwindcss/colors')

module.exports = {
  plugins: [
    require('@tailwindcss/typography')
  ],

  theme: {
    // Base colors are the regular tailwindcss colors. Custom colors were taken
    // from the System76 brand guide and shades generated from
    // https://javisperez.github.io/tailwindcolorshades
    // but use the standard tailwind colors for easy copy pasta.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,

      gray: {
        50: '#f6f6f6',
        100: '#e2e2e2',
        200: '#d5d3d2',
        300: '#bcb9b7',
        400: '#898480',
        500: '#574f4a',
        600: '#4e4743',
        700: '#413b38',
        800: '#342f2c',
        900: '#2b2724'
      },

      blue: {
        50: '#f6fcfc',
        100: '#edf8f9',
        200: '#d1eef1',
        300: '#b6e3e9',
        400: '#7fced8',
        500: '#48B9C7',
        600: '#41a7b3',
        700: '#368b95',
        800: '#2b6f77',
        900: '#235b62'
      },

      green: {
        50: '#f8fcf9',
        100: '#f1f9f4',
        200: '#dcf0e3',
        300: '#c7e7d2',
        400: '#9dd6b1',
        500: '#73C48F',
        600: '#68b081',
        700: '#56936b',
        800: '#457656',
        900: '#386046'
      },

      red: {
        50: '#fef7f4',
        100: '#feefe9',
        200: '#fcd7c8',
        300: '#f9bea7',
        400: '#f58e64',
        500: '#F15D22',
        600: '#d9541f',
        700: '#b5461a',
        800: '#913814',
        900: '#762e11'
      },

      orange: {
        50: '#fafafa',
        100: '#EEEDED',
        200: '#E6E5E4',
        300: '#D5D3D2',
        400: '#A39E9B',
        500: '#574F4A',
        600: '#534B46',
        700: '#3D3734',
        800: '#272421',
        900: '#161413'
      },

      yellow: {
        50: '#fffdf7',
        100: '#fefcef',
        200: '#fdf7d8',
        300: '#fcf3c0',
        400: '#f9e991',
        500: '#F7E062',
        600: '#deca58',
        700: '#b9a84a',
        800: '#94863b',
        900: '#796e30'
      },

      midnight: {
        50: '#f3f4f6',
        100: '#e7eaed',
        200: '#c3cad2',
        300: '#9faab7',
        400: '#586a82',
        500: '#102A4C',
        600: '#0e2644',
        700: '#0c2039',
        800: '#0a192e',
        900: '#081525'
      }
    },

    fontFamily: {
      sans: [
        'Fira Sans',
        'system-ui',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Ubuntu',
        'Cantarell',
        'Nato Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      serif: [
        'Roboto Slab',
        'serif',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      mono: [
        'Ubuntu Mono',
        'Ubuntu Monospace',
        'Menlo',
        'Consolas',
        'Roboto Mono',
        'Noto Mono',
        'Oxygen Mono',
        'Liberation Mono',
        'monospace'
      ]
    },

    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            maxWidth: null,

            kbd: {
              backgroundColor: theme('colors.gray.800'),
              borderRadius: theme('borderRadius.DEFAULT'),
              color: theme('colors.gray.100'),
              display: 'inline-block',
              lineHeight: '1',
              margin: '0',
              padding: theme('spacing.2')
            },

            '> ul': {
              '> li': {
                '> :first-child': {
                  marginTop: '0 !important'
                },

                '> :last-child': {
                  marginBottom: '0 !important'
                }
              }
            }
          }
        }
      })
    }
  }
}
