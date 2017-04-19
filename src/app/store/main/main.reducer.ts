import { Action } from 'redux';
import { IMain, IItem, defaultMain } from './main';

import { MAIN } from './main.actions';

interface MainAction extends Action {
  list?: IItem[];
}

export function mainReducer(state: IMain = defaultMain, action: MainAction) {

  switch (action.type) {

    case MAIN.DATA_FETCH:
      return Object.assign({}, state, { list: action.list });

    default:
      return state;
  }
}
