import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(
    private http: Http
  ) {}

  public getHeader = () => {
    return this.http.get('./api/header.json')
      .map(res => res.json());
  };

  public getData = () => {
    return this.http.get('./api/data.json')
      .map(res => res.json());
  };

}
