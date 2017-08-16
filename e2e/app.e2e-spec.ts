import { SpootiAppPage } from './app.po';

describe('spooti-app App', () => {
  let page: SpootiAppPage;

  beforeEach(() => {
    page = new SpootiAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
