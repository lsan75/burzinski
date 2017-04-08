import { Action, combineReducers } from 'redux';
import { IAppState } from './';

import { contactReducer } from './contact/contact.reducer';
import { mainReducer } from './main/main.reducer';

export const rootReducer = combineReducers<IAppState>({
  contactReducer,
  mainReducer
});
