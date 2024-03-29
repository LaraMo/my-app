import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './en';
import { fr } from './fr';

/**
 *  Possible languages
 */
const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};
i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
