export class BrowseProduct{

    titlefield = 'input[name=title]';
    categoryfield = 'div[name=category]';
    navigationtab = "Browse Products";
    buyfiltercheck = 'Buy Filters';
    rentfiltercheck = 'Rent Filters';
    filterbutton = 'button[type=submit]';
    clearbutton = 'Clear';
    buyrangeminimum = 'input[name=min_buy_range]';
    buyrangemaximum = 'input[name=max_buy_range]';
    rentrangeminimum = 'input[name=min_rent_range]';
    rentrangemaximum = 'input[name=max_rent_range]';
    rentdurationfield = 'div[name=rent_duration_type]';
    product2 = 'div[data-testid=product-5345]'
    viewcount = ''

    selecttab(){
        cy.contains(this.navigationtab).click();
    }

    pressfilter(){
        cy.get(this.filterbutton).click();
    }

    pressclear(){
        cy.contains('button','Clear').click();
    }

    filtertitle(title){
        cy.get(this.titlefield).type(title);
        cy.contains('div', title).should('exist').then(() => {
            cy.log('Test Pass'); 
    });

    }


    filtercategory(categoryname){
        cy.get(this.categoryfield).click();
        cy.contains('span',categoryname).click();
        cy.contains('div', categoryname).should('exist').then(() => {
            cy.log('Test Pass'); 
    });
    }

    filterbuyprice(minprice, maxprice){
        cy.get(this.buyfiltercheck).click();
        cy.get(this.buyrangeminimum).type(minprice);
        cy.get(this.buyrangemaximum).type(maxprice);
        cy.contains('div', minprice , maxprice).should('exist').then(() => {
            cy.log('Test Pass'); 
    });
        
    }

    filterrentprice(minprice, maxprice){
        cy.get(this.rentfiltercheck).click();
        cy.get(this.rentrangeminimum).type(minprice);
        cy.get(this.rentrangemaximum).type(maxprice);
        cy.contains('div', minprice , maxprice).should('exist').then(() => {
            cy.log('Test Pass'); 
    });
    }

    filterrentduration(rentduration){
        cy.get(this.rentdurationfield).click();
        cy.contains('span',rentduration).click();
        cy.contains('div', rentduration).should('exist').then(() => {
            cy.log('Test Pass'); 
    });
    }
    
    selectaproduct(prodname){
        cy.contains('div', prodname).click();
    }

    selectproduct2(){
        cy.get(this.product2).click()
    }

    getproduct2viewcount(){

        let initialViewCount

        cy.get('[data-testid="product-5345"] > .sc-imWYAI > :nth-child(2)')
        .invoke('text')
        .then((text) => {
            initialViewCount = parseInt(text.replace('views', "").trim());
            cy.log(`Initial View Count: ${initialViewCount}`);
        })
        .then(() => {
            this.selectproduct2();

            cy.go(-1); 
        })
        .then(() => {
           
            cy.get('[data-testid="product-5345"] > .sc-imWYAI > :nth-child(2)')
                .invoke('text')
                .then((text) => {
                    const updatedViewCount = parseInt(text.replace('views', "").trim());
                    cy.log(`Updated View Count: ${updatedViewCount}`);
                    expect(updatedViewCount).to.be.greaterThan(initialViewCount);
                });
        });
    }






}