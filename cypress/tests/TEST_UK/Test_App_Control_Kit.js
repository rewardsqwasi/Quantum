import appControlKitLocators from "../../locators/appControlKit.json"

describe('App Control Kit', () => {

   before(() => {

       
       Cypress.on('uncaught:exception', (err, runnable) => {
           
           console.error('Uncaught exception:', err.message);

           
           return false;
       });

       

   });

   beforeEach(() => {

       cy.UK_LOGIN_MEMBER();
       
       cy.visit("https://stage.memberportal.velux.qwasi.com/uk/active-kit");

    })

    
    it('should display the logo', () => {
        cy.get(appControlKitLocators.logo).should('be.visible');

    });

    it('should load the logo successfully', () => {
        cy.get(appControlKitLocators.logo).click();


    });

    it('should display main button', () => {
        cy.get(appControlKitLocators.main).should('be.visible');

    });

    it('should load the main page successfully', () => {
        cy.get(appControlKitLocators.main).click();


    });

    
    it('should display add purchase button', () => {
        cy.get(appControlKitLocators.addPurchase).should('be.visible');

    });

    it('should load the add purchase page successfully', () => {
        cy.get(appControlKitLocators.addPurchase).click();


    });

    it('should display spend points button', () => {
        cy.get(appControlKitLocators.spendPoints).should('be.visible');

    });

    it('should load the spend points page successfully', () => {
        cy.get(appControlKitLocators.spendPoints).click();


    });

    it('should display rewards calculator button', () => {
        cy.get(appControlKitLocators.rewardsCalculator).should('be.visible');

    });

    it('should load the rewards calculator page successfully', () => {
        cy.get(appControlKitLocators.rewardsCalculator).click();


    });

    it('should display dashboard button', () => {
        cy.get(appControlKitLocators.dashboard).should('be.visible');

    });

    it('should load the dashboard page successfully', () => {
        cy.get(appControlKitLocators.dashboard).click();


    });

    it('should display the banner', () => {
        cy.get(appControlKitLocators.banner).should('be.visible');

    });

    it('should display mini dashboard', () => {
        cy.get(appControlKitLocators.miniDashboard).should('be.visible');

    });

    
    it('should display the app control kit table', () => {
        cy.get(appControlKitLocators.date).should('be.visible');
        cy.get(appControlKitLocators.invoiceNumber).should('be.visible');
        cy.get(appControlKitLocators.ref).should('be.visible');
        cy.get(appControlKitLocators.status).should('be.visible');

    });


    it('should display the different ref.number', () => {
        cy.get('.bg-slate-200 > :nth-child(3)').then($column => {
        const columnValues = $column.map((index, element) => Cypress.$(element).text()).get();
  
        
        const allValuesSame = columnValues.every((val, i, arr) => val === arr[0]);
  


    });

    });


    it('should display view delivery detail', () => {
        cy.get(appControlKitLocators.viewDeliveryDetail).should('be.visible');

    });

    it('should load the dashboard page successfully', () => {
        cy.get(appControlKitLocators.viewButton).click();


    });

    it('should display view delivery detail', () => {
        cy.get(appControlKitLocators.claim).should('be.visible');

    });

    it('should load the promo reward page successfully', () => {
        cy.get(appControlKitLocators.claim).click();

        cy.url().should('include', '/uk/promo-reward');



    });

    it('should display my own address options', () => {
        cy.get(appControlKitLocators.claim).click();
        cy.get(appControlKitLocators.sendKitOption1).should('be.visible');

    });
    it('should click my own address options', () => {
        cy.get(appControlKitLocators.claim).click();
        cy.get(appControlKitLocators.sendKitOption1).click();

    });
    it('should display first name text', () => {
        cy.get(appControlKitLocators.claim).click();
        cy.get(appControlKitLocators.firstNameText).should('be.visible');

    });
    it('should display last name text', () => {
        cy.get(appControlKitLocators.claim).click();
        cy.get(appControlKitLocators.lastNameText).should('be.visible');

    });

    it('should display last name field', () => {
        cy.get(appControlKitLocators.claim).click();
        cy.get(appControlKitLocators.lastNameField).should('be.visible');

    });
    it('should display address line 1 text', () => {
        cy.get(appControlKitLocators.claim).click();
        cy.get(appControlKitLocators.addressLine1Text).should('be.visible');

    });
    it('should display address line 1 field', () => {
        cy.get(appControlKitLocators.claim).click();
        cy.get(appControlKitLocators.addressLine1Field).should('be.visible');

    });
    it('should display address line 2 text', () => {
        cy.get(appControlKitLocators.claim).click();
        cy.get(appControlKitLocators.addressLine2Text).should('be.visible');

    });
    it('should display address line 2 field', () => {
        cy.get(appControlKitLocators.claim).click();
        cy.get(appControlKitLocators.addressLine2Field).should('be.visible');

    });
    it('should display post code text', () => {
        cy.get(appControlKitLocators.claim).click();
        cy.get(appControlKitLocators.postCodeText).should('be.visible');

    }); 
    it('should display post code field', () => {
        cy.get(appControlKitLocators.claim).click();
        cy.get(appControlKitLocators.postCodeField).should('be.visible');

    });
    it('should display phone number text', () => {
        cy.get(appControlKitLocators.claim).click();
        cy.get(appControlKitLocators.phoneNumberText).should('be.visible');

    });
    it('should display phone number field', () => {
        cy.get(appControlKitLocators.claim).click();
        cy.get(appControlKitLocators.phoneNumberField).should('be.visible');

    });

    it('should select the different delivery option ', () => {
        cy.get(appControlKitLocators.claim).click();
        cy.get(appControlKitLocators.sendKitOption2).click();
        

    });

    it('should enter the first name ', () => {
        cy.get(appControlKitLocators.claim).click();
        cy.get(appControlKitLocators.sendKitOption2).click();
        cy.get('#firstName').clear();
        const inputText = 'Muhammed!';
        cy.get('#firstName').type(inputText);
        

    });

    it('should enter the last name ', () => {
        cy.get(appControlKitLocators.claim).click();
        cy.get(appControlKitLocators.sendKitOption2).click();
        cy.get('#lastName').clear();
        const inputText = 'Bari!';
        cy.get('#lastName').type(inputText);
        

    });

    it('should enter the mobile number ', () => {
        cy.get(appControlKitLocators.claim).click();
        cy.get(appControlKitLocators.sendKitOption2).click();
        cy.get('#mobile').clear();
        const inputText = '0316 1446391';
        cy.get('#mobile').type(inputText);
        cy.get('#submit').click();
        

    });


    it('should display terms and conditions text', () => {
        cy.get(appControlKitLocators.terms).should('be.visible');

    });

    it('should load the terms and conditions page successfully', () => {
        cy.get(appControlKitLocators.terms).click();

    });

    it('should display promotional terms text', () => {
        cy.get(appControlKitLocators.PromotionalTerms).should('be.visible');

    });

    it('should load the promotional terms page successfully', () => {
        cy.get(appControlKitLocators.PromotionalTerms).click();

    });



    it('should display privacy policy text', () => {
        cy.get(appControlKitLocators.privacyPolicy).should('be.visible');

    });

    

    it('should load the privacy policy page successfully', () => {
        cy.get(appControlKitLocators.privacyPolicy).click();

    });

    it('should display altaterra privacy policy text', () => {
        cy.get(appControlKitLocators.altaterraPrivacyPolicy).should('be.visible');

    });

    it('should display contact us text', () => {
        cy.get(appControlKitLocators.contactUs).should('be.visible');

    });

    

    it('should load the contact us page successfully', () => {
        cy.get(appControlKitLocators.contactUs).click();

    });

    it('should display FAQ text', () => {
        cy.get(appControlKitLocators.FAQ).should('be.visible');

    });

    

    it('should load the FAQ page successfully', () => {
        cy.get(appControlKitLocators.FAQ).click();

    });



    it('should display earn points text', () => {
        cy.get(appControlKitLocators.earnPoints).should('be.visible');

    });

   

    it('should load the earn points page successfully', () => {
        cy.get(appControlKitLocators.earnPoints).click();

    });


    it('should display facebook icon', () => {
        cy.get(appControlKitLocators.facebook).should('be.visible');

    });

    it('should load the facebook page successfully', () => {
        cy.get(appControlKitLocators.facebook).click();


    });

    it('should display twitter icon', () => {
        cy.get(appControlKitLocators.twitter).should('be.visible');

    });

    it('should load the twitter page successfully', () => {
        cy.get(appControlKitLocators.twitter).click();


    });

    it('should display youtube icon', () => {
        cy.get(appControlKitLocators.youtube).should('be.visible');

    });

    it('should load the youtube page successfully', () => {
        cy.get(appControlKitLocators.youtube).click();


    });

    it('should display pinterest icon', () => {
        cy.get(appControlKitLocators.pinterest).should('be.visible');

    });

    it('should load the pinterest page successfully', () => {
        cy.get(appControlKitLocators.pinterest).click();


    });

    it('should display email text', () => {
        cy.get(appControlKitLocators.email).should('be.visible');

    });

    it('should load the email page successfully', () => {
        cy.get(appControlKitLocators.email).click();


    });






    






    



















 afterEach(() => {
})



})