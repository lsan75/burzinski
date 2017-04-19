export interface IItem {
  type: string;
  datePub?: string;
  img?: string;
  title?: string;
  text?: string;
  source?: string;
}

export interface IMain {
  list: IItem[];
}

export const defaultMain = {
  list: []
};
