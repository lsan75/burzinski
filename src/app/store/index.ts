import { ContactActions } from './contact/contact.actions';
import { MainActions } from './main/main.actions';

import { IContact, defaultContact } from './contact/contact';
import { IMain, defaultMain } from './main/main';

export interface IAppState {
  contactReducer: IContact;
  mainReducer: IMain;
}

export const actions = [
  ContactActions,
  MainActions
];

export const defaultState = {
  contactReducer: defaultContact,
  mainReducer: defaultMain
};
