describe('Compacon', () => {

    before(() => {

        
        Cypress.on('uncaught:exception', (err, runnable) => {
            
            console.error('Uncaught exception:', err.message);

            
            return false;
        });

    });

    beforeEach(() => {
        cy.NL_LOGIN_MEMBER();
    
        cy.get('.active > .underlined-animated > span')  
        .invoke('css', 'visibility', 'visible') 
            
        .then(() => {
              
            cy.contains('Rewards claimen').click({force:true}); 
        
        });

        cy.get(':nth-child(5) > .w-full > .lg\\:mt-9 > .clamp > a > b').click();
  
      })

      it('should click on list button', () => {
        cy.get('.tippy-list-shop > .bi').click();

    });

    it('should click on grid button', () => {
        cy.get('.tippy-grid-shop > .bi').click();     

    });


    it('should select the filter', () => {
        cy.get('#checkbox-884').click();     
        cy.get('.mb-2.pt-5 > .gap-1 > :nth-child(1)').click(); 
        cy.wait(10000);
        cy.get('#refreshIcon').click();
    });

    it('should display the points', () => {     
        cy.get('.swiper-slide-active > :nth-child(1) > .card-container > :nth-child(2) > :nth-child(3) > .text-base').should('be.visible');
    });

    it('should click product', () => {
        cy.get('.swiper-slide-next > :nth-child(1) > .card-container > .h-\\[190px\\] > a > .card-object-fit').click();     

    });

    it('should display the product title, points, description, article number, package, weight and stock number', () => {
        cy.get('.swiper-slide-next > :nth-child(1) > .card-container > .h-\\[190px\\] > a > .card-object-fit').click();     

        cy.get('.clamp-2').should('be.visible');  
        cy.get('.modal-stock > .text-md').should('be.visible');
        cy.get('.product-info > :nth-child(2)').should('be.visible');
        cy.get(':nth-child(5) > b').should('be.visible');
        cy.get(':nth-child(7) > b').should('be.visible');
        cy.get(':nth-child(6) > b').should('be.visible');
        cy.get('.stock-label-js').should('be.visible');  

    });

        it('should first product added to the cart', () => {
            cy.get('.swiper-slide-next > :nth-child(1) > .card-container > .h-\\[190px\\] > a > .card-object-fit').click();     

            cy.get('#btnAddItemToCart').click();     
            
    
        });

        it('should second product added to the cart', () => {
            cy.get('.grid > :nth-child(1) > .card-container > .h-\\[190px\\] > a > .card-object-fit').click();     

            cy.get('#btnAddItemToCart').click();     
            
    
        });

        it('should display the total points', () => {
            cy.get('.grid > :nth-child(1) > .card-container > .h-\\[190px\\] > a > .card-object-fit').click();     

            cy.get('#cart-info > .text-xl').should('be.visible');   
            
    
        });

        it('Should click on delete button', () => {
                cy.get('.flex > .fa').click();
                cy.get(':nth-child(10) > .min-w-\\[800px\\] > tbody > .border-2 > [width="20"] > .tippy').click();
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
    









      afterEach(() => {
    })



})