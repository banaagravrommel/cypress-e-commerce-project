
import LoginPage from '../pages/LoginPage';

describe('Authentication Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    LoginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
  });

  it('should display error for locked out user', () => {
    LoginPage.login('locked_out_user', 'secret_sauce');
    LoginPage.assertErrorMessage('Sorry, this user has been locked out.');
  });

  it('should display error for empty credentials', () => {
    LoginPage.clickLogin();
    LoginPage.assertErrorMessage('Username is required');
  });

  it('should display error for wrong password', () => {
    LoginPage.login('standard_user', 'wrong_password');
    LoginPage.assertErrorMessage('Username and password do not match');
  });
});
