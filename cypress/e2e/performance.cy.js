
import LoginPage from '../pages/LoginPage';

describe('Performance Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('should measure login time', () => {
    const start = Date.now();
    LoginPage.login('standard_user', 'secret_sauce');
    cy.get('.inventory_list').should('be.visible').then(() => {
      const end = Date.now();
      const duration = end - start;
      cy.writeFile('cypress/results/performance-metrics.json', {
        loginDuration: duration
      }, { flag: 'a+' });
    });
  });
});
