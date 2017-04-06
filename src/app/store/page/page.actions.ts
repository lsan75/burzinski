import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';

@Injectable()
export class PageActions {
  constructor(
    private store: NgRedux<IAppState>
  ) {}
}
