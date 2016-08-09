import { ANGTESTPage } from './app.po';

describe('ang-test App', function() {
  let page: ANGTESTPage;

  beforeEach(() => {
    page = new ANGTESTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
