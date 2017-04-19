import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(
    private http: Http
  ) {}

  public getData = () => {
    return this.http.get('./api/data.json')
      .map(res => res.json());
  }

}
