const colors = require('tailwindcss/colors')

module.exports = {
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],

  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px'
    },

    // Base colors are the regular tailwindcss colors. Custom colors were taken
    // from the System76 brand guide and shades generated from
    // https://components.ai/color-scale
    // but use the standard tailwind colors for easy copy pasta.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,

      orange: {
        50: '#fff6e8',
        100: '#ffd7a1',
        200: '#fdc887',
        300: '#fbb86c',
        400: '#fdb236',
        500: '#ffad00',
        600: '#d78401',
        700: '#af5c02',
        800: '#763801',
        900: '#3d1400'
      },

      blue: {
        50: '#dfffff',
        100: '#94ebeb',
        200: '#7fdbe2',
        300: '#6acad8',
        400: '#59c1cf',
        500: '#48b9c7',
        600: '#217a93',
        700: '#00496d',
        800: '#002f45',
        900: '#01141d'
      },

      warmGray: {
        50: '#e6e4e2',
        100: '#cfcac7',
        200: '#b7b1ad',
        300: '#9f9893',
        400: '#877f7a',
        500: '#6f6762',
        600: '#57504c',
        700: '#3e3936',
        800: '#262220',
        900: '#0d0c0b'
      },

      yellow: {
        50: '#fff7c8',
        100: '#fff19e',
        200: '#fceb7e',
        300: '#f7e062',
        400: '#eecd52',
        500: '#dbb040',
        600: '#bd8d1f',
        700: '#966800',
        800: '#6c4900',
        900: '#412d00'
      },

      midnight: {
        50: '#fafafb',
        100: '#d0d3dc',
        200: '#a8aebd',
        300: '#818a9f',
        400: '#5b6782',
        500: '#364766',
        600: '#102a4c',
        700: '#11243f',
        800: '#111e34',
        900: '#101828'
      },

      red: {
        50: '#fff6f1',
        100: '#ffd8c6',
        200: '#ffbb9d',
        300: '#ff9d74',
        400: '#fa7e4c',
        500: '#f15d22',
        600: '#c04d1f',
        700: '#913c1a',
        800: '#652c16',
        900: '#3b1d10'
      },

      green: {
        50: '#e1f2e6',
        100: '#c6e7cf',
        200: '#abdbb9',
        300: '#90d0a4',
        400: '#73c48f',
        500: '#5c9a71',
        600: '#467255',
        700: '#314d3a',
        800: '#1d2a21',
        900: '#040604'
      },

      gray: {
        50: '#fefefe',
        100: '#f6f6f6',
        200: '#e2e2e2',
        300: '#bfbfbf',
        400: '#9e9e9e',
        500: '#7e7e7e',
        600: '#5f5f5f',
        700: '#424242',
        800: '#272727',
        900: '#080808'
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

            a: {
              color: theme('colors.hyperlink')
            },

            h1: {
              fontWeight: theme('fontWeight.normal')
            },

            h2: {
              fontWeight: theme('fontWeight.light')
            },

            h3: {
              fontWeight: theme('fontWeight.light')
            },

            h4: {
              fontWeight: theme('fontWeight.light')
            },

            h5: {
              fontWeight: theme('fontWeight.light')
            },

            h6: {
              fontWeight: theme('fontWeight.light')
            },

            'blockquote p:first-of-type::before': {
              content: null
            },

            'blockquote p:last-of-type::after': {
              content: null
            },

            kbd: {
              backgroundColor: theme('colors.black'),
              borderColor: theme('colors.gray.800'),
              borderRadius: theme('borderRadius.DEFAULT'),
              borderWidth: 1,
              color: theme('colors.gray.100'),
              display: 'inline-block',
              lineHeight: '1',
              margin: '0',
              padding: theme('spacing.2')
            },

            code: {
              backgroundColor: theme('colors.gray.800'),
              borderRadius: theme('borderRadius.DEFAULT'),
              color: theme('colors.gray.100'),
              fontWeight: '400',
              padding: theme('spacing.2')
            },

            'code::before': {
              content: null
            },

            'code::after': {
              content: null
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
