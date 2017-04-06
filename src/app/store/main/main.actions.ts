import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';

@Injectable()
export class MainActions {
  constructor(
    private store: NgRedux<IAppState>
  ) {}
}
