import { Injectable } from '@angular/core';
import { IItem } from '../../store/main/main';

@Injectable()
export class DataService {

  public list: IItem[] = [
    {
      type: 'text',
      datePub: 'Fri Apr 07 2017 00:14:27 GMT+0200',
      text: ''
    },
    {
      type: 'video',
      datePub: '',
      img: '',
      title: 'Baroque Panic',
      page: {
        source: '',
        description: [
        ]
      }
    }
  ];

}
