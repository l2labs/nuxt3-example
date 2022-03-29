import { defineNuxtConfig } from 'nuxt3'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['nuxt-windicss', '@pinia/nuxt', 'vite-plugin-vue-type-imports', '@vueuse/nuxt'],
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
  typescript: {
    strict: true
  },
  alias: {
    ethers: 'ethers/lib/index',
    echarts: 'echarts/dist/echarts.common.min.js',
    moment: 'moment/moment'
  },
  vite: {
    logLevel: 'info',
    plugins: [
      vueI18n({
        compositionOnly: false
      })
    ],
    define: {}
  },
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
  }
})
