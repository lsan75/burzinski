import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';

import { DataService } from '../../services/data/data.service';

export const MAIN = {
  DATA_FETCH: 'MAIN_DATA_FETCH'
};

@Injectable()
export class MainActions {
  constructor(
    private store: NgRedux<IAppState>,
    private data: DataService
  ) {}

  fetchData = () => {
    return this.data.getData().subscribe(list => {
      return this.store.dispatch({
        type: MAIN.DATA_FETCH,
        list
      });
    });
  }

}
