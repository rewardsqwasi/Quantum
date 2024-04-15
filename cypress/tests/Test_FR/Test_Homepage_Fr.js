describe('Home Page', () => {

    before(() => {

        
        Cypress.on('uncaught:exception', (err, runnable) => {
            
            console.error('Uncaught exception:', err.message);

            
            return false;
        });

    });

    beforeEach(() => {
        cy.FR_LOGIN_MEMBER();
    })



    it('should click on VELUX logo', () => {

        cy.get('.inline').click(); 
    

    });

    it('should click on welome link', () => {

        cy.get('.active > .flex > span').click(); 
    

    });



    
    it('should load the Add an invoice page successfully', () => {

        cy.get(':nth-child(2) > .underlined-animated > span')  
    .invoke('css', 'visibility', 'visible') 
    
    .then(() => {
      
      cy.contains('Ajouter une facture').click({force:true}); 

      

    });

});
    
    

 it('should load the history of your invoices page successfully', () => {

        cy.get(':nth-child(2) > .underlined-animated > span')  
    .invoke('css', 'visibility', 'visible') 
    
    .then(() => {
      
      cy.contains('Historique de vos factures').click({force:true}); 

    });
    

    });

    it('should load the Convert my points page successfully', () => {

        cy.get(':nth-child(3) > .underlined-animated > span')  
        .invoke('css', 'visibility', 'visible') 
        
        .then(() => {
          
          cy.contains('Convertir mes points').click({force:true}); 
    
        });
    

    });

    it('should load the Points history page successfully', () => {

        cy.get(':nth-child(3) > .underlined-animated > span')  
        .invoke('css', 'visibility', 'visible') 
            
        .then(() => {
              
            cy.contains('Historique des points').click({force:true}); 
        
        });
    

    });
    

    it('should load the Status of my projects page successfully', () => {

        cy.get('.menu > :nth-child(4) > .flex > span').click();
    

    });

    it('should load the Points calculator page successfully', () => {
        cy.get('.menu > :nth-child(5) > .flex > span').click();

    });

    it('should load the Dashboard page successfully', () => {
        cy.get('.menu > :nth-child(6) > .flex > span').click();

    });

    it('should load the cart page successfully', () => {
        cy.get('.flex > .fa').click();

    });

    it('should display the mini dashboard', () => {
        cy.get('.swiper-slide-visible > .h-full > a > .object-fill').should('be.visible');

    });

    it('should click on mini dashboard ', () => {
            cy.get('.swiper-slide-visible > .h-full > a > .object-fill').click();

    });           


    it('should display collect points container', () => {
        cy.get('.information-section > .grid > :nth-child(1) > .flex').should('be.visible');

    });

    it('should click on collect points container', () => {
            cy.get('.information-section > .grid > :nth-child(1) > .flex').click();

    });    

    it('should display convert my points container', () => {
        cy.get('.information-section > .grid > :nth-child(2) > .flex').should('be.visible');

    });

    it('should click on spend points container', () => {
            cy.get('.information-section > .grid > :nth-child(2) > .flex').click();

    });    

    it('should display points calculator container', () => {
        cy.get('.information-section > .grid > :nth-child(3) > .flex').should('be.visible');

    });

    it('should click on points calculator container', () => {
            cy.get('.information-section > .grid > :nth-child(3) > .flex').click();

    });   
    
    
    it('should display shop container', () => {
        cy.get('.top-0 > .p-5').should('be.visible');

    });

    it('should click on shop container', () => {
        cy.get('.top-0 > .p-5').click();

    });   


    it('should display partners container', () => {
        cy.get('[aria-label="3 / 5"] > .card-container > a > .h-\\[218px\\]').should('be.visible');

    });

    it('should click on partners container', () => {
            cy.get('[aria-label="3 / 5"] > .card-container > a > .h-\\[218px\\]').click();

    });   

    it('should display the info panel', () => {
        cy.get('.info-panel-text-columnn-background > .w-full').should('be.visible');

    });

    it('should display the info panel text', () => {
        cy.get('.info-panel-text-color').should('be.visible');

    });

    it('should display the footer', () => {

        cy.get('.py-\\[50px\\]').should('be.visible');
    
    });
    
    it('should load the welcome page successfully', () => {
    
        cy.get('.text-sm > :nth-child(1) > a').click();
    
    });
    
    it('should load the terms of service successfully', () => {
    
        cy.get('.text-sm > :nth-child(2) > a').click();
    
    });
    
    it('should load the privacy policy successfully', () => {
    
        cy.get('.text-sm > :nth-child(3) > a').click();
    
    });
    
    it('should load the FAQs page successfully', () => {
    
        cy.get('.text-sm > :nth-child(4) > a').click();
    
    });
    
    it('should load the contact us page successfully', () => {
    
        cy.get('.text-sm > :nth-child(5) > a').click();
    
    });


    it('should load the facebook page successfully', () => {
    
        cy.get(':nth-child(1) > .h-8 > .flex').click();
    
    });

    it('should load the youtube page successfully', () => {
    
        cy.get(':nth-child(3) > .h-8 > .flex').click();
    
    });

    it('should load the pinterest page successfully', () => {
    
        cy.get(':nth-child(4) > .h-8 > .flex').click();
    
    });













    afterEach(() => {

    });
})