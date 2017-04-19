import { Component, OnInit } from '@angular/core';
import { MainActions } from './store/main/main.actions';

@Component({
  selector: 'bz-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(
    private mainActions: MainActions
  ) {}

  ngOnInit() {
    this.mainActions.fetchData();
  }
}
