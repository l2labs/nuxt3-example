import { defineNuxtConfig } from 'nuxt'

const alias: Record<string, string> = {
  echarts: 'echarts/dist/echarts.common.min.js'
}

if (process.env.NODE_ENV === 'development') {
  alias.ethers = 'ethers/lib/index'
  alias.moment = 'moment/moment'
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['nuxt-windicss', '@pinia/nuxt', 'vite-plugin-vue-type-imports/nuxt', '@vueuse/nuxt', '@intlify/nuxt3'],
  meta: {
    title: 'Page title',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: ''
      },
      { hid: 'description', name: 'description', content: '' }
    ]
  },
  typescript: { strict: true },
  alias,
  css: ['~~/assets/css/app.css'],
  build: {
    templates: [
      {
        filename: 'views/app.template.html',
        getContents() {
          return `<!DOCTYPE html>
            <html {{ HTML_ATTRS }}>
              <head>
              {{ HEAD }}
              </head>
              <body {{ BODY_ATTRS }}>
              {{ APP }}
              </body>
            </html>`
        }
      }
    ]
  },
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en'
    }
  }
})
