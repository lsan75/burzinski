import { IPage } from '../page/page';

export interface IItem {
  type: string;
  datePub: string;
  img?: string;
  title?: string;
  text?: string;
  page?: IPage;
}

export interface IMain {
  list: IItem[];
}

export const defaultMain = {
  list: []
};
