import { ContactActions } from './contact/contact.actions';
import { MainActions } from './main/main.actions';
import { PageActions } from './page/page.actions';

import { IContact, defaultContact } from './contact/contact';
import { IMain, defaultMain } from './main/main';
import { IPage, defaultPage } from './page/page';

export interface IAppState {
  contactReducer: IContact;
  mainReducer: IMain;
  pageReducer: IPage;
}

export const actions = [
  ContactActions,
  MainActions,
  PageActions
];

export const defaultState = {
  contactReducer: defaultContact,
  mainReducer: defaultMain,
  pageReducer: defaultPage
};
