import submissionDetailLocators from "../locators/submissionDetailLocators.json"
import 'cypress-file-upload';

describe('Submission Detail', () => {

    before(() => {

        
        Cypress.on('uncaught:exception', (err, runnable) => {
            
            console.error('Uncaught exception:', err.message);

            
            return false;
        });
        

    });

    
    beforeEach(() => {

        cy.UK_LOGIN_MEMBER();

        cy.get(':nth-child(2) > .underlined-animated > span')  
        .invoke('css', 'visibility', 'visible') 
        
        .then(() => {
          
          cy.contains('Your Points History').click({force:true}); 

            cy.get(submissionDetailLocators.editButton ).click();
         });

     })

    

    // it('should display the header banner successfully', () => {

    //   cy.get(submissionDetailLocators.headerBanner).should('be.visible');

    // });

    // it('should display the misi dashboard successfully', () => {

    //   cy.get(submissionDetailLocators.miniDashboard).should('be.visible');

    //   });

    // it('should display the submission stutas successfully', () => {

    //   cy.get(submissionDetailLocators.submissionStatus).should('be.visible');

    //  });

    //  it('should display the invoice detail', () => {

    //     cy.get(submissionDetailLocators.dateSubmittedText).should('be.visible');
    //     cy.get(submissionDetailLocators.submittedDate).should('be.visible');
    //     cy.get(submissionDetailLocators.id).should('be.visible');
    //     cy.get(submissionDetailLocators.invoiceNumberText).should('be.visible');
    //     cy.get(submissionDetailLocators.invoiceNumber).should('be.visible');
    //     cy.get(submissionDetailLocators.invoiceDateText).should('be.visible');
    //     cy.get(submissionDetailLocators.invoiceDate).should('be.visible');
    //     cy.get(submissionDetailLocators.supplierText).should('be.visible');
    //     cy.get(submissionDetailLocators.supplier).should('be.visible');
    //     cy.get(submissionDetailLocators.pointsAwardedText).should('be.visible');
    //     cy.get(submissionDetailLocators.pointsAwarded).should('be.visible');
        
  
    //    });

       
    // it('should display the feedback box', () => {

    //     cy.get(submissionDetailLocators.feedBackBox).should('be.visible');
  
    //    });

    
    // it('should Verify if user is able to change the project quantity values from the dropdown', () => {

    //     cy.get('#question-1').select('3');
  
    //    });
    //    it('should Verify if user is able to answer the questions and Verify if all the corresponding questions are displayed correctly', () => {

    //     cy.get('#question-1').select('3');
    //     cy.wait(500);
    //     cy.get('#answer-11').click();
  
    //    });
    //    it('should Verify if user is able to replace the receipt and Verify the “Choose file” button is working and user can upload invoice', () => {
    //     cy.get('#uploaded_file').attachFile('location-position-icon-1640x2048-6jqx3f7e.png');
  
    //    });
    //    it('should Verify “Submit” button is working and user is able to submit the invoice', () => {
    //     cy.get('#uploaded_file').attachFile('location-position-icon-1640x2048-6jqx3f7e.png');
    //     cy.get('.px-5 > .w-full').click();
    //    });
    //    it('should Verify that user is able to upload multiple invoices', () => {
    //     cy.get('#uploaded_file').attachFile('invoice.jpg');
    //     cy.get('#add-invoice').click();
    //     cy.get('#uploaded_file').attachFile('location-position-icon-1640x2048-6jqx3f7e.png');
    //     cy.get('.px-5 > .w-full').click();
    //    });
    //  it('should Verify that user is able to delete invoice', () => {
    //     cy.get('.item > :nth-child(1) > .text-primary-color').click();
    //    });
       it('should zoom in and out to verify UI', () => {
        // Original viewport size
        const originalWidth = Cypress.config('viewportWidth');
        const originalHeight = Cypress.config('viewportHeight');
    
        // Zoom in by reducing viewport size
        cy.viewport(originalWidth * 0.8, originalHeight * 0.8);
        cy.wait(500);
        // Add assertions or interact with the UI to verify it's not breaking
    
        // Zoom out by increasing viewport size
        cy.viewport(originalWidth, originalHeight);
        // Add assertions or interact with the UI to verify it's not breaking
      });









    afterEach(() => {
    })



})