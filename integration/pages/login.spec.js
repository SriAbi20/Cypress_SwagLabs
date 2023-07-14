import LoginPage from '../pages/LoginPage';

describe('Login', () => {
  beforeEach(() => {
    LoginPage.visit()
  });
  
  

  it('should log in with valid credentials', () => {
    LoginPage.fillUsername('standard_user');
    LoginPage.fillPassword('secret_sauce');
    LoginPage.submitLogin();

    // Add assertions or further actions after successful login
    // For example:
    // cy.contains('Products').should('be.visible');
  });

  it('should display an error with invalid credentials', () => {
    LoginPage.fillUsername('invalid_user');
    LoginPage.fillPassword('invalid_password');
    LoginPage.submitLogin();

    // Add assertions or further actions after error display
    // For example:
    // cy.get('.error-message-container').should('be.visible');
  });
});
