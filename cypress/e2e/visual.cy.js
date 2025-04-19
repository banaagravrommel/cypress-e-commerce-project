import LoginPage from '../pages/LoginPage'

describe('Visual/UI Assertions', () => {
  it('should display login form elements', () => {
    LoginPage.visit()

    LoginPage.elements.usernameInput().should('be.visible')
    LoginPage.elements.passwordInput().should('be.visible')
    LoginPage.elements.loginButton().should('be.visible')
  })

  it('should display footer and navbar after login', () => {
    LoginPage.visit()
    LoginPage.login('standard_user', 'secret_sauce')

    cy.get('.footer').should('be.visible')

    // More flexible footer check
    cy.get('.footer_copy')
      .should('be.visible')
      .invoke('text')
      .should('include', 'Sauce Labs')

    cy.get('.app_logo').should('be.visible')
    cy.get('.bm-burger-button').should('be.visible')
  })

  it('should show cart icon on inventory page after login', () => {
    LoginPage.visit()
    LoginPage.login('standard_user', 'secret_sauce')

    cy.get('.shopping_cart_link').should('be.visible')
    cy.get('.shopping_cart_badge').should('not.exist') // cart should be empty initially
  })
})
