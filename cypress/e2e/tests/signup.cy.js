import { SignUp } from "../page-objects/signup_page";

describe('Sign Up Test', () => {
    const signuppage = new SignUp();
  
    it('Succesfull Registration', () => {
      signuppage.visit();

      signuppage.enterfirstname("Test")
      signuppage.enterlastname("User")
      signuppage.enteraddress("test block, springfield, USA")
      signuppage.enteremail("testmail@gmail.com")
      signuppage.enterphone("01893456483")
      signuppage.enterpass("tester123")
      signuppage.enterpassconfirm("tester123")
      signuppage.register()
      
      cy.url().should('include', 'signin');
    });
  });