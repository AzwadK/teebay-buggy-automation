import { LoginPage } from "../page-objects/login_page";
import { MyProducts } from "../page-objects/myproducts_page";
import { AddProduct } from "../page-objects/addproduct_page";

const loginpage = new LoginPage;

beforeEach(() => {
    loginpage.login('testuser@teebay.com', '123456');
  });

const myproducts = new MyProducts();
const addproducts = new AddProduct();



it('Delete a product', () => {
    myproducts.deleteproduct("Cricket kit");
});


describe('Add product tests' , () =>{

it('Add a product' , () =>{

    addproducts.navigatetopage();
    addproducts.entertitle('test product');
    addproducts.selectcategory('Outdoor');
    addproducts.enterdescription('Testing testing 123 123');
    addproducts.enterpurchaseprice('1000');
    addproducts.enterrentprice('200','Weekly');
    addproducts.clickadd();
    cy.get('div[role=alert]').should('have.text','New product added!');

});

});

describe('Edit product tests' , () =>{

it('Edit a product', () => {
    myproducts.selectedtoedit("Cricket kit");
    myproducts.entertitle('test updated product');
    myproducts.removecategory("Outdoor");
    myproducts.selectcategory('Outdoor');
    myproducts.enterdescription('Testing testing 123 123 updated');
    myproducts.enterpurchaseprice('12000');
    myproducts.enterrentprice('500','Monthly');
    myproducts.clickadd();
    cy.get('div[role=alert]').should('have.text','Product has been updated!');

    
});

});