import { WebCalvilloComMxPage } from './app.po';

describe('web-calvillo-com-mx App', function() {
  let page: WebCalvilloComMxPage;

  beforeEach(() => {
    page = new WebCalvilloComMxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
