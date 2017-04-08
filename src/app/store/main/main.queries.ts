import { IAppState } from '../../store';

export function getHeader(state: IAppState) {
  return state.mainReducer.header;
}
export function getData(state: IAppState) {
  return state.mainReducer.list;
}
