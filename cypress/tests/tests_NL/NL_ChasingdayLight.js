


describe('Chasing Daylight', () => {

    before(() => {

        
        Cypress.on('uncaught:exception', (err, runnable) => {
            
            console.error('Uncaught exception:', err.message);

            
            return false;
        });

    });

    beforeEach(() => {
        cy.NL_LOGIN_MEMBER();
    
        cy.get(':nth-child(3) > .underlined-animated > span')  
        .invoke('css', 'visibility', 'visible') 
            
        .then(() => {
              
            cy.contains('Rewards claimen').click({force:true}); 
        
        });

        cy.get(':nth-child(3) > .w-full > .lg\\:mt-9 > .clamp > a > b').click();
  
      })

    it('should display the list view button', () => {
            cy.get('.hidden > .bi').should('be.visible');
    
    });

    it('should items open in list ', () => {
            cy.get('.hidden > .bi').click();

    });

    it('should display gird view', () => {
            cy.get('.tippy-grid > .bi').should('be.visible');
    
    });

    it('should items open in gird', () => {
            cy.get('.tippy-grid > .bi').click();

    });

    
    it('should display the image', () => {
        cy.get(':nth-child(1) > .card-container > .h-\\[190px\\]').should('be.visible');

    });

    it('should display the text', () => {
        cy.get(':nth-child(1) > .card-container > :nth-child(2) > .my-2 > .text-sm').should('be.visible');

    });

    it('should display the check detail button', () => {
        cy.get(':nth-child(1) > .card-container > :nth-child(2) > :nth-child(4) > .btn-effect').should('be.visible');

    });

    it('should open the detail page', () => {
        cy.get(':nth-child(1) > .card-container > :nth-child(2) > :nth-child(4) > .btn-effect').click();

    });

    it('should display the banner image', () => {
        cy.get(':nth-child(1) > .card-container > :nth-child(2) > :nth-child(4) > .btn-effect').click();
        cy.get('.pt-0 > .col-span-12').should('be.visible');

    });

    it('should display the text', () => {  
        cy.get(':nth-child(1) > .card-container > :nth-child(2) > :nth-child(4) > .btn-effect').click();
        cy.get('.bg-\\[\\#F4F0EA\\] > .container > .gap-5 > .md\\:col-span-8 > :nth-child(1)').should('be.visible');

    });


    it('should display the video panel', () => {
        cy.get(':nth-child(1) > .card-container > :nth-child(2) > :nth-child(4) > .btn-effect').click();
        cy.get('.video-container').should('be.visible');

    });
   
    it('should display the minus button', () => {
        cy.get(':nth-child(1) > .card-container > :nth-child(2) > :nth-child(4) > .btn-effect').click();
        cy.get('.decrement-btn').should('be.visible');

    });

    it('should click on minus botton', () => {
        cy.get(':nth-child(1) > .card-container > :nth-child(2) > :nth-child(4) > .btn-effect').click();
        cy.get('.decrement-btn').click();

    });

    it('should display the plus button', () => {
        cy.get(':nth-child(1) > .card-container > :nth-child(2) > :nth-child(4) > .btn-effect').click();
        cy.get('.increment-btn').should('be.visible');

    });

    it('should click on minus botton', () => {
        cy.get(':nth-child(1) > .card-container > :nth-child(2) > :nth-child(4) > .btn-effect').click();
        cy.get('.increment-btn').click();

    });

    it('should display the quantity', () => {
        cy.get(':nth-child(1) > .card-container > :nth-child(2) > :nth-child(4) > .btn-effect').click();
        cy.get('#quantityInput').should('be.visible');

    });

    it('should display the cancel button', () => {
        cy.get(':nth-child(1) > .card-container > :nth-child(2) > :nth-child(4) > .btn-effect').click();
        cy.get('.flex-col-reverse > :nth-child(1) > .w-full').should('be.visible');

    });

    it('should click on cancel botton', () => {
        cy.get(':nth-child(1) > .card-container > :nth-child(2) > :nth-child(4) > .btn-effect').click();
        cy.get('.flex-col-reverse > :nth-child(1) > .w-full').click();

    });

    it('should display the change in button', () => {
        cy.get(':nth-child(1) > .card-container > :nth-child(2) > :nth-child(4) > .btn-effect').click();
        cy.get('#claim').should('be.visible');

    });

    it('should click on change in botton', () => {
        cy.get(':nth-child(1) > .card-container > :nth-child(2) > :nth-child(4) > .btn-effect').click();
        cy.get('#claim').click();

    });

    it('should display the image', () => {
        cy.get(':nth-child(1) > .card-container > :nth-child(2) > :nth-child(4) > .btn-effect').click();
        cy.get('.swiper-slide-visible > div.h-full > .object-cover').should('be.visible');

    });

    it('should display the info panel', () => {
        cy.get(':nth-child(1) > .card-container > :nth-child(2) > :nth-child(4) > .btn-effect').click();
        cy.get('.info-panel-text-columnn-background > .w-full').should('be.visible');

    });

    it('should display the info panel text', () => {
        cy.get(':nth-child(1) > .card-container > :nth-child(2) > :nth-child(4) > .btn-effect').click();
        cy.get('.info-panel-text-color').should('be.visible');

    });

    it('should display the footer', () => {

        cy.get('.py-\\[50px\\]').should('be.visible');
    
    });
    
    it('should load the home page successfully', () => {
    
        cy.get('.text-sm > :nth-child(1) > a').click();
    
    });
    
    it('should load the terms of trade successfully', () => {
    
        cy.get('.text-sm > :nth-child(2) > a').click();
    
    });
    
    it('should load the terms and condition successfully', () => {
    
        cy.get('.text-sm > :nth-child(3) > a').click();
    
    });
    
    it('should load the to ask page successfully', () => {
    
        cy.get('.text-sm > :nth-child(4) > a').click();
    
    });
    
    it('should load the please contact us page successfully', () => {
    
        cy.get('.text-sm > :nth-child(5) > a').click();
    
    });

    















      afterEach(() => {
    })



})