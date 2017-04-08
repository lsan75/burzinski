import { Action } from 'redux';
import { IContact, defaultContact } from './contact';
import { CONTACT } from './contact.actions';

export interface ContactAction extends Action {
  sent: boolean;
}
export function contactReducer(state: IContact = defaultContact, action: ContactAction) {

  switch (action.type) {

    case CONTACT.SENT:
      return Object.assign({}, state, {sent: action.sent});

    default:
      return state;
  }
}
