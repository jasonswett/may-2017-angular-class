import { ContactMePage } from './app.po';

describe('contact-me App', () => {
  let page: ContactMePage;

  beforeEach(() => {
    page = new ContactMePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
