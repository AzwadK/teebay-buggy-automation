export class LoginPage {
  url = 'http://localhost:3000/';
  usernameField = 'input[name="email"]';
  passwordField = 'input[name="password"]';
  submitButton = 'button[type=submit]';


  visit() {
    cy.visit(this.url);
  }

  enterUsername(username) {
    cy.get(this.usernameField).type(username);
  }


  enterPassword(password) {
    cy.get(this.passwordField).type(password);
  }

  submit() {
    cy.get(this.submitButton).click();
  }

  login(uname,psswrd){
    this.visit()
    this.enterUsername(uname)
    this.enterPassword(psswrd)
    this.submit()
  }
}
