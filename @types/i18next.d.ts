import 'react-i18next';
import { defaultNS, languageResources, ns } from '../i18n.config';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    ns: typeof ns;
    resources: {
      en: (typeof languageResources)['en'];
    };
  }
  type TFunction = (args: string) => string;
}
