import { AccountSettings } from "../page-objects/accountsettings_page";
import { LoginPage } from "../page-objects/login_page";

const loginpage = new LoginPage

beforeEach(() => {
    loginpage.login('testuser@teebay.com', '123456')
  });

describe('Account Update Tests', () => {

    
    const accountsettings = new AccountSettings()

    it('Should Successfully update account info', () => {

        accountsettings.gotopage();
        accountsettings.enterFirstName("Updated")
        accountsettings.enterLastName("Name")
        accountsettings.enterAddress("Test address not real")
        accountsettings.enterEmail("updatedmail@gmail.com")
        accountsettings.enterPhone("01734532345")
        accountsettings.update()

        cy.get('div[role=alert]').should('have.text','User updated!')


    });


});