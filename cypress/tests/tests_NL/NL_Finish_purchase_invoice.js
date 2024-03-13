import finishPurchaseInvoiceLocators from "../../locators/finishPurchaseInvoice.json"
import 'cypress-file-upload'

describe('Finish Purchase Invoice', () => {

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

        cy.get('#uploaded_file').attachFile('invoice.jpg')
        // cy.get('.input-button').click();
        // const className = 'dayContainer';
        // const xpathExpression = //span[@aria-label='February 28, 2024'];
        // cy.xpath(xpathExpression).click();

        //     cy.get('#terms').click();
            cy.get('#finish').click();

    })

    it('should display the logo', () => {
        cy.get(finishPurchaseInvoiceLocators.logo).should('be.visible');

    });

    it('should load the logo successfully', () => {
        cy.get(finishPurchaseInvoiceLocators.logo).click();


    });

    it('should display main button', () => {
        cy.get(finishPurchaseInvoiceLocators.main).should('be.visible');

    });

    it('should load the main page successfully', () => {
        cy.get(finishPurchaseInvoiceLocators.main).click();


    });


    it('should display add purchase button', () => {
        cy.get(finishPurchaseInvoiceLocators.addPurchase).should('be.visible');

    });

    it('should load the add purchase page successfully', () => {
        cy.get(finishPurchaseInvoiceLocators.addPurchase).click();


    });

    it('should display spend points button', () => {
        cy.get(finishPurchaseInvoiceLocators.spendPoints).should('be.visible');

    });

    it('should load the spend points page successfully', () => {
        cy.get(finishPurchaseInvoiceLocators.spendPoints).click();


    });

    it('should display rewards calculator button', () => {
        cy.get(finishPurchaseInvoiceLocators.rewardsCalculator).should('be.visible');

    });

    it('should load the rewards calculator page successfully', () => {
        cy.get(finishPurchaseInvoiceLocators.rewardsCalculator).click();


    });

    it('should display dashboard button', () => {
        cy.get(finishPurchaseInvoiceLocators.dashboard).should('be.visible');

    });

    it('should load the dashboard page successfully', () => {
        cy.get(finishPurchaseInvoiceLocators.dashboard).click();


    });

    it('should display the banner', () => {
        cy.get(finishPurchaseInvoiceLocators.banner).should('be.visible');

    });

    it('should display mini dashboard', () => {
        cy.get(finishPurchaseInvoiceLocators.miniDashboard).should('be.visible');

    });


    it('should display the thank you section', () => {
        cy.get(finishPurchaseInvoiceLocators.thankyouSection).should('be.visible');
        cy.scrollTo('bottom')
        for (let i = 0; i < 50; i++) {
            cy.scrollTo(0, i * 100); 
            cy.wait(80);
    }

    });

    it('should display the info text', () => {
        cy.get(finishPurchaseInvoiceLocators.info).should('be.visible');
        cy.scrollTo('bottom')
        for (let i = 0; i < 50; i++) {
            cy.scrollTo(0, i * 100); 
            cy.wait(80);
    }

    });

    it('should display the dashboard text', () => {
        cy.get(finishPurchaseInvoiceLocators.DashBoard).should('be.visible');
       

    });

    it('should load the dashboard page successfully', () => {
        cy.get(finishPurchaseInvoiceLocators.DashBoard).click();
        cy.get(finishPurchaseInvoiceLocators.incomeSummary).should('be.visible');
        cy.get(finishPurchaseInvoiceLocators.yourPoints).should('be.visible');
        cy.get(finishPurchaseInvoiceLocators.pointsLastYear).should('be.visible');
        cy.get(finishPurchaseInvoiceLocators.pointsThisYear).should('be.visible');
        cy.get(finishPurchaseInvoiceLocators.productSummaryComponent).should('be.visible');


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

    it('should load the please contact us page successfully', () => {

        cy.get('.text-sm > :nth-child(5) > a').click();

    });
    

  



    it('should display facebook icon', () => {
        cy.get(finishPurchaseInvoiceLocators.facebook).should('be.visible');

    });

    it('should load the facebook page successfully', () => {
        cy.get(finishPurchaseInvoiceLocators.facebook).click();


    });

    it('should display twitter icon', () => {
        cy.get(finishPurchaseInvoiceLocators.twitter).should('be.visible');

    });

    it('should load the twitter page successfully', () => {
        cy.get(finishPurchaseInvoiceLocators.twitter).click();


    });

    it('should display youtube icon', () => {
        cy.get(finishPurchaseInvoiceLocators.youtube).should('be.visible');

    });

    it('should load the youtube page successfully', () => {
        cy.get(finishPurchaseInvoiceLocators.youtube).click();


    });

    it('should display pinterest icon', () => {
        cy.get(finishPurchaseInvoiceLocators.pinterest).should('be.visible');

    });

    it('should load the pinterest page successfully', () => {
        cy.get(finishPurchaseInvoiceLocators.pinterest).click();


    });

    // it('should display email text', () => {
    //     cy.get(finishPurchaseInvoiceLocators.email).should('be.visible');

    // });

    // it('should load the email page successfully', () => {
        // cy.get(finishPurchaseInvoiceLocators.email).click();


    // });


    



















 afterEach(() => {
})



})