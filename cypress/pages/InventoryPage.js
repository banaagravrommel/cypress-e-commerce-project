
class InventoryPage {
  getProducts() {
    return cy.get('.inventory_item');
  }

  sortBy(value) {
    cy.get('[data-test="product-sort-container"]').select(value);
  }

  getFirstProductName() {
    return cy.get('.inventory_item_name').first();
  }

  getFirstProductPrice() {
    return cy.get('.inventory_item_price').first();
  }

  addItemToCart(index) {
    cy.get('.inventory_item').eq(index).find('button').click();
  }

  removeItemFromCart(index) {
    cy.get('.inventory_item').eq(index).find('button').click();
  }

  getCartBadge() {
    return cy.get('.shopping_cart_badge');
  }

  goToCart() {
    cy.get('.shopping_cart_link').click();
  }
}

export default new InventoryPage();
