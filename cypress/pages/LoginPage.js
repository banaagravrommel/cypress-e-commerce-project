class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
    loginContainer: () => cy.get('.login_wrapper')
  }

  visit() {
    cy.visit('/')
    this.elements.loginContainer().should('be.visible')
    return this
  }

  typeUsername(username) {
    this.elements.usernameInput().clear().type(username)
    return this
  }

  typePassword(password) {
    this.elements.passwordInput().clear().type(password)
    return this
  }

  clickLogin() {
    this.elements.loginButton().click()
    return this
  }

  login(username, password) {
    this.typeUsername(username)
    this.typePassword(password)
    return this.clickLogin()
  }

  assertErrorMessage(message) {
    this.elements.errorMessage()
      .should('be.visible')
      .and('contain.text', message)
    return this
  }
}

export default new LoginPage()
