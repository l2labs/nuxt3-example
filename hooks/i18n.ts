import store from 'store'

export function useLocale() {
  const vm = getCurrentInstance()?.proxy
  const locale = computed(() => vm?.$i18n.locale)
  const switchLocale = (locale: string) => {
    vm!.$root!.$i18n.locale = locale
    store.set('i18n', locale)
  }

  return {
    locale,
    switchLocale
  }
}
