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

        cy.UK_LOGIN_MEMBER();

        cy.get(':nth-child(2) > .underlined-animated > span')  
    .invoke('css', 'visibility', 'visible') 
    
    .then(() => {
      
      cy.contains('Upload Invoice').click({force:true}); 
    
    });
    
    cy.get('#question-1').select('1')
    cy.get('#answer-7').click();
    cy.get('#sendFormBtn').click();

  })

      

    it('should upload the invoice without put all requirements', () => {
        cy.get('#uploaded_file').attachFile('invoice.jpg')
        cy.get(addPurchaseInvoiceLocators.calendar).click();
        const targetDateXPath = "//span[@aria-label='March 5, 2024']";

        // Click on the date element using XPath
        cy.xpath(targetDateXPath).click({ force: true });
        cy.get('#terms').click();

        cy.get(addPurchaseInvoiceLocators.Finish).should('be.visible');
        cy.get(addPurchaseInvoiceLocators.Finish).click();
    
    
        });

        it('should upload the invoice with put all requirements', () => {
            cy.get('#uploaded_file').attachFile('invoice.jpg')
            cy.get(addPurchaseInvoiceLocators.calendar).click();
            const targetDateXPath = "//span[@aria-label='March 5, 2024']";

        // Click on the date element using XPath
        cy.xpath(targetDateXPath).click({ force: true });
        

            cy.get(addPurchaseInvoiceLocators.checkbox).should('be.visible');
            cy.get(addPurchaseInvoiceLocators.checkbox).click();

            // cy.get(addPurchaseInvoiceLocators.cancel).should('be.visible');
            // cy.get(addPurchaseInvoiceLocators.cancel).click();
    
            cy.get(addPurchaseInvoiceLocators.Finish).should('be.visible');
            cy.get(addPurchaseInvoiceLocators.Finish).click();
        
        
            });

        








    //     cy.get('#terms').click();
    //     // cy.get('#cancel').click();
    //     cy.get('#finish').click();
    // });

    
    it('should display terms and conditions text', () => {
        cy.get(addPurchaseInvoiceLocators.terms).should('be.visible');

    });

    it('should load the terms and conditions page successfully', () => {
        cy.get(addPurchaseInvoiceLocators.terms).click();

    });

    it('should display promotional terms text', () => {
        cy.get(addPurchaseInvoiceLocators.PromotionalTerms).should('be.visible');

    });

    it('should load the promotional terms page successfully', () => {
        cy.get(addPurchaseInvoiceLocators.PromotionalTerms).click();

    });



    it('should display privacy policy text', () => {
        cy.get(addPurchaseInvoiceLocators.privacyPolicy).should('be.visible');

    });

    

    it('should load the privacy policy page successfully', () => {
        cy.get(addPurchaseInvoiceLocators.privacyPolicy).click();

    });

    it('should display altaterra privacy policy text', () => {
        cy.get(addPurchaseInvoiceLocators.altaterraPrivacyPolicy).should('be.visible');

    });

    it('should display contact us text', () => {
        cy.get(addPurchaseInvoiceLocators.contactUs).should('be.visible');

    });

    

    it('should load the contact us page successfully', () => {
        cy.get(addPurchaseInvoiceLocators.contactUs).click();

    });

    it('should display FAQ text', () => {
        cy.get(addPurchaseInvoiceLocators.FAQ).should('be.visible');

    });

    

    it('should load the FAQ page successfully', () => {
        cy.get(addPurchaseInvoiceLocators.FAQ).click();

    });



    it('should display earn points text', () => {
        cy.get(addPurchaseInvoiceLocators.earnPoints).should('be.visible');

    });

   

    it('should load the earn points page successfully', () => {
        cy.get(addPurchaseInvoiceLocators.earnPoints).click();

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

    it('should display email text', () => {
        cy.get(addPurchaseInvoiceLocators.email).should('be.visible');

    });

    it('should load the email page successfully', () => {
        cy.get(addPurchaseInvoiceLocators.email).click();


    });



        







      
      afterEach(() => {
    })



})