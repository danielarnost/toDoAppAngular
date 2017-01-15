import { ToDoAppAngularPage } from './app.po';

describe('to-do-app-angular App', function() {
  let page: ToDoAppAngularPage;

  beforeEach(() => {
    page = new ToDoAppAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
