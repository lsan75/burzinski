import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { IHeader, IItem } from '../../store/main/main';

@Component({
  selector: 'bz-main',
  templateUrl: './main.html'
})
export class MainComponent {
  @select(state => state.mainReducer.header) header: Observable<IHeader>;
  @select(state => state.mainReducer.data) data: Observable<IItem[]>;
}
