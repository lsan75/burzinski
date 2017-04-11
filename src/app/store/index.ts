import { ContactActions } from './contact/contact.actions';
import { MainActions } from './main/main.actions';
import { MediaActions } from './media/media.actions';

import { IContact, defaultContact } from './contact/contact';
import { IMain, defaultMain } from './main/main';
import { IMedia, defaultMedia } from './media/media';

export interface IAppState {
  contactReducer: IContact;
  mainReducer: IMain;
  mediaReducer: IMedia;
}

export const actions = [
  ContactActions,
  MainActions,
  MediaActions
];

export const defaultState = {
  contactReducer: defaultContact,
  mainReducer: defaultMain,
  mediaReducer: defaultMedia
};
