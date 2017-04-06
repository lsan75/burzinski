import { Action } from 'redux';
import { IMain, defaultMain } from './main';

export function mainReducer(state: IMain = defaultMain, action: Action) {

  switch (action.type) {

    default:
      return state;
  }
}
