export class ProductDetails{

    buybutton = '.blue';
    confirmbuybutton = '.actions > .blue';
    rentbutton = '.teal';
    buycancel = '.red';
    bookrentbutton = '.actions > .blue'
    rentstartdate = 'input[name=start_date]';
    rentenddate = 'input[name=end_date]';

    getstatus(){
        cy.contains('Status: ').siblings('div').invoke('text').then((text) => {
            const StoredText = text.trim();
            cy.log(`Stored Text: ${StoredText}`);
            return StoredText;
        }
        )
    }

    getviewcount(){

        cy.get('.sc-hCPjZK > :nth-child(2)')
        .invoke('text')
        .then((text) => {
            const storedview = text.replace('Views:', "");
            cy.log(`Stored Text: ${storedview}`);
            return (storedview);
        });
    }
    

    buyproduct(){
        cy.get(this.buybutton).click();
        cy.get(this.confirmbuybutton).click();
    }

    cancelbuyproduct(){
        cy.get(this.buybutton).click();
        cy.get(this.buycancel).click();
    }

    rentproduct(startdate, enddate){
        cy.get(this.rentbutton).click();
        cy.get(this.rentstartdate).type(startdate);
        cy.get(this.rentenddate).type(enddate);
        cy.get(this.bookrentbutton).click();
    }

    cancelrentproduct(){
        cy.get(this.rentbutton).click();
        cy.get(this.buycancel).click();
    }

    outofstock(){
        cy.contains('div', 'Out of Stock').should('exist').then(() => {
            cy.log('Test Passed'); 
    });
    }

}
