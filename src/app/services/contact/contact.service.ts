import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class ContactService {
  constructor(
    private http: Http
  ) {}

  public send = contact => {
    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const options = new RequestOptions({ headers: headers });
    const body = new URLSearchParams();
    body.set('email', contact.email);
    body.set('subject', 'from burzinski website');
    body.set('message', contact.message);
    body.set('name', contact.name);

    return this.http.post('http://www.untimelytales.com/send.php', body, options);
  }
}
