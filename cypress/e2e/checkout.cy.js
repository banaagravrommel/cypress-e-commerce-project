
import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Checkout Flow Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('standard_user', 'secret_sauce');
    InventoryPage.addItemToCart(0);
    InventoryPage.goToCart();
    CartPage.checkout();
  });

  it('should require all checkout info', () => {
    CheckoutPage.continue();
    CheckoutPage.getError().should('contain', 'First Name is required');
  });

  it('should complete checkout successfully', () => {
    CheckoutPage.fillInfo('John', 'Doe', '12345');
    CheckoutPage.continue();
    CheckoutPage.finish();
    CheckoutPage.getConfirmation().should('contain', 'Thank you for your order!');
  });
});
