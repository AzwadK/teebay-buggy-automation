import { LoginPage } from "../page-objects/login_page";
import { MyProducts } from "../page-objects/myproducts_page";
import { AddProduct } from "../page-objects/addproduct_page";


const loginpage = new LoginPage;

beforeEach(() => {
    loginpage.login('testuser@teebay.com', '123456');
  });

const myproducts = new MyProducts();
const addproducts = new AddProduct();

describe('Deletion Tests' , () =>{

it.skip('Succesfull product deletion', () => {
    myproducts.deleteproduct("Cricket kit");
});

it('All product deletion', () => {
    myproducts.deleteproduct("Cricket kit");
    myproducts.deleteproduct("iPhone 13 pro max");
    cy.contains('div', 'You do not have any products!').should('exist').then(() => {
        cy.log('All products have been succesfully deleted!');
    })
});
});


const jsondata = require("../fixtures/productData.json");

describe('Product Add Tests' , () =>{

it('Succesfully Adding a product' , () =>{

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





describe('Product Edit Tests' , () =>{

it('Succesfully editing a product', () => {
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

describe('Adding 5 products and deleting 2 ' , () =>{

   
        it(' Adding 5 products and deleting 3rd and 4th ' , function() {

            jsondata.forEach((product) =>{
        
            addproducts.navigatetopage();
            addproducts.entertitle(product.title);
            addproducts.selectcategory(product.category);
            addproducts.enterdescription(product.description);
            addproducts.enterpurchaseprice(product.purchasePrice);
            addproducts.enterrentprice(product.rentPrice.amount, product.rentPrice.frequency);
            addproducts.clickadd();
            cy.get('div[role=alert]').should('have.text','New product added!');
            cy.wait(1000); 
        });
        myproducts.delete2products();
        });


});