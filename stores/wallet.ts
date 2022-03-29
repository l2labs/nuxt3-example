import store from 'store'
import { defineStore } from 'pinia'

export const useWalletStore = defineStore('wallet', {
  state: () => ({
    wallet: null,
    connected: false
  }),
  getters: {},
  actions: {
    setConnected(connected: boolean) {
      this.connected = connected
    }
  },
  hydrate(state) {
    state.wallet = store.get('wallet')
  }
})
