import addPurchaseInvoiceLocators from "../../locators/addPurchaseInvoice.json"
 import 'cypress-file-upload'

describe('Add Purchase Invoice', () => {

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
      
      cy.contains('Factuur uploaden').click({force:true}); 
    
    });
    
    cy.get('#question-1').select('1')
    cy.get('#answer-7').click();
    cy.get('#sendFormBtn').click();

  })

      

    it('should upload the invoice without put all requirements', () => {
        cy.get('#uploaded_file').attachFile('invoice.jpg')
        // cy.get(addPurchaseInvoiceLocators.calendar).click();
        // const targetDateXPath = "//span[@aria-label='March 5, 2024']";

        // // Click on the date element using XPath
        // cy.xpath(targetDateXPath).click({ force: true });
        // cy.get('#terms').click();

        cy.get(addPurchaseInvoiceLocators.Finish).should('be.visible');
        cy.get(addPurchaseInvoiceLocators.Finish).click();
    
    
        });

        it('should upload the invoice with put all requirements', () => {
            cy.get('#uploaded_file').attachFile('invoice.jpg')
        //     cy.get(addPurchaseInvoiceLocators.calendar).click();
        //     const targetDateXPath = "//span[@aria-label='March 5, 2024']";

        // // Click on the date element using XPath
        // cy.xpath(targetDateXPath).click({ force: true });
        

        //     cy.get(addPurchaseInvoiceLocators.checkbox).should('be.visible');
        //     cy.get(addPurchaseInvoiceLocators.checkbox).click();

        //     // cy.get(addPurchaseInvoiceLocators.cancel).should('be.visible');
        //     // cy.get(addPurchaseInvoiceLocators.cancel).click();
    
            cy.get(addPurchaseInvoiceLocators.Finish).should('be.visible');
            cy.get(addPurchaseInvoiceLocators.Finish).click();
        
        
            });

        








    //     cy.get('#terms').click();
    //     // cy.get('#cancel').click();
    //     cy.get('#finish').click();
    // });

    
    it('should display terms and conditions text', () => {
        cy.get('.text-sm > :nth-child(3) > a').should('be.visible');

    });

    it('should load the terms and conditions page successfully', () => {
        cy.get('.text-sm > :nth-child(3) > a').click();

    });

    it('should display HomePage', () => {
        cy.get('.text-sm > :nth-child(1)').should('be.visible');

    });

    it('should load the Home Page successfully', () => {
        cy.get('.text-sm > :nth-child(1)').click();

    });



    it('should display Terms and Trade text', () => {
        cy.get('.text-sm > :nth-child(2) > a').should('be.visible');

    });

    

    it('should load the Terms and Trade page successfully', () => {
        cy.get('.text-sm > :nth-child(2) > a').click();

    });

    // it('should display altaterra privacy policy text', () => {
    //     cy.get(addPurchaseInvoiceLocators.altaterraPrivacyPolicy).should('be.visible');

    // });

    it('should display contact us text', () => {
        cy.get('.text-sm > :nth-child(5) > a').should('be.visible');

    });

    

    it('should load the contact us page successfully', () => {
        cy.get('.text-sm > :nth-child(5) > a').click();

    });

    it('should display Ask To text', () => {
        cy.get('.text-sm > :nth-child(4) > a').should('be.visible');

    });

    

    it('should load the Ask To page successfully', () => {
        cy.get('.text-sm > :nth-child(4) > a').click();

    });



    it('should display facebook icon', () => {
        cy.get(addPurchaseInvoiceLocators.facebook).should('be.visible');

    });

    it('should load the facebook page successfully', () => {
        cy.get(addPurchaseInvoiceLocators.facebook).click();


    });

    it('should display twitter icon', () => {
        cy.get(addPurchaseInvoiceLocators.twitter).should('be.visible');

    });

    it('should load the twitter page successfully', () => {
        cy.get(addPurchaseInvoiceLocators.twitter).click();


    });

    it('should display youtube icon', () => {
        cy.get(addPurchaseInvoiceLocators.youtube).should('be.visible');

    });

    it('should load the youtube page successfully', () => {
        cy.get(addPurchaseInvoiceLocators.youtube).click();


    });

    it('should display pinterest icon', () => {
        cy.get(addPurchaseInvoiceLocators.pinterest).should('be.visible');

    });

    it('should load the pinterest page successfully', () => {
        cy.get(addPurchaseInvoiceLocators.pinterest).click();


    });

    it.skip('should display email text', () => {
        cy.get(addPurchaseInvoiceLocators.email).should('be.visible');

    });

    it.skip('should load the email page successfully', () => {
        cy.get(addPurchaseInvoiceLocators.email).click();


    });



        







      
      afterEach(() => {
    })



})