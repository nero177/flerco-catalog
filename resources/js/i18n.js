import { createI18n } from 'vue-i18n'
import en from '../locales/en.json';
import uk from '../locales/uk.json';
import ru from '../locales/ru.json';

const messages = {en, uk, ru}

// Get saved locale from localStorage or default to 'ru'
const getInitialLocale = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('locale') || 'uk';
  }
  return 'uk';
};

const i18n = createI18n({
  locale: getInitialLocale(),
  fallbackLocale: 'uk',
  messages,
  specialCharacters: {
    linked: '~@',
  }
});

export default i18n;