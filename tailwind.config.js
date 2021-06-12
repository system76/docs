module.exports = {
  plugins: [
    require('@tailwindcss/typography')
  ],

  theme: {
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
