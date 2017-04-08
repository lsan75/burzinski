export interface IItem {
  type: string;
  datePub: string;
  img?: string;
  title?: string;
  text?: string;
  source?: string;
}

export interface IHeader {
  img: string;
  title: string;
  subtitle: string;
}

export interface IMain {
  list: IItem[];
  header: IHeader;
}

export const defaultMain = {
  list: [],
  header: {
    img: null,
    title: null,
    subtitle: null
  }
};
