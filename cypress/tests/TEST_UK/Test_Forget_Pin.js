import forgotPinLocators from "../locators/forgotPinLocators.json"


describe('Forgot Pin', () => {

    before(() => {

        
        Cypress.on('uncaught:exception', (err, runnable) => {
            
            console.error('Uncaught exception:', err.message);

            
            return false;
        });

    });

    beforeEach(() => {
  
        cy.visit("https://stage.memberportal.velux.qwasi.com/uk/login");

        cy.contains('Forgot your password?').click();
    
      })

      

      it('Enters email into input field', () => {

        cy.get('#email').type('muhammed.bari@quantum-h.com');
        
            cy.get(forgotPinLocators.sendEmail).click();


     });



    it('Enters invalid email into input field', () => {

        cy.get('#email').type('wajih.abbas@quantum-h.com');

        cy.get(forgotPinLocators.sendEmail).click();


    });

    it('Enters valid email into input field', () => {
        cy.get('#email').type('muhammed.bari@quantum-h.com');

        cy.get(forgotPinLocators.sendEmail).click();


    });

    it('Verifies maximum email length', () => {
        
        const maxLength = 50; 
    
        
        const longEmail = 'ajrn'.repeat(maxLength) + '@example.com';
    
        
        cy.get('#email').type(longEmail);

    
        
      });

      it('Should test responsiveness on desktop', () => {

  
        cy.viewport(1366, 768); // Example: Standard laptop resolution
        
        
        
        // You can also simulate other desktop resolutions as needed
        // cy.viewport(1920, 1080); // Example: Full HD resolution
        // cy.viewport(2560, 1440); // Example: 2K resolution
      
      
      });


      
      it('should display facebook icon', () => {
        cy.get(forgotPinLocators.facebook).should('be.visible');

    });

    it('should load the facebook page successfully', () => {
        cy.get(forgotPinLocators.facebook).click();


    });

    it('should display twitter icon', () => {
        cy.get(forgotPinLocators.twitter).should('be.visible');

    });

    it('should load the twitter page successfully', () => {
        cy.get(forgotPinLocators.twitter).click();


    });

    it('should display youtube icon', () => {
        cy.get(forgotPinLocators.youtube).should('be.visible');

    });

    it('should load the youtube page successfully', () => {
        cy.get(forgotPinLocators.youtube).click();


    });

    it('should display pinterest icon', () => {
        cy.get(forgotPinLocators.pinterest).should('be.visible');

    });

    it('should load the pinterest page successfully', () => {
        cy.get(forgotPinLocators.pinterest).click();


    });








    afterEach(() => {
    })



})