import { createI18n } from 'vue-i18n'
import { defineNuxtPlugin } from '#app'
import store from 'store'

const i18n = createI18n({
  locale: store.get('i18n') || 'en',
  fallbackLocale: 'en',
  messages: {}
})

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(i18n)
})
