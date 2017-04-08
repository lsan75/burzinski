import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { IHeader, IItem } from '../../store/main/main';
import { getHeader, getData } from '../../store/main/main.queries';

@Component({
  selector: 'bz-main',
  templateUrl: './main.html'
})
export class MainComponent {
  @select(getHeader) header: Observable<IHeader>;
  @select(getData) list: Observable<IItem[]>;
}
