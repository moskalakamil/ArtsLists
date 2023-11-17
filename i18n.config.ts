import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enApp from './locales/en/app.json';

export const languageResources = {
  en: { app: enApp },
} as const;

export const defaultNS = 'app';
export const ns = ['app'] as const;

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  defaultNS,
  ns,
  resources: languageResources,
});

export default i18n;
