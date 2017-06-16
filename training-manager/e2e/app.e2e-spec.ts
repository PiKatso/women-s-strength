import { TrainingManagerPage } from './app.po';

describe('training-manager App', function() {
  let page: TrainingManagerPage;

  beforeEach(() => {
    page = new TrainingManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
