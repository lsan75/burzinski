import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Rx';
import { IHeader } from '../../store/main/main';

@Component({
  selector: 'bz-contact',
  templateUrl: './contact.html'
})
export class ContactComponent {
  @select(state => state.mainReducer.header) header: Observable<IHeader>;
  constructor() { }
}
