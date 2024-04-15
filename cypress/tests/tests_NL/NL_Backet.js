import basketLocators from "../../locators/basketLocators.json";

describe("Basket", () => {
    before(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        console.error("Uncaught Exception:", err.message);
  
        return false;
      });
    });
    beforeEach(() => {
        cy.NL_LOGIN_MEMBER();
      });

      it('Should Verify the banner is displaying.', () => {
        cy.get('.flex > .fa').click();
      });


      it('Should Verify the mini Dashboard is displaying.', () => {
        cy.get('.flex > .fa').click();
     
        cy.get('.swiper-slide-visible > .h-full > a > .object-fill').should('be.visible');

    });

    it('Should Verify the name of product.', () => {
        cy.get('.flex > .fa').click();
        cy.get('.product-name').should('be.visible');

      });

      it('Should Verify the image of product.', () => {
        cy.get('.flex > .fa').click();
        cy.get('.border > .w-full').should('be.visible');

      });

      it('Should Verify the delete button.', () => {
        cy.get('.flex > .fa').click();
        cy.get('.border > .w-full').should('be.visible');

      });

    //   it('Should click on delete button', () => {
    //     cy.get('.flex > .fa').click();
    //     cy.get('.border > .w-full').click();

    //   });  

      it('Should verify the price.', () => {
        cy.get('.flex > .fa').click();
        cy.get('#cart-info > .text-xl').should('be.visible');

      });

      it('Should verify the checkbox', () => {
        cy.get('.flex > .fa').click();
        cy.get('#terms').should('be.visible');

      });

      it('Should click on checkbox', () => {
        cy.get('.flex > .fa').click();
        cy.get('#terms').click();

      });

      it('Should input data for shipping', () => {
        cy.get('.flex > .fa').click();
        cy.get('#name').clear()
        cy.get('#name').type('Muhammed Bari');
        cy.get('#email').clear()
        cy.get('#email').type('muhammed.bari@quantum-h.com');
        
        cy.get('#phone').clear()
        cy.get('#phone').type('+17709379735');
        cy.get('#company').clear()
        cy.get('#company').type('Lara and Owens Inc');
        cy.get('#houseNumber').clear()
        cy.get('#houseNumber').type('37');
        cy.get('#address1').clear()
        cy.get('#address1').type('794 South New Parkway');
        cy.get('#town').clear()
        cy.get('#town').type('Quas quisquam volupt');
        cy.get('#postcode').clear()
        cy.get('#postcode').type('48392');

        cy.get('#terms').click();
        cy.get('#checkoutCart').click();

      });


      it('should display the footer', () => {
        cy.get('.flex > .fa').click();

        cy.get('.py-\\[50px\\]').should('be.visible');
    
    });
    
    it('should load the home page successfully', () => {
        cy.get('.flex > .fa').click();
    
        cy.get('.text-sm > :nth-child(1) > a').click();
    
    });
    
    it('should load the terms of trade successfully', () => {
        cy.get('.flex > .fa').click();
    
        cy.get('.text-sm > :nth-child(2) > a').click();
    
    });
    
    it('should load the terms and condition successfully', () => {
        cy.get('.flex > .fa').click();
    
        cy.get('.text-sm > :nth-child(3) > a').click();
    
    });
    
    it('should load the to ask page successfully', () => {
        cy.get('.flex > .fa').click();
    
        cy.get('.text-sm > :nth-child(4) > a').click();
    
    });
    
    it('should load the please contact us page successfully', () => {
        cy.get('.flex > .fa').click();
    
        cy.get('.text-sm > :nth-child(5) > a').click();
    
    });












   


});