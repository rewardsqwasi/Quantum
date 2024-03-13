



describe('Elearning', () => {

    before(() => {

        
        Cypress.on('uncaught:exception', (err, runnable) => {
            
            console.error('Uncaught exception:', err.message);

            
            return false;
        });

    });

    beforeEach(() => {
        cy.NL_LOGIN_MEMBER();

        cy.get(':nth-child(2) > .underlined-animated > span')  
        .invoke('css', 'visibility', 'visible') 
        
        .then(() => {
          
          cy.contains('E-learning').click({force:true}); 
    
        });
        cy.get('.grid-cols-12 > :nth-child(1) > :nth-child(1) > .w-full').should('be.visible');
        cy.get('.grid-cols-12 > :nth-child(1) > :nth-child(2) > .w-full > p').should('be.visible');
        cy.get('.bg-\\[\\#ff0000\\]').click();


        
      })

    // it('should display the banner image', () => {
    //     cy.get('.grid-cols-12 > :nth-child(1) > :nth-child(1) > .w-full').should('be.visible');

    // });

    // it('should display the text', () => {
    //     cy.get('.grid-cols-12 > :nth-child(1) > :nth-child(2) > .w-full > p').should('be.visible');

    // });

    // it('should display the start button', () => {
    //     cy.get('.bg-\\[\\#ff0000\\]').should('be.visible');

    // });

    // it('should load the video screen successfully', () => {

    //     cy.get('.bg-\\[\\#ff0000\\]').click();

    // });

    it('should display the video section', () => {
        cy.get('.video-container > .absolute').should('be.visible');

    });

    it('should display the heading of text', () => {

        cy.get('.el-title').should('be.visible');

    });

    it('should display the discription text', () => {

        cy.get('.el-description-paragraph').should('be.visible');

    });

    it('should display the elearning questions', () => {

        cy.get('.container_453 > .py-5').should('be.visible');

    });

    it('should display the next one button', () => {

        cy.get('#submit-btn').should('be.visible');

    });

    it('should load the thankyou screen successfully', () => {

        cy.get('#submit-btn').click();

    });

    it('should display the thankyou text', () => {

        cy.get('.container > .grid > .col-span-12 > .grid-cols-12').should('be.visible');

    });

    it('should display the info panel', () => {

        cy.get('.overlay-gradient').should('be.visible');

    });

    it('should display the footer', () => {

        cy.get('.py-\\[50px\\]').should('be.visible');

    });

    it('should load the home page successfully', () => {

        cy.get('.text-sm > :nth-child(1)').click();

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

    it('should load the please contact ue page successfully', () => {

        cy.get('.text-sm > :nth-child(5) > a').click();

    });






   







      
      afterEach(() => {
    })



})