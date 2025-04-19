
import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';

describe('Inventory Page Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('standard_user', 'secret_sauce');
  });

  it('should display all products', () => {
    InventoryPage.getProducts().should('have.length.at.least', 6);
  });

  it('should sort products A to Z', () => {
    InventoryPage.sortBy('az');
    InventoryPage.getFirstProductName().should('contain', 'Sauce Labs Backpack');
  });

  it('should sort products Z to A', () => {
    InventoryPage.sortBy('za');
    InventoryPage.getFirstProductName().should('contain', 'Test.allTheThings() T-Shirt (Red)');
  });

  it('should sort products by price low to high', () => {
    InventoryPage.sortBy('lohi');
    InventoryPage.getFirstProductPrice().should('contain', '$7.99');
  });

  it('should sort products by price high to low', () => {
    InventoryPage.sortBy('hilo');
    InventoryPage.getFirstProductPrice().should('contain', '$49.99');
  });
});
