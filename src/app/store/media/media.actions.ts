import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../';
import { IItem } from '../main/main';

export const MEDIA = {
  OPEN: 'MEDIA_OPEN',
  CLOSE: 'MEDIA_CLOSE'
};

@Injectable()
export class MediaActions {
  constructor(
    private store: NgRedux<IAppState>
  ) {}

  open = (item: IItem) => {
    this.store.dispatch({
      type: MEDIA.OPEN,
      item
    });
  }

  close = () => {
    this.store.dispatch({
      type: MEDIA.CLOSE
    });
  }
}
