// import finishPurchaseInvoiceLocators from "../locators/finishPurchaseInvoice.json"
import 'cypress-file-upload'

describe('Finish Purchase Invoice', () => {

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

        cy.get('#uploaded_file').attachFile('maxresdefault.jpg')
        cy.get('.input-button').click();
        const className = 'dayContainer';
        const xpathExpression = //span[@aria-label='April 25, 2024'];
        cy.xpath(xpathExpression).click();

            cy.get('#terms').click();
            cy.get('#finish').click();

    })

    it('should display the logo', () => {
        cy.get('.inline').should('be.visible');

    });

    it('should load the logo successfully', () => {
        cy.get('.inline').click();


    });

    it('should display welcome button', () => {
        cy.get('.menu > :nth-child(1) > .flex > span').should('be.visible');

    });

    it('should load the welcome page successfully', () => {
        cy.get('.menu > :nth-child(1) > .flex > span').click();


    });


    it('should display collect points button', () => {
        cy.get(':nth-child(2) > .underlined-animated > span').should('be.visible');

    });

    it('should load the collect points page successfully', () => {
        cy.get(':nth-child(2) > .underlined-animated > span').click();


    });

    it('should display convert my points button', () => {
        cy.get(':nth-child(3) > .underlined-animated > span').should('be.visible');

    });

    it('should load the convert my points page successfully', () => {
        cy.get(':nth-child(3) > .underlined-animated > span').click();


    });

    it('should display status of my project button', () => {
        cy.get('.menu > :nth-child(4) > .flex > span').should('be.visible');

    });

    it('should load the status of my project page successfully', () => {
        cy.get('.menu > :nth-child(4) > .flex > span').click();


    });


    it('should display points calculator button', () => {
        cy.get('.menu > :nth-child(5) > .flex > span').should('be.visible');

    });

    it('should load the points calculator page successfully', () => {
        cy.get('.menu > :nth-child(5) > .flex > span').click();


    });

    it('should display dashboard button', () => {
        cy.get('.menu > :nth-child(6) > .flex > span').should('be.visible');

    });

    it('should load the dashboard page successfully', () => {
        cy.get('.menu > :nth-child(6) > .flex > span').click();


    });

    it('should display mini dashboard', () => {
        cy.get('.swiper-slide-visible > .h-full > a > .object-fill').should('be.visible');

    });


    it('should display the thank you section', () => {
        cy.get('.purchase-completed-section > .flex').should('be.visible');
        cy.scrollTo('bottom')
        for (let i = 0; i < 50; i++) {
            cy.scrollTo(0, i * 100); 
            cy.wait(80);
    }

    });

    it('should display the info text', () => {
        cy.get('.flex > .my-3').should('be.visible');
        cy.scrollTo('bottom')
        for (let i = 0; i < 50; i++) {
            cy.scrollTo(0, i * 100); 
            cy.wait(80);
    }

    });

    it('should display the dashboard text', () => {
        cy.get('.text-xl > .text-primary-color').should('be.visible');
       

    });

    it('should load the dashboard page successfully', () => {
        cy.get('.text-xl > .text-primary-color').click();
        cy.get('.mb-5 > .text-2xl').should('be.visible');
        cy.get('.gap-5 > :nth-child(2) > .text-center').should('be.visible');
        // cy.get(':nth-child(3) > div.justify-center > .text-lg').should('be.visible');
        cy.get(':nth-child(3) > div.justify-center > .text-lg').should('be.visible');
        cy.get('.flex > .text-2xl').should('be.visible');


    });
    
    


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