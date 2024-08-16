import {LoginPage} from "../page-objects/login_page"

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  it('Succesfull Login', () => {
    loginPage.visit();
    loginPage.enterUsername('testuser@teebay.com');
    loginPage.enterPassword('123456');
    loginPage.submit();

    
    cy.url().should('include', 'my-products');
  });
});