type LocaleDesc = {
  desc: string
  short: string
}

export const LOCALE_MAP: { [key: string]: LocaleDesc } = {
  en: {
    desc: 'English',
    short: 'EN'
  },
  zh: {
    desc: '中文',
    short: 'ZH'
  }
}
