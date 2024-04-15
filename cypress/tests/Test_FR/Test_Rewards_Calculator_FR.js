describe('Reward Calculator', () => {

    before(() => {

        
        Cypress.on('uncaught:exception', (err, runnable) => {
            
            console.error('Uncaught exception:', err.message);

            
            return false;
        });
        

    });

    
    beforeEach(() => {

        cy.FR_LOGIN_MEMBER();

        cy.get('.menu > :nth-child(4) > .flex > span').click();
     })


     it('should select the quantity of product', () => {

        cy.get('.incrementNumber > .bi').click();
  
      });

      it('should add a new row', () => {

        cy.get('#add-row').click();
  
  
      });

      it('should display the total points', () => {

        cy.get('#productRewardTotal').should('be.visible');
    
    });   

    
    it('should delete a row', () => {

        cy.get('.tippy-remove-rewards-calculator').click();
  
  
      });        

       
    it('should click on upload invoice link', () => {

        cy.get('.py-5 > .btn-effect').click();
  
  
      });     


      it('should display the place holder', () => {

        cy.get('.select2-selection__placeholder').should('be.visible');
    
    });   

    it('should display the default value is 1', () => {

        cy.get(':nth-child(1) > td.w-full > .grid > .order-4 > .flex-none > .w-full').should('have.value', '1')

    
    });   

    it('should verify the contact us button', () => {

        cy.get('.w-full > .btn-effect').click();
  
  
      });     


      it('Should test responsiveness on desktop', () => {
  
        cy.viewport(1366, 768); 
  
  
       
        cy.viewport(1920, 1080); 
        cy.viewport(2560, 1440); 

      });
















     afterEach(() => {
    })



})