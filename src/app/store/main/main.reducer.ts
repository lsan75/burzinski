import { Action } from 'redux';
import { IMain, IHeader, IItem, defaultMain } from './main';

import { MAIN } from './main.actions';

interface MainAction extends Action {
  header?: IHeader;
  list?: IItem[];
}

export function mainReducer(state: IMain = defaultMain, action: MainAction) {

  switch (action.type) {

    case MAIN.HEADER_FETCH:
      return Object.assign({}, state, { header: action.header });

    case MAIN.DATA_FETCH:
      return Object.assign({}, state, { list: action.list });

    default:
      return state;
  }
}
