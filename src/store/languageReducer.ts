import { CHANGE_LANGUAGE } from './languageActions';
import { LanguageState } from '.';
import ptBrTranslations from '../translations/pt-br.json';

const initialState: LanguageState = {
  language: 'pt-br',
  translations: ptBrTranslations,
};

const languageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default languageReducer;