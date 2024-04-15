describe('Home Page', () => {

    before(() => {

        
        Cypress.on('uncaught:exception', (err, runnable) => {
            
            console.error('Uncaught exception:', err.message);

            
            return false;
        });

    });

    beforeEach(() => {
        cy.NL_LOGIN_MEMBER();
    })



    it('should load the upload invoice page successfully', () => {

        cy.get(':nth-child(2) > .underlined-animated > span')  
    .invoke('css', 'visibility', 'visible') 
    
    .then(() => {
      
      cy.contains('Factuur uploaden').click({force:true}); 

    });
    

    });


    
    it('should load the Your Points History page successfully', () => {

        cy.get(':nth-child(2) > .underlined-animated > span')  
    .invoke('css', 'visibility', 'visible') 
    
    .then(() => {
      
      cy.contains('Jouw puntengeschiedenis').click({force:true}); 

      

    });

});
    
    

 it('should load the Training Points page successfully', () => {

        cy.get(':nth-child(2) > .underlined-animated > span')  
    .invoke('css', 'visibility', 'visible') 
    
    .then(() => {
      
      cy.contains('Trainingspunten').click({force:true}); 

    });
    

    });

    it('should load the Claim Rewards page successfully', () => {

        cy.get(':nth-child(2) > .underlined-animated > span')  
        .invoke('css', 'visibility', 'visible') 
        
        .then(() => {
          
          cy.contains('E-learning').click({force:true}); 
    
        });
    

    });

    it('should load the Rewards History page successfully', () => {

        cy.get(':nth-child(3) > .underlined-animated > span')  
        .invoke('css', 'visibility', 'visible') 
            
        .then(() => {
              
            cy.contains('Rewards claimen').click({force:true}); 
        
        });
    

    });
    

    it('should load the Rewards History page successfully', () => {

        cy.get(':nth-child(3) > .underlined-animated > span')  
    .invoke('css', 'visibility', 'visible') 
    
    .then(() => {
      
      cy.contains('Rewards historie').click({force:true}); 

    });
    

    });

    it('should items open in the reward calculator ', () => {
        cy.get('.menu > :nth-child(4) > .flex > span').click();

    });

    it('should items open the dashboard ', () => {
        cy.get('.menu > :nth-child(5) > .flex > span').click();

    });

    it('should display the mini dashboard', () => {
        cy.get('.swiper-slide-visible > .h-full > a > .object-fill').should('be.visible');

    });

    it('should click on mini dashboard ', () => {
            cy.get('.swiper-slide-visible > .h-full > a > .object-fill').click();

    });    

    it('should display the banner', () => {
        cy.get('.swiper-slide-visible > .bg-\\[\\#B71C1C\\]').should('be.visible');

    });          


    it('should display earn points container', () => {
        cy.get('.information-section > .grid > :nth-child(1) > .flex').should('be.visible');

    });

    it('should click on earn points container', () => {
            cy.get('.information-section > .grid > :nth-child(1) > .flex').click();

    });    

    it('should display spend points container', () => {
        cy.get('.information-section > .grid > :nth-child(2) > .flex').should('be.visible');

    });

    it('should click on spend points container', () => {
            cy.get('.information-section > .grid > :nth-child(2) > .flex').click();

    });    

    it('should display rewards calculator container', () => {
        cy.get('.information-section > .grid > :nth-child(3) > .flex').should('be.visible');

    });

    it('should click on rewards calculator container', () => {
            cy.get('.information-section > .grid > :nth-child(3) > .flex').click();

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

    it('should load the email page successfully', () => {
    
        cy.get(':nth-child(1) > .break-all').click();
    
    });


    it('should load the facebook page successfully', () => {
    
        cy.get(':nth-child(1) > .h-8 > .flex').click();
    
    });

    it('should load the youtube page successfully', () => {
    
        cy.get(':nth-child(3) > .h-8 > .flex').click();
    
    });

    it('should load the pinterest page successfully', () => {
    
        cy.get(':nth-child(5) > .h-8 > .flex').click();
    
    });

    it('should load the instagram page successfully', () => {
    
        cy.get(':nth-child(4) > .h-8 > .flex').click();
    
    });














    afterEach(() => {

    });
})