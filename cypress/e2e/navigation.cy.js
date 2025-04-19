
import LoginPage from '../pages/LoginPage';

describe('Navigation & Session Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('standard_user', 'secret_sauce');
  });

  it('should logout and restrict access', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.url().should('include', '/');

    cy.visit('/inventory.html', { failOnStatusCode: false });
    cy.url().should('include', '/');
  });
});
