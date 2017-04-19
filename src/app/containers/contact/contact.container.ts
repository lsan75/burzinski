import { Component, OnDestroy } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Rx';
import { IContact, defaultContact } from '../../store/contact/contact';
import { ContactActions } from '../../store/contact/contact.actions';
import { isSent } from '../../store/contact/contact.queries';

@Component({
  selector: 'bz-contact',
  templateUrl: './contact.html'
})
export class ContactComponent implements OnDestroy {
  @select(isSent) sent: Observable<boolean>;

  public contact = {
    name: null,
    email: null,
    subject: null,
    message: null
  };

  constructor(
    private contactActions: ContactActions
  ) {}

  ngOnDestroy() {
    this.contactActions.setNotSent();
  }

  public sendMessage = () => {
    this.contactActions.send(this.contact);
  }
}
