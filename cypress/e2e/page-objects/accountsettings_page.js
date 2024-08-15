export class AccountSettings{

  firstNameField = 'input[name=first_name]';
  lastNameField = 'input[name=last_name]';
  addressField = 'input[name=address]';
  emailField = 'input[name=email]';
  phoneField = 'input[name=phone_number]';
  submitButton = 'button[type=submit]';
  pagelink = 'Account Settings';

  gotopage() {
    cy.contains(this.pagelink).click();
  }

  enterFirstName(firstname) {
    cy.get(this.firstNameField).clear();
    cy.get(this.firstNameField).type(firstname);
  }

  
  enterLastName(lastname) {
    cy.get(this.lastNameField).clear();
    cy.get(this.lastNameField).type(lastname);
  }


  enterAddress(address) {
    cy.get(this.addressField).clear();
    cy.get(this.addressField).type(address);
  }
  enterEmail(email) {
    cy.get(this.emailField).clear();
    cy.get(this.emailField).type(email);
  }

  
  enterPhone(phone) {
    cy.get(this.phoneField).clear();
    cy.get(this.phoneField).type(phone);
  }

  update(){
    cy.get(this.submitButton).click();
  }


}