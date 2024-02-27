export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export const changeLanguage = (language: string) => ({
  type: CHANGE_LANGUAGE,
  payload: language,
});