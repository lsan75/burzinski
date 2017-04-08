import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Rx';
import { IHeader } from '../../store/main/main';
import { IContact, defaultContact } from '../../store/contact/contact';
import { ContactActions } from '../../store/contact/contact.actions';
import { getHeader } from '../../store/main/main.queries';

@Component({
  selector: 'bz-contact',
  templateUrl: './contact.html'
})
export class ContactComponent {
  @select(getHeader) header: Observable<IHeader>;
  public contact: IContact = defaultContact;

  constructor(
    private contactActions: ContactActions
  ) {}
  public sendMessage = () => {
    this.contactActions.send(this.contact);
  }
}
