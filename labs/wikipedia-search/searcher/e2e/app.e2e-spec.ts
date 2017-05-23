import { SearcherPage } from './app.po';

describe('searcher App', () => {
  let page: SearcherPage;

  beforeEach(() => {
    page = new SearcherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
