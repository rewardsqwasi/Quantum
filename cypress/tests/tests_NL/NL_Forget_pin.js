describe('Forgot Pin', () => {

    before(() => {

        
        Cypress.on('uncaught:exception', (err, runnable) => {
            
            console.error('Uncaught exception:', err.message);

            
            return false;
        });

    });

    beforeEach(() => {
  
        cy.visit("https://stage.memberportal.velux.qwasi.com/nl/login");

        cy.get('[href="https://stage.memberportal.velux.qwasi.com/nl/forget-pin"]').click();
    
      })

      

      it('Enters email into input field', () => {

        cy.get('#email').type('muhammed.bari@quantum-h.com');
        
            cy.get('#submit').click();


     });



    it('Enters invalid email into input field', () => {

        cy.get('#email').type('wajih.abbas@quantum-h.com');

        cy.get('#submit').click();


    });

    it('Enters valid email into input field', () => {
        cy.get('#email').type('muhammed.bari@quantum-h.com');

        cy.get('#submit').click();


    });

    it('Verifies maximum email length', () => {
        
        const maxLength = 50; 
    
        
        const longEmail = 'ajrn'.repeat(maxLength) + '@example.com';
    
        
        cy.get('#email').type(longEmail);

    
        
      });

      it('Should test responsiveness on desktop', () => {

  
        cy.viewport(1366, 768); 
        
        
        
        
        // cy.viewport(1920, 1080); 
        // cy.viewport(2560, 1440); 
      
      
      });


      
   
      it('should display the footer', () => {

        cy.get('footer').should('be.visible');
    
    });
    
    it('should load the home page successfully', () => {
    
        cy.get(':nth-child(2) > ul > :nth-child(1) > a > span').click();
    
    });
    
    it('should load the general terms and condition successfully', () => {
    
        cy.get(':nth-child(2) > ul > :nth-child(2) > a > span').click();
    
    });
    
    it('should load the contact us successfully', () => {
    
        cy.get(':nth-child(2) > ul > :nth-child(3) > a > span').click();
    
    });
    
    it('should load the facebook page successfully', () => {
    
        cy.get('.facebook').click();
    
    });
    
    it('should load the youtube page successfully', () => {
    
        cy.get('.youtube').click();
    
    });

    it('should load the instagram page successfully', () => {
    
        cy.get('.instagram').click();
    
    });

    it('should load the pinterest page successfully', () => {
    
        cy.get('.pinterest').click();
    
    });








    afterEach(() => {
    })



})