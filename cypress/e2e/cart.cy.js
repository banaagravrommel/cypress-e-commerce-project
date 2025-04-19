
import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';

describe('Cart Functionality Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('standard_user', 'secret_sauce');
  });

  it('should add item to cart and update badge', () => {
    InventoryPage.addItemToCart(0);
    InventoryPage.getCartBadge().should('contain', '1');
  });

  it('should remove item from cart', () => {
    InventoryPage.addItemToCart(0);
    InventoryPage.removeItemFromCart(0);
    InventoryPage.getCartBadge().should('not.exist');
  });

  it('should navigate to cart page', () => {
    InventoryPage.goToCart();
    CartPage.cartTitle().should('contain', 'Your Cart');
  });
});
