import { Action } from 'redux';
import { IContact, defaultContact } from './contact';

export function contactReducer(state: IContact = defaultContact, action: Action) {

  switch (action.type) {

    default:
      return state;
  }
}
