import { IAppState } from '../../store';

export function isSent(state: IAppState) {
  return state.contactReducer.sent;
}