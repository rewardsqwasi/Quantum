import homePageLocators from "../../locators/homePageLocators.json"


describe('Home Page NL', () => {

    before(() => {

        
        Cypress.on('uncaught:exception', (err, runnable) => {
            
            console.error('Uncaught exception:', err.message);

            
            return false;
        });

    });

    beforeEach(() => {
        cy.NL_LOGIN_MEMBER();
    });



    it('should display terms and conditions text', () => {
        cy.get(homePageLocators.terms).should('be.visible');

    });

    it('should handle network errors gracefully', () => {
        try {

            cy.intercept('GET', 'https://memberportal.velux.qwasi.com/nl/terms-and-conditions', {
                statusCode: 500,
                body: 'Server Error',
                headers: { 'content-type': 'text/plain' },
            }).as('termsRequest');


            cy.reload();


            cy.wait(termsRequest);


            cy.contains('Server Error').should('be.visible');
        } catch (error) {

            console.error('Error:', error);


        }
    });

    it('should load the terms and conditions page successfully', () => {
        cy.get(homePageLocators.terms).click();

        cy.url().should('include', '/terms-and-conditions');

    });

    it('should display privacy policy text', () => {
        cy.get(homePageLocators.privacyPolicy).should('be.visible');

    });

    it('should handle network errors gracefully', () => {
        try {

            cy.intercept('GET', 'https://www.velux.co.nl/legal/privacy-policy', {
                statusCode: 500,
                body: 'Server Error',
                headers: { 'content-type': 'text/plain' },
            }).as('termsRequest');


            cy.reload();
            cy.wait(termsRequest);
            cy.contains('Server Error').should('be.visible');

        } catch (error) {
            console.error('Error:', error);
        }
    });

    it('should load the privacy policy page successfully', () => {
        cy.get(homePageLocators.privacyPolicy).click();

        // cy.url().should('include', '/legal/privacy-policy');

    });

    // it('should display altaterra privacy policy text', () => {
    //     cy.get(homePageLocators.altaterraPrivacyPolicy).should('be.visible');

    // });

    // it('should handle network errors gracefully', () => {
    //     try {

    //         cy.intercept('GET', 'https://dakea.co.uk/app/uploads/2022/02/Privacy-Policy.pdf', {
    //             statusCode: 500,
    //             body: 'Server Error',
    //             headers: { 'content-type': 'text/plain' },
    //         }).as('termsRequest');


    //         cy.reload();
    //         cy.wait(termsRequest);
    //         cy.contains('Server Error').should('be.visible');

    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // });

    // it('should load the altaterra privacy policy page successfully', () => {
    //     cy.get(homePageLocators.altaterraPrivacyPolicy).click();

        // cy.url().should('include', '/Privacy-Policy.pdf');

    // });

    it('should display contact us text', () => {
        cy.get(homePageLocators.contactUs).should('be.visible');

    });

    it('should handle network errors gracefully', () => {
        try {

            cy.intercept('GET', 'https://stage.memberportal.velux.qwasi.com/nl/contact', {
                statusCode: 500,
                body: 'Server Error',
                headers: { 'content-type': 'text/plain' },
            }).as('termsRequest');


            cy.reload();
            cy.wait(termsRequest);
            cy.contains('Server Error').should('be.visible');

        } catch (error) {
            console.error('Error:', error);
        }
    });

    it('should load the contact us page successfully', () => {
        cy.get(homePageLocators.contactUs).click();

        cy.url().should('include', '/contact');

    });

    it('should display earn points text', () => {
        cy.get(homePageLocators.earnPoints).should('be.visible');

    });

    it('should handle network errors gracefully', () => {
        try {

            cy.intercept('GET', 'https://stage.memberportal.velux.qwasi.com/nl/how-to-earn-points', {
                statusCode: 500,
                body: 'Server Error',
                headers: { 'content-type': 'text/plain' },
            }).as('termsRequest');


            cy.reload();
            cy.wait(termsRequest);
            cy.contains('Server Error').should('be.visible');

        } catch (error) {
            console.error('Error:', error);
        }
    });

    it('should load the earn points page successfully', () => {
        cy.get(homePageLocators.earnPoints).click();

        cy.url().should('include', '/how-to-earn-points');

    });

    it('should display mini dashboard', () => {
        cy.get(homePageLocators.miniDashboard).should('be.visible');

    });

    it('should load the mini dashboard page successfully', () => {
        cy.get(homePageLocators.miniDashboard).click();


    });

    it('should display spend points text', () => {
        cy.get(homePageLocators.spendPoints).should('be.visible');

    });

    it('should load the spend points page successfully', () => {
        cy.get(homePageLocators.spendPoints).click();


    });

    it('should display rewards calculator text', () => {
        cy.get(homePageLocators.rewardsCalculator).should('be.visible');

    });

    it('should load the rewards calculator page successfully', () => {
        cy.get(homePageLocators.rewardsCalculator).click();


    });

    it('should display facebook icon', () => {
        cy.get(homePageLocators.facebook).should('be.visible');

    });

    it('should load the facebook page successfully', () => {
        cy.get(homePageLocators.facebook).click();


    });

    it('should display twitter icon', () => {
        cy.get(homePageLocators.facebook).should('be.visible');

    });

    it('should load the twitter page successfully', () => {
        cy.get(homePageLocators.twitter).click();


    });

    it('should display youtube icon', () => {
        cy.get(homePageLocators.facebook).should('be.visible');

    });

    it('should load the youtube page successfully', () => {
        cy.get(homePageLocators.youtube).click();


    });

    it('should display pinterest icon', () => {
        cy.get(homePageLocators.pinterest).should('be.visible');

    });

    it('should load the pinterest page successfully', () => {
        cy.get(homePageLocators.pinterest).click();


    });

    it('should display email text', () => {
        cy.get(homePageLocators.email).should('be.visible');

    });

    it('should load the email page successfully', () => {
        cy.get(homePageLocators.email).click();


    });

    it('should display carousel text', () => {
        cy.get(homePageLocators.giftCards).should('be.visible');

    });

    it('should load the carousel item page successfully', () => {
        cy.get(homePageLocators.giftCards).click();


    });



    it('should load the upload invoice page successfully', () => {

        cy.get(':nth-child(2) > .underlined-animated > span')  
    .invoke('css', 'visibility', 'visible') 
    
    .then(() => {
      
      cy.contains('Upload Invoice').click({force:true}); 

    });
    

    });


    
    it('should load the Your Points History page successfully', () => {

        cy.get(':nth-child(2) > .underlined-animated > span')  
    .invoke('css', 'visibility', 'visible') 
    
    .then(() => {
      
      cy.contains('Your Points History').click({force:true}); 

    });
    

    });



    it('should load the Training Points page successfully', () => {

        cy.get(':nth-child(2) > .underlined-animated > span')  
    .invoke('css', 'visibility', 'visible') 
    
    .then(() => {
      
      cy.contains('Training Points').click({force:true}); 

    });
    

    });

    it('should load the Claim Rewards page successfully', () => {

        cy.get(':nth-child(3) > .underlined-animated > span')  
    .invoke('css', 'visibility', 'visible') 
    
    .then(() => {
      
      cy.contains('Claim Rewards').click({force:true}); 

    });
    

    });

    it('should load the Rewards History page successfully', () => {

        cy.get(':nth-child(3) > .underlined-animated > span')  
    .invoke('css', 'visibility', 'visible') 
    
    .then(() => {
      
      cy.contains('Rewards History').click({force:true}); 

    });
    

    });
    

    it('should load the Order History page successfully', () => {

        cy.get(':nth-child(3) > .underlined-animated > span')  
    .invoke('css', 'visibility', 'visible') 
    
    .then(() => {
      
      cy.contains('Order History').click({force:true}); 

    });
    

    });






    afterEach(() => {

    });
})