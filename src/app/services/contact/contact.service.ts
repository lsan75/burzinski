import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class ContactService {
  constructor(
    private http: HttpClient
  ) {}

  public send = contact => {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = {
      email: contact.email,
      subject: '[from burzinski site] ' + contact.subject,
      message: contact.message,
      name: contact.name
    };

    return this.http.post('http://www.burzinskimusic.com/send.php', body, { headers });
  }
}
