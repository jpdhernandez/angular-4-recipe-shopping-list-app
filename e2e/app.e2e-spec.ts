import { Ng4RecipeShoppingListAppPage } from './app.po';

describe('ng4-recipe-shopping-list-app App', () => {
  let page: Ng4RecipeShoppingListAppPage;

  beforeEach(() => {
    page = new Ng4RecipeShoppingListAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
