export class SignUp {
  // Sto
  url = 'http://localhost:3000/register';
  firstNameField = 'input[name=firstName]';
  lastNameField = 'input[name=lastName]';
  addressField = 'input[name=address]';
  emailField = 'input[name=email]';
  phoneField = 'input[name=phoneNumber]';
  passwordField = 'input[name=password]';
  confirmPasswordField = 'input[name=confirmPassword]';
  submitButton = 'button[type=submit]';

  
  visit() {
    cy.visit(this.url);
  }

  enterFirstName(firstname) {
    cy.get(this.firstNameField).type(firstname);
  }

  
  enterLastName(lastname) {
    cy.get(this.lastNameField).type(lastname);
  }


  enterAddress(address) {
    cy.get(this.addressField).type(address);
  }
  enterEmail(email) {
    cy.get(this.emailField).type(email);
  }

  
  enterPhone(phone) {
    cy.get(this.phoneField).type(phone);
  }

  
  enterPassword(password) {
    cy.get(this.passwordField).type(password);
  }


  enterConfirmPassword(confirmpassword) {
    cy.get(this.confirmPasswordField).type(confirmpassword);
  }

  
  register() {
    cy.get(this.submitButton).click();
  }
}
