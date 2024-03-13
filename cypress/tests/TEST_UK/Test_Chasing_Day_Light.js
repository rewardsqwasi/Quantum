import chasingDaylightLocators from "../locators/chasingDaylight.json"


describe('Chasing Daylight', () => {

    before(() => {

        
        Cypress.on('uncaught:exception', (err, runnable) => {
            
            console.error('Uncaught exception:', err.message);

            
            return false;
        });

    });

    beforeEach(() => {
        cy.UK_LOGIN_MEMBER();

        cy.get(':nth-child(3) > .underlined-animated > span')  
        .invoke('css', 'visibility', 'visible') 
        
        .then(() => {
          
          cy.contains('Claim Rewards').click({force:true}); 

          cy.get(chasingDaylightLocators.selectButton).click();
    
        });
  
      })


      it('should display the logo', () => {
        cy.get(chasingDaylightLocators.logo).should('be.visible');

    });

    it('should load the logo successfully', () => {
        cy.get(chasingDaylightLocators.logo).click();


    });

    it('should display main button', () => {
        cy.get(chasingDaylightLocators.main).should('be.visible');

    });

    it('should load the main page successfully', () => {
        cy.get(chasingDaylightLocators.main).click();


    });

    
    it('should display add purchase button', () => {
        cy.get(chasingDaylightLocators.addPurchase).should('be.visible');

    });

    it('should load the add purchase page successfully', () => {
        cy.get(chasingDaylightLocators.addPurchase).click();


    });

    it('should display spend points button', () => {
        cy.get(chasingDaylightLocators.spendPoints).should('be.visible');

    });

    it('should load the spend points page successfully', () => {
        cy.get(chasingDaylightLocators.spendPoints).click();


    });

    it('should display rewards calculator button', () => {
        cy.get(chasingDaylightLocators.rewardsCalculator).should('be.visible');

    });

    it('should load the rewards calculator page successfully', () => {
        cy.get(chasingDaylightLocators.rewardsCalculator).click();


    });

    it('should display dashboard button', () => {
        cy.get(chasingDaylightLocators.dashboard).should('be.visible');

    });

    it('should load the dashboard page successfully', () => {
        cy.get(chasingDaylightLocators.dashboard).click();


    });

    it('should display the banner', () => {
        cy.get(chasingDaylightLocators.banner).should('be.visible');

    });

    it('should display mini dashboard', () => {
        cy.get(chasingDaylightLocators.miniDashboard).should('be.visible');

    });

    it('should display page content', () => {
        cy.get(chasingDaylightLocators.pageContent).should('be.visible');

    });

    
    it('should display number box with plus button ', () => {
        cy.get(chasingDaylightLocators.numberBox).should('be.visible');
        cy.get(chasingDaylightLocators.plusButton).should('be.visible');
        cy.get(chasingDaylightLocators.plusButton).click();

    });

    it('should display number box with minus button ', () => {
        cy.get(chasingDaylightLocators.numberBox).should('be.visible');
        cy.get(chasingDaylightLocators.minusButton).should('be.visible');
        cy.get(chasingDaylightLocators.minusButton).click();

    });

    it('should display claim button ', () => {
        cy.get(chasingDaylightLocators.claim).should('be.visible');

    });

    it('should display cancel button ', () => {
        cy.get(chasingDaylightLocators.cancel).should('be.visible');
        cy.get(chasingDaylightLocators.cancel).click();

    });




    it('should display terms and conditions text', () => {
        cy.get(chasingDaylightLocators.terms).should('be.visible');

    });

    it('should load the terms and conditions page successfully', () => {
        cy.get(chasingDaylightLocators.terms).click();

    });

    it('should display promotional terms text', () => {
        cy.get(chasingDaylightLocators.PromotionalTerms).should('be.visible');

    });

    it('should load the promotional terms page successfully', () => {
        cy.get(chasingDaylightLocators.PromotionalTerms).click();

    });



    it('should display privacy policy text', () => {
        cy.get(chasingDaylightLocators.privacyPolicy).should('be.visible');

    });

    

    it('should load the privacy policy page successfully', () => {
        cy.get(chasingDaylightLocators.privacyPolicy).click();

    });

    it('should display altaterra privacy policy text', () => {
        cy.get(chasingDaylightLocators.altaterraPrivacyPolicy).should('be.visible');

    });

    it('should display contact us text', () => {
        cy.get(chasingDaylightLocators.contactUs).should('be.visible');

    });

    

    it('should load the contact us page successfully', () => {
        cy.get(chasingDaylightLocators.contactUs).click();

    });

    it('should display FAQ text', () => {
        cy.get(chasingDaylightLocators.FAQ).should('be.visible');

    });

    

    it('should load the FAQ page successfully', () => {
        cy.get(chasingDaylightLocators.FAQ).click();

    });



    it('should display earn points text', () => {
        cy.get(chasingDaylightLocators.earnPoints).should('be.visible');

    });

   

    it('should load the earn points page successfully', () => {
        cy.get(chasingDaylightLocators.earnPoints).click();

    });


    it('should display facebook icon', () => {
        cy.get(chasingDaylightLocators.facebook).should('be.visible');

    });

    it('should load the facebook page successfully', () => {
        cy.get(chasingDaylightLocators.facebook).click();


    });

    it('should display twitter icon', () => {
        cy.get(chasingDaylightLocators.twitter).should('be.visible');

    });

    it('should load the twitter page successfully', () => {
        cy.get(chasingDaylightLocators.twitter).click();


    });

    it('should display youtube icon', () => {
        cy.get(chasingDaylightLocators.youtube).should('be.visible');

    });

    it('should load the youtube page successfully', () => {
        cy.get(chasingDaylightLocators.youtube).click();


    });

    it('should display pinterest icon', () => {
        cy.get(chasingDaylightLocators.pinterest).should('be.visible');

    });

    it('should load the pinterest page successfully', () => {
        cy.get(chasingDaylightLocators.pinterest).click();


    });

    it('should display email text', () => {
        cy.get(chasingDaylightLocators.email).should('be.visible');

    });

    it('should load the email page successfully', () => {
        cy.get(chasingDaylightLocators.email).click();


    });















      afterEach(() => {
    })



})