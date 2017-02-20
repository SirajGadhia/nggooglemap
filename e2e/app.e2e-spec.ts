import { NggooglemapsPage } from './app.po';

describe('nggooglemaps App', function() {
  let page: NggooglemapsPage;

  beforeEach(() => {
    page = new NggooglemapsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
