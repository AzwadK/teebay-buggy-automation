export class AddProduct{

    
    titlefield = 'input[name=title]';
    categoryfield = 'div[name=categories]';
    descriptionfield = 'textarea[name=description]';
    purchasepricefield = 'input[name=purchase_price]';
    rentpricefield = 'input[name=rent_price]';
    rentdurationfield = 'div[name=rent_duration_type]';
    addbutton = 'button[type=submit]';


    navigatetopage(){
        cy.contains('button','Add Product').click();
    }

    entertitle(title){
        cy.get(this.titlefield).type(title);
    }

    selectcategory(categoryname){
        cy.get(this.categoryfield).click();
        cy.contains('span',categoryname).click();
        cy.get(this.categoryfield).type('{esc}')
    }

    enterdescription(description){
        cy.get(this.descriptionfield).type(description);
    }

    enterpurchaseprice(purchaseprice){
        cy.get(this.purchasepricefield).type(purchaseprice);
    }

    enterrentprice(rentprice,renttype){
        cy.get(this.rentpricefield).type(rentprice);
        cy.get(this.rentdurationfield).click();
        cy.contains('span',renttype).click();
    }

    clickadd(){
        cy.get(this.addbutton).click();
    }



}