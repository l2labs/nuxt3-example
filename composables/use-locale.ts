import store from 'store'
import { LOCALE_MAP } from '~~/constants/i18n'

export default function () {
  const { locale, availableLocales } = useI18n({ useScope: 'global' })
  const switchLocale = (l: string) => {
    locale.value = l
    store.set('i18n', l)
  }

  const locales = computed(() => availableLocales.filter(locale => !!LOCALE_MAP[locale as string]))

  return {
    locale,
    locales,
    switchLocale
  }
}
