import usTranslations from './us.json';
import ptBrTranslations from './pt-br.json';

export enum Language {
  English = 'en',
  Portuguese = 'pt-br',
}

interface Translations {
  [key: string]: string;
}

const translations: { [key in Language]: Translations } = {
  [Language.English]: usTranslations,
  [Language.Portuguese]: ptBrTranslations,
};

export const getTranslation = (key: string, language: Language): string => {
  return translations[language][key] || key;
};