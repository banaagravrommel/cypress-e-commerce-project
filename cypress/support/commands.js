// cypress/support/commands.js

// Example: Custom command for login
Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
  })
  