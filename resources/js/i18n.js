import { createI18n } from 'vue-i18n'

export function createI18nInstance({ locale, messages }) {
  return createI18n({
    legacy: false,
    locale,
    fallbackLocale: 'uk',
    globalInjection: true,
    messages,
  })
}