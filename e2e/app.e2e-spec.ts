import { WallaPadelA2SPage } from './app.po';

describe('walla-padel-a2-s App', function() {
  let page: WallaPadelA2SPage;

  beforeEach(() => {
    page = new WallaPadelA2SPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
