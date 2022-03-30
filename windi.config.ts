import plugin from 'windicss/plugin'
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        red: {
          500: '#f00000'
        },
        gray: {
          100: '#fafafa'
        }
      },
      lineHeight: {
        'extra-loose': '3.5'
      },
      borderRadius: {
        '5xl': '4rem'
      },
      boxShadow: {
        none: 'none',
        xl: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        '2xl': '0 0 20px 0 rgba(0, 0, 0, 0.1)',
        '3xl': '0 0 60px 15px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        home: 'url("~/assets/images/background.jpg")'
      },
      backgroundSize: {
        'h-2': 'auto 300%',
        full: '100% 100%'
      },
      fontFamily: {
        poppins: [
          'Poppins',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ]
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'auto'
          }
        }
      }
    }
  },
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex items-center justify-center'
  },
  variants: {
    scrollbar: ['rounded']
  },
  plugins: [
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/typography'),
    require('windicss/plugin/aspect-ratio'),
    plugin(({ addVariant }) => {
      addVariant('nuxt-active', ({ modifySelectors }) => {
        return modifySelectors(({ className }) => {
          return `.router-link-active.${className}`
        })
      })
    })
  ]
})
