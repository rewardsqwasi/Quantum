import homePageLocators from "../locators/homePageLocators.json";
import dashboardLocators from "../locators/dashboardLocators.json";
import claimRewardsLocators from "../locators/claimRewardsLocators.json";
import basketLocators from "../locators/basketLocators.json";
import addPurchaseInvoiceLocators from "../locators/addPurchaseInvoice.json"
 import 'cypress-file-upload'


describe("Contact Us", () => {
    before(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        console.error("Uncaught Exception:", err.message);
  
        return false;
      });
    });
    beforeEach(() => {
        cy.UK_LOGIN_MEMBER();
    });

    // it('should load the Dashboard page successfully', () => {
    //     cy.get(dashboardLocators.dashboard).click();


    // });
    
    // it('should Verify the banner is displaying.', () => {
    //     cy.get(dashboardLocators.dashboard).click();
    //     cy.get('.banners-section').should('be.visible');
    // });
    // it('should Verify the mini dashboard is displaying..', () => {
    //     cy.get(dashboardLocators.dashboard).click();
    //     cy.get('.swiper-slide-visible > .bg-\\[\\#B71C1C\\]').should('be.visible');
    // });
    // it('should Verify that the current points are displayed correctly', () => {
    //     cy.get(dashboardLocators.dashboard).click();
    //     cy.get('.gap-5 > :nth-child(2) > :nth-child(2) > :nth-child(1)').should('be.visible');
    // });
    // it('should Verify that the total points earned are displayed correctly', () => {
    //     cy.get(dashboardLocators.dashboard).click();
    //     cy.get(':nth-child(2) > :nth-child(2) > .my-3').should('be.visible');
    // });
    // it('should Verify that the total points spent are displayed correctly', () => {
    //     cy.get(dashboardLocators.dashboard).click();
    //     cy.get('.gap-5 > :nth-child(2) > :nth-child(2) > :nth-child(3)').should('be.visible');
    // });
    // it('should Verify that the current points value is updated correctly when points are earned', () => {
    //     cy.get(dashboardLocators.dashboard).click();
    //     cy.get('.gap-5 > :nth-child(2) > :nth-child(2) > :nth-child(1)').should('be.visible');
    //     cy.get(':nth-child(2) > .underlined-animated > span')  
    //     .invoke('css', 'visibility', 'visible') 
        
    //     .then(() => {
          
    //       cy.contains('Upload Invoice').click({force:true}); 
        
    //     });
        
    //     cy.get('#question-1').select('1')
    //     cy.get('#answer-7').click();
    //     cy.get('#sendFormBtn').click();
    //     cy.get('#uploaded_file').attachFile('location-position-icon-1640x2048-6jqx3f7e.png');
    //     cy.get(addPurchaseInvoiceLocators.calendar).click();
    //     const targetDateXPath = "//span[@aria-label='March 5, 2024']";

    //     // Click on the date element using XPath
    //     cy.xpath(targetDateXPath).click({ force: true });
    //     cy.get('#terms').click();
    //     cy.get(addPurchaseInvoiceLocators.Finish).should('be.visible');
    //     cy.get(addPurchaseInvoiceLocators.Finish).click();
        
    //   });
      it('should Verify that the current points value is updated correctly when points are earned', () => {
        cy.UK_LOGIN_Admin();
        cy.get('#left > :nth-child(2) > :nth-child(3) > :nth-child(1)').click();
        cy.get(':nth-child(4) > select').select('Email');
        cy.get(':nth-child(5) > .pull-left').clear().type('wajih.abbas@quantum-h.com');
        cy.get('[name="submit"]').click();
        cy.get(':nth-child(1) > :nth-child(22) > .view-submission').click();
        cy.get('#btn-invoice-details > .nav-link').click();

        // Click on the input field to open the date picker
        cy.get('#orderDate').click();
        cy.get('tbody > tr > td > .input-group > #orderDate').click()
 
        cy.get('.datepicker-days > .table-condensed > tbody > tr:nth-child(4) > .day:nth-child(4)').click()

        cy.get('#submission-details > form > #tab-content-details > #invoice-tab > .bg-secondary').click()
        cy.get('#campaignCode').select('White Painted');
        cy.get('#product_type').select('GEL');
        cy.get('#product_size').select('M08');
        cy.get('#product_variant').select('2065G');
        cy.get('#quantity').select('2');
        cy.get('#addBasket').click();
        cy.wait(1000);
        cy.get('#approve').click();


      });
      it('should should Verify that the current points value is updated correctly when points are earned', () => {
         cy.get(dashboardLocators.dashboard).click();
            cy.get('.gap-5 > :nth-child(2) > :nth-child(2) > :nth-child(3)').should('be.visible');
            cy.scrollTo('bottom')
        for (let i = 0; i < 50; i++) {
            cy.scrollTo(0, i * 100); 
            cy.wait(80);}
         });
    // it('should Verify that the current points value is updated correctly when points are spent', () => {
    //     cy.get(dashboardLocators.dashboard).click();
    //     cy.get('.gap-5 > :nth-child(2) > :nth-child(2) > :nth-child(1)').should('be.visible');
    //     cy.get(':nth-child(3) > .underlined-animated > .bi')
    //     .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    //     .then(() => {
    //       // Once the parent element is made visible, interact with the hidden element
    //       cy.contains('Claim Rewards').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
    //     });
    //     cy.get(claimRewardsLocators.rewardShop).click();
    //     cy.get(claimRewardsLocators.productSelect4).click();
    //     cy.get(claimRewardsLocators.basketBtn).click();
    //     cy.get(basketLocators.basketBtnHome).click();
    //     cy.get('#terms-input').check();
    //     cy.get(basketLocators.completeOrderBtn).click();
    //     cy.wait(500);
    //     cy.get('.active > .flex > span').click();
    //     cy.get('.gap-5 > :nth-child(2) > :nth-child(2) > :nth-child(1)').should('be.visible');
    //   });
      // it('should Verify that the current points value is updated correctly when points are spent', () => {
      //   cy.get(dashboardLocators.dashboard).click();
      //   cy.get('.gap-5 > :nth-child(2) > :nth-child(2) > :nth-child(1)').should('be.visible');
      //   cy.scrollTo('bottom')
      //   for (let i = 0; i < 50; i++) {
      //       cy.scrollTo(0, i * 100); 
      //       cy.wait(80);}
      // });
    // it('should Verify that the total points earned value is updated correctly when points are earned', () => {
    //     cy.get(dashboardLocators.dashboard).click();
    //     cy.get(':nth-child(2) > :nth-child(2) > .my-3').should('be.visible');
    // });
    // it('should Verify that the total points spent value is updated correctly when points are spent', () => {
    //     cy.get(dashboardLocators.dashboard).click();
    //     cy.get('.gap-5 > :nth-child(2) > :nth-child(2) > :nth-child(3)').should('be.visible');
    // });
    // it('should Verify that "Your Points Last Year" and "Your Points This Year" are displayed on the dashboard.', () => {
    //     cy.get(dashboardLocators.dashboard).click();
    //     cy.get('.gap-5 > :nth-child(3)').should('be.visible');
    //     cy.get('.gap-5 > :nth-child(4)').should('be.visible');
    // });
    // it('should Verify that the "Product Summary" component is displayed on the page and contains all necessary information about the product details such as name', () => {
    //   cy.get(dashboardLocators.dashboard).click();
    //   cy.scrollTo('bottom')
    //     for (let i = 0; i < 50; i++) {
    //         cy.scrollTo(0, i * 100); 
    //         cy.wait(80);}
    // });
    // it('should Verify that the "Rejected" checkbox is unchecked by default.', () => {
    //   cy.get(dashboardLocators.dashboard).click();
    //   cy.get('.mt-\\[-3px\\]').should('exist').should('not.be.checked');
    // });
    // it('should Verify that when the "Rejected" checkbox is checked, data should update', () => {
    //   cy.get(dashboardLocators.dashboard).click();
    //   cy.get('.mt-\\[-3px\\]').click();
    // });
    // it('should Verify that the "Rejected" checkbox works correctly across different devices and browsers.', () => {
    //   cy.get(dashboardLocators.dashboard).click();
    //   cy.get('.mt-\\[-3px\\]').click();
    //   cy.viewport(1440, 900); // Example desktop viewport
    //   cy.wait(1000); // Wait for the page to adjust
    //   // Add assertions to verify elements on desktop
  
    //   // Test on tablet
    //   cy.viewport('ipad-2'); // Example tablet viewport
    //   cy.wait(1000); // Wait for the page to adjust
    //   // Add assertions to verify elements on tablet
  
    //   // Test on mobile
    //   cy.viewport('iphone-x'); // Example mobile viewport
    //   cy.wait(1000); // Wait for the page to adjust
    //   // Add assertions to verify elements on mobile
    
      
    // });
    // it('should Verify that the "Rejected" checkbox works correctly across different devices and browsers.', () => {
    //   cy.get(dashboardLocators.dashboard).click();
    //   cy.get('.dashboard-image').each(($img) => {
    //     // Check the natural width and height of each image
    //     cy.wrap($img).should('have.prop', 'naturalWidth').and('be.greaterThan', 0);
    //     cy.wrap($img).should('have.prop', 'naturalHeight').and('be.greaterThan', 0);
    //   })
    // });
 });