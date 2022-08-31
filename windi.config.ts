import plugin from 'windicss/plugin'
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      colors: {}
    }
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
