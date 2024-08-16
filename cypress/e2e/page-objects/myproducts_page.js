export class MyProducts{

    titlefield = 'input[name=title]';
    categoryfield = 'div[name=categories]';
    descriptionfield = 'textarea[name=description]';
    purchasepricefield = 'input[name=purchase_price]';
    rentpricefield = 'input[name=rent_price]';
    rentdurationfield = 'div[name=rent_duration_type]';
    addbutton = 'button[type=submit]';
    furniturecategoryremove = 'a[value=Furniture]'
    outdoorcategoryremove = 'a[value=Outdoor]'
    sportinggoodscategoryremove = 'a[value=Sporting Goods]'
    electronicscategoryremove = 'a[value=Electronics]'
    homeappliancescategoryremove ='a[value=Home Appliances]'
    toyscategoryremove = 'a[value=toys]'


    deleteproduct(prodname){
        cy.contains('div', prodname).siblings('button').click();
        cy.contains('button','Yes, delete').click();
        cy.contains('div', prodname).should('not.exist').then(() => {
            cy.log('The '+ prodname +' product has been successfully deleted.'); 
    });
            
    }

    delete2products(){
        
        cy.get('[data-testid="product-5"] > .sc-jXbUNg > .sc-dhKdcB > .ui').click();
        cy.contains('button','Yes, delete').click();
        cy.wait(1000);
        cy.get('[data-testid="product-6"] > .sc-jXbUNg > .sc-dhKdcB > .ui').click();
        cy.contains('button','Yes, delete').click();

    }

    selectedtoedit(prodname){
        cy.contains('div', prodname).click();
    }

    entertitle(title){
        cy.get(this.titlefield).clear();
        cy.get(this.titlefield).type(title);
    }

    selectcategory(categoryname){
        cy.get(this.categoryfield).click();
        cy.contains('span',categoryname).click();
        cy.get(this.categoryfield).type('{esc}')
    }

    removecategory(categoryname){
        cy.get('a[value='+categoryname+'] .delete').click();
    }

    enterdescription(description){
        cy.get(this.descriptionfield).clear();
        cy.get(this.descriptionfield).type(description);
    }

    enterpurchaseprice(purchaseprice){
        cy.get(this.purchasepricefield).clear();
        cy.get(this.purchasepricefield).type(purchaseprice);
    }

    enterrentprice(rentprice,renttype){
        cy.get(this.rentpricefield).clear();
        cy.get(this.rentpricefield).type(rentprice);
        cy.get(this.rentdurationfield).click();
        cy.contains('span',renttype);
    }

    

    clickadd(){
        cy.get(this.addbutton).click();
    }


}