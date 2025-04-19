
class CartPage {
  cartTitle() {
    return cy.get('.title');
  }

  checkout() {
    cy.get('[data-test="checkout"]').click();
  }
}

export default new CartPage();
