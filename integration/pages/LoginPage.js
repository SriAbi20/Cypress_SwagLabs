class LoginPage {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  fillUsername(username) {
    cy.get('[data-test="username"]').type(username);
  }

  fillPassword(password) {
    cy.get('[data-test="password"]').type(password);
  }

  submitLogin() {
    cy.get('[data-test="login-button"]').click();
  }
}

export default new LoginPage();
