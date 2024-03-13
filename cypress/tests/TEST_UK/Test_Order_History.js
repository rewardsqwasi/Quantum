import orderHistoryLocators from "../locators/orderHistoryLocators.json"

describe('Order History', () => {

    before(() => {
      
      Cypress.on('uncaught:exception', (err, runnable) => {
  
        console.error('Uncaught Exception:', err.message)
  
        return false
      })
    })
    
    beforeEach(() => {
  
      cy.UK_LOGIN_MEMBER();
  
    })

    it('should load the order history page successfully', () => {

        cy.get(':nth-child(3) > .underlined-animated > .bi')
    .invoke('css', 'visibility', 'visible') 

    .then(() => {
      
      cy.contains('Order History').click({force:true}); 

    });

});

    it('should display mini dashboard ', () => {
        cy.get(orderHistoryLocators.minidashboard).should('be.visible');

    });

    it('should load the mini dashboard page successfully', () => {
        cy.get(orderHistoryLocators.minidashboard).click();


    });

    it('should load the order detail page successfully', () => {

      cy.visit("https://stage.memberportal.velux.qwasi.com/uk/new_shop/orders-history");
      
      cy.get(orderHistoryLocators.order1).click();

      cy.url().should('include', '/uk/new_shop/order-details/238');
          
        
    });





    it('should load the order detail page successfully', () => {

      cy.visit("https://stage.memberportal.velux.qwasi.com/uk/new_shop/orders-history");
      
      cy.get(orderHistoryLocators.order2).click();

      cy.url().should('include', '/uk/new_shop/order-details/234');
          
        
    });



    it('should display the requested orders', () => {

      cy.visit("https://stage.memberportal.velux.qwasi.com/uk/new_shop/orders-history");

      cy.get('#FilterStatus').select('Requested')


  });

  it('should display the in progress orders', () => {

    cy.visit("https://stage.memberportal.velux.qwasi.com/uk/new_shop/orders-history");

    cy.get('#FilterStatus').select('In Progress')


});

it('should display the delivered orders', () => {

  cy.visit("https://stage.memberportal.velux.qwasi.com/uk/new_shop/orders-history");

  cy.get('#FilterStatus').select('Delivered')


});

it('should display the cancelled orders', () => {
  
  cy.visit("https://stage.memberportal.velux.qwasi.com/uk/new_shop/orders-history");

  cy.get('#FilterStatus').select('Cancelled')


});

it('should display the 50 orders on that page', () => {
  
  cy.visit("https://stage.memberportal.velux.qwasi.com/uk/new_shop/orders-history");

  cy.get('#pagination').select('50')


});

it('should load the search filter page successfully', () => {

        cy.visit("https://stage.memberportal.velux.qwasi.com/uk/new_shop/orders-history");
        
        cy.get(orderHistoryLocators.checkbox).click();
  

            
          
      });

      it('should load the search filter page successfully', () => {

        cy.visit("https://stage.memberportal.velux.qwasi.com/uk/new_shop/orders-history");
        
        cy.get(orderHistoryLocators.filterButton).click();
  
            
          
      });







it('Should test responsiveness on desktop', () => {
  
  cy.viewport(1366, 768); // Example: Standard laptop resolution
  
  
  
  // You can also simulate other desktop resolutions as needed
  // cy.viewport(1920, 1080); // Example: Full HD resolution
  // cy.viewport(2560, 1440); // Example: 2K resolution


});





    
    



    afterEach(() => {
    })
  
  })