import { AccountSettings } from "../page-objects/accountsettings_page";
import { LoginPage } from "../page-objects/login_page";

const loginpage = new LoginPage

beforeEach(() => {
    loginpage.login('testuser@teebay.com', '123456')
  });

describe('Account Update Tests', () => {

    
    const accountsettings = new AccountSettings()

    it.skip('Should Successfully update account info', () => {

        accountsettings.gotopage();
        accountsettings.enterFirstName("Updated")
        accountsettings.enterLastName("Name")
        accountsettings.enterAddress("Test address not real")
        accountsettings.enterEmail("updatedmail@gmail.com")
        accountsettings.enterPhone("01734532345")
        accountsettings.update()

        cy.get('div[role=alert]').should('have.text','User updated!')


    });

    it('Form is navigatable using tab key', () => {

        accountsettings.gotopage();

        cy.get('input[name=first_name]').focus().tab();
        cy.wait(1000); 

        cy.focused().should('have.attr', 'name', 'last_name'); 
        cy.wait(1000); 

        cy.focused().tab(); 
        cy.focused().should('have.attr', 'name', 'address'); 
        cy.wait(1000); 

        cy.focused().tab(); 
        cy.focused().should('have.attr', 'name', 'email');
        cy.wait(1000); 

        cy.focused().tab(); 
        cy.focused().should('have.attr', 'name', 'phone_number');
        cy.wait(1000); 

        cy.focused().tab();
        cy.focused().should('have.attr', 'type', 'submit'); 
        cy.wait(1000); 

      });


});