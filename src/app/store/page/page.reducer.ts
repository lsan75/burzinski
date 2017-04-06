import { Action } from 'redux';
import { IPage, defaultPage } from './page';

export function pageReducer(state: IPage = defaultPage, action: Action) {

  switch (action.type) {

    default:
      return state;
  }
}
