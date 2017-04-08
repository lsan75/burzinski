import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';
import { ContactService } from '../../services/contact/contact.service';

export const CONTACT = {
  SENT: 'CONTACT_SENT'
};

@Injectable()
export class ContactActions {
  constructor(
    private store: NgRedux<IAppState>,
    private contactService: ContactService
  ) {}

  public send = contact => {
    this.contactService.send(contact).subscribe(res => {
      this.store.dispatch({
        type: CONTACT.SENT,
        sent: true
      });
    });
  }

  public setNotSent = () => {
    this.store.dispatch({
      type: CONTACT.SENT,
      sent: false
    });
  }
}
