import { BurzinskiPage } from './app.po';

describe('burzinski App', () => {
  let page: BurzinskiPage;

  beforeEach(() => {
    page = new BurzinskiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bz works!');
  });
});
