import { IItem } from '../main/main';

export interface IMedia {
  item: IItem;
  opened: boolean;
};

export const defaultMedia: IMedia = {
  item: {
    type: null
  },
  opened: false
};
