import plugin from 'windicss/plugin'
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        red: {
          450: '#ff3c1b',
          500: '#f00000',
          550: '#f80000',
          600: '#fa2702'
        },
        gray: {
          100: '#fafafa',
          125: '#f6f6f6',
          130: '#f5f5f5',
          150: '#f4f4f4',
          160: '#f3f3f3',
          175: '#f1f1f1',
          190: '#eeeeee',
          195: '#ededed',
          200: '#e9e9e9',
          250: '#dfdfdf',
          260: '#d8d8d8',
          265: '#d4d4d4',
          270: '#d3d3d3',
          275: '#cecece',
          300: '#cacaca',
          325: '#c8c8c8',
          330: '#c5c5c5',
          340: '#bcbcbc',
          350: '#b9b9b9',
          375: '#b7b7b7',
          400: '#b2b2b2',
          450: '#a8a8a8',
          500: '#9f9f9f',
          550: '#979797',
          600: '#7a7979',
          700: '#383838',
          900: '#222222'
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
