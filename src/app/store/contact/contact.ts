export interface IContact {
  name: string;
  email: string;
  message: string;
  sent: boolean;
}

export const defaultContact = {
  name: null,
  email: null,
  message: null,
  sent: false
};
