//  import addPurchaseInvoiceLocators from "../locators/addPurchaseInvoice.json"
import 'cypress-file-upload'

describe('Add Purchase Invoice', () => {

    before(() => {

        
        Cypress.on('uncaught:exception', (err, runnable) => {
            
            console.error('Uncaught exception:', err.message);

            
            return false;
        });
  
        

    });

    beforeEach(() => {

        cy.FR_LOGIN_MEMBER();

        cy.get(':nth-child(2) > .underlined-animated > span')  
    .invoke('css', 'visibility', 'visible') 
    
    .then(() => {
      
      cy.contains('Ajouter une facture').click({force:true}); 
    
    });
    
    cy.get('#question-1').select('1')
    cy.get('#answer-7').click();
    cy.get('#sendFormBtn').click();

  })

      

    it('should upload the invoice without put all requirements', () => {
        cy.get('#uploaded_file').attachFile('images.jpg')
        cy.get('.input-button').click();
        const className = 'dayContainer'; 1
        const xpathExpression = //span[@aria-label='April 25, 2024'];
        cy.xpath(xpathExpression).click();

        cy.get('#finish').should('be.visible');
        cy.get('#finish').click();
    
    
        });

        it('should upload the invoice with put all requirements', () => {
            cy.get('#uploaded_file').attachFile('images.jpg')
            cy.get('.input-button').click();
            const className = 'dayContainer';
            const xpathExpression = //span[@aria-label='April 25, 2024'];
            cy.xpath(xpathExpression).click();

            cy.get('#terms').should('be.visible');
            cy.get('#terms').click();

            // cy.get(addPurchaseInvoiceLocators.cancel).should('be.visible');
            // cy.get(addPurchaseInvoiceLocators.cancel).click();
    
            cy.get('#finish').should('be.visible');
            cy.get('#finish').click();
        
        
            });


        // it('should display contact us banner', () => {
        //     cy.get('.btn-effect').should('be.visible');
        
        // });
    
        // it('should click on contact us button', () => {
        //     cy.get('.btn-effect').click();
    
        // });
    



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

        it('Should test responsiveness on desktop', () => {
  
          cy.viewport(1366, 768); 
    
    
    
          
        //   cy.viewport(1920, 1080); 
          // cy.viewport(2560, 1440); 
  
  
        });



        







      
      afterEach(() => {
    })



})