import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IContact } from '../../store/contact/contact';

@Injectable()
export class ContactService {
  constructor(
    private http: Http
  ) {}

  public send = (contact: IContact) => {
    return this.http.post('send.php', { contact });
  }
}
