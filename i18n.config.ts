import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from './locales/en/common.json';

export const languageResources = {
  en: { common: enCommon },
} as const;

export const defaultNS = 'common';
export const ns = ['common'];

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  defaultNS,
  ns,
  resources: languageResources,
});

export default i18n;
