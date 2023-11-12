import { useTranslation } from 'react-i18next';

interface ITranslation {
  t: (key: string, options?: any) => string;
  i18n: {
    changeLanguage: (language: string) => void;
    languages: readonly string[];
    language: string;
  };
}

export const useT = (file?: string) => {
  return useTranslation<any>(file) as ITranslation;
};
