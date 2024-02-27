import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import languageReducer from './languageReducer';

export interface LanguageState {
  language: string;
  translations: { [key: string]: string };
}

export interface RootState {
  language: LanguageState;
}

const rootReducer = combineReducers({
  language: languageReducer,
});

export default configureStore({
  reducer: rootReducer
})