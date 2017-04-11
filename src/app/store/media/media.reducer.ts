import { Action } from 'redux';
import { IItem } from '../main/main';
import { IMedia, defaultMedia } from './media';
import { MEDIA } from './media.actions';

export interface IMediaAction extends Action {
  item: IItem;
}

export function mediaReducer(state: IMedia = defaultMedia, action: IMediaAction) {

  switch (action.type) {
    case MEDIA.OPEN:
      return {
        item: action.item,
        opened: true
      };

    case MEDIA.CLOSE:
      return defaultMedia;

    default:
      return state;
  }
}
