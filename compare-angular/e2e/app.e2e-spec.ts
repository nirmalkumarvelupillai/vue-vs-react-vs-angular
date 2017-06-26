import { CompareAngularPage } from './app.po';

describe('compare-angular App', () => {
  let page: CompareAngularPage;

  beforeEach(() => {
    page = new CompareAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
