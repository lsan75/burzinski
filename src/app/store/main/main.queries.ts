import { IAppState } from '../../store';

export function getData(state: IAppState) {
  return state.mainReducer.list;
}
