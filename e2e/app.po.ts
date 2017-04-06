import { browser, element, by } from 'protractor';

export class BurzinskiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bz-root h1')).getText();
  }
}
