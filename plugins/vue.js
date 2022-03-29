import Notifications from 'notiwind'
import VueQrcode from '@chenfengyuan/vue-qrcode'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Notifications)
  nuxtApp.vueApp.component(VueQrcode.name, VueQrcode)
})
