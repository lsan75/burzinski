/*
 * Testing DataService
 */

import { TestBed, async, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions, RequestMethod, ConnectionBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { DataService } from './data.service';

describe('DataService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        ConnectionBackend,
        {provide: Http, useFactory: (backend, options) => new Http(backend, options),
          deps: [ MockBackend, BaseRequestOptions ]},
        DataService
      ]
    });
  });

  it('should enter the assertion', inject(
    [ MockBackend, DataService ],
    ( backend: MockBackend, s: DataService ) => {
      const urls = [
        './api/header.json',
        './api/data.json'
      ];

      backend.connections.subscribe((connection: MockConnection) => {
        const req = connection.request;
        const headerResponse: Response = new Response(new ResponseOptions({
          body: {header: 'header'}
        }));
        const dataResponse: Response = new Response(new ResponseOptions({
          body: {data: 'data'}
        }));
        urls.push(req.url);

        if (req.method === RequestMethod.Get && req.url === './api/header.json') {
          connection.mockRespond(headerResponse);
        }
        if (req.method === RequestMethod.Get && req.url === './api/data.json') {
          connection.mockRespond(dataResponse);
        }
      });

      s.getData().subscribe(res => {
        expect(res).toEqual({data: 'data'});
      });
      s.getHeader().subscribe(res => {
        expect(res).toEqual({header: 'header'});
      });

    })
  );
});
