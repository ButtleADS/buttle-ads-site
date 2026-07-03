import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import pl from './locales/pl/translation.json';
import en from './locales/en/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ua: { translation: pl },
      en: { translation: en },
    },
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false, // React сам екранує
    },
  });

export default i18n;