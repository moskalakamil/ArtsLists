import 'react-i18next';
import { defaultNS, languageResources } from '../i18n.config';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: {
      en: (typeof languageResources)['en'];
    };
  }
  type TFunction = (args: string) => string;
}
