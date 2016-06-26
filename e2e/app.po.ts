export class Ng2RecipesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fjr-root h1')).getText();
  }
}
