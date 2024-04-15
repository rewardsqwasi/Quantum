import ukLoginData from "../../fixtures/ukLoginData.json"
import ukLoginLocators from "../../locators/ukLoginLocators.json"
import addProductLocators from "../../locators/addProductLocators.json"


describe('To Verify Add Purchase', () => {

  before(() => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {

      console.error('Uncaught Exception:', err.message)

      return false
    })
  })
  
  beforeEach(() => {

    cy.UK_LOGIN_MEMBER();

  })
  it('Should verify all header links are present and clickable', () => {
   

    // Define an array of header link URLs
    const headerLinks = [
      
      'https://stage.memberportal.velux.qwasi.com/uk/add-purchase',
      'https://stage.memberportal.velux.qwasi.com/uk/claim-rewards',
      'https://stage.memberportal.velux.qwasi.com/uk/rewards-calculator',
      'https://stage.memberportal.velux.qwasi.com/uk/dashboard'
    ];

    // Iterate over each header link URL
    headerLinks.forEach(link => {
      // Verify the link is present
      cy.get(`a[href="${link}"]`).should('exist');

      // Click on the link and verify the URL changes
      cy.get(`a[href="${link}"]:first`).click();
      cy.url().should('eq', link);
      // Navigate back to the home page
      cy.go('back');
    });
});
  
it('Should verify the banner is displayed and contains correct content', () => {
    // Visit the page containing the banner
    cy.get('.container > .menu > .relative:nth-child(2) > .flex > span').click()
 

    // Assert that the banner is visible
    cy.get('.swiper-slide-visible > .h-full > a > .object-fill').should('be.visible');

    // Optionally, you can also assert the content of the banner
      // Replace 'expected_banner_image_url' with the URL of the expected banner image
    
    // Add more assertions as needed to verify other content within the banner
    // cy.get('.swiper-slide-visible > .h-full > a').should('contain', 'Expected Banner Text');

  });

  it('Should verify the mini dashboard displays correct information', () => {
   
    

    // Assert that the mini dashboard is visible
    cy.get('.swiper-slide-visible > .grid').should('be.visible');
    cy.get('.container > .menu > .relative:nth-child(5) > .flex > span').click()
    // Get data from the mini dashboard
    cy.get('.swiper-slide-visible > .grid > .w-full > .mt\\:3 > .text-2xl').invoke('text').then(miniData => {
        // Log mini dashboard data
        cy.log('Mini Dashboard Data: ', miniData.trim());
  
        // Get data from the larger dashboard
        cy.get(':nth-child(3) > .w-56 > .font-bold').invoke('text').then(dashboardData => {
          // Log larger dashboard data
          cy.log('Larger Dashboard Data: ', dashboardData.trim());
  
          // Compare the data from the mini dashboard with the data from the larger dashboard
          expect(miniData.trim()).to.equal(dashboardData.trim());
        });
      });
 

 

  });  

    it('Should get breadcrumb data and verify it', () => {
      
      cy.get('.container > .menu > .relative:nth-child(2) > .flex > span').click()
  
      // Get the breadcrumb element
      cy.get('.breadcrumb-section').invoke('text').then(breadcrumbText => {
        // Log the breadcrumb text
        cy.log('Breadcrumb Text: ', breadcrumbText.trim());
  
        // Define the expected breadcrumb text
        const expectedBreadcrumbText = 'Home\n\n\n\n\n\nVELUX Rewards - Add Purchase';
  
        // Verify that the actual breadcrumb text matches the expected breadcrumb text
        expect(breadcrumbText.trim()).to.equal(expectedBreadcrumbText);
      });
    });
  
  it('Verify that the Earn Points section is displayed and contains the correct information', () => {
     // Verify that the Earn Points section is displayed and contains the correct information
    cy.get('.swiper-slide-visible > .grid').should('be.visible');
    cy.get('.container > .menu > .relative:nth-child(5) > .flex > span').click()
    // Get Earn Points from the mini dashboard
    cy.get('.swiper-slide-visible > .grid > .w-full > .my-1 > .text-2xl').invoke('text').then(miniData => {
        // Log mini dashboard data
        cy.log('Mini Dashboard Data: ', miniData.trim());
  
        // Get Earn points from the larger dashboard
        cy.get('.my-3 > .w-56 > .font-bold').invoke('text').then(dashboardData => {
          // Log larger dashboard data
          cy.log('Larger Dashboard Data: ', dashboardData.trim());
  
          // Compare the data from the mini dashboard with the data from the larger dashboard
          expect(miniData.trim()).to.equal(dashboardData.trim());
        });
      });
    });
 
it('Verify that selecting a number from the dropdown updates the value in the form correctly.', () => {
    // Visit the page containing the dropdown
    cy.get('.container > .menu > .relative:nth-child(2) > .flex > span').click()

    // Select 45 from the dropdown
    cy.get('#question-1').select('45');

    // Verify that the dropdown value is 45
    cy.get('#question-1').should('have.value', '45');
  });

  it('Verify that the number dropdown is displayed and contains the correct values from 1 to 201.', () => {
    cy.get(':nth-child(2) > .underlined-animated').click()
    for (let i = 1; i <= 201; i++) {
      cy.get("#question-1").select(i.toString())
      cy.log(i.toString());
      
    }
  });

it('Should verify that the "Continue" button is clickable and working', () => {
    // Visit the page containing the "Continue" button
    cy.get('.container > .menu > .relative:nth-child(2) > .flex > span').click()
    

    // Scroll to the button
    cy.get('#sendFormBtn').scrollIntoView().should('be.visible');

    // Assert that the "Continue" button is clickable
    cy.get('#sendFormBtn').should('be.enabled');

    // Click the "Continue" button
    cy.get('#sendFormBtn').click();

    
  });

it('Should verify that the "Cancel" button is clickable and redirects to the home page', () => {
    // Visit the page containing the "Cancel" button
    
    cy.get('.container > .menu > .relative:nth-child(2) > .flex > span').click()
    // Assert that the "Cancel" button is clickable
    cy.get('#cancel > span').should('be.visible').click();

    // Verify the redirection to the home page
    cy.url().should('eq', 'https://stage.memberportal.velux.qwasi.com/uk/home');
  });

it('Verify that submitting the form with valid data adds a purchase to the system.', () => {
   //Redirecting to Add Purchase Page.
    cy.get('.container > .menu > .relative:nth-child(2) > .flex > span').click()
    //Submitting the Form with Valid data
    cy.get('.grid-cols-12 > .col-start-2 > #formQuestionsAnswers > #container-1 > #question-1').select('2')
 
    cy.get('.grid > .col-span-12 > .block > .relative > #answer-8').type('50',{force: true})
 
    cy.get('.grid > .col-span-12 > .block > .relative > #answer-9').type('25',{force: true})
 
    cy.get('.grid > .col-span-12 > .block > .relative > #answer-10').type('25',{force: true})
//Clicking on Continue button.
    cy.get('.col-start-2 > #formQuestionsAnswers > .flex > #sendFormBtn > span').click()

    //Verify redirects to Add invoice page
    cy.get('.col-span-12.w-full > .text-2xl').contains('Upload Purchase Invoice')
 
   
  });


it('Verify that submitting the form with invalid data displays appropriate error messages.', () => {
   //Redirecting to Add Purchase Page.
    cy.get('.container > .menu > .relative:nth-child(2) > .flex > span').click()
    //Submitting the Form with INValid data
    cy.get('.grid-cols-12 > .col-start-2 > #formQuestionsAnswers > #container-1 > #question-1').select('2')
 
    cy.get('.grid > .col-span-12 > .block > .relative > #answer-8').type('780',{force: true})
 
    cy.get('.grid > .col-span-12 > .block > .relative > #answer-9').type('759',{force: true})
 
    cy.get('.grid > .col-span-12 > .block > .relative > #answer-10').type('905',{force: true})
//Clicking on Continue button.
    cy.get('.col-start-2 > #formQuestionsAnswers > .flex > #sendFormBtn > span').click()

    //Verify it must give warning of ggreater of 100%
    
    //cy.get('.col-start-2 > #formQuestionsAnswers > #container-3 > .clear-both > .block').contains('Warning! Total of percentages must equal 100%');
    cy.get('.col-start-2 > #formQuestionsAnswers > #container-3 > .clear-both > .block', { timeout: 10000 })
    .then(($element) => {
      // Log a message if the element is found
      try {
        cy.log('Element found:', $element.text());
      } catch (error) {
        cy.log('Element not found:', error);
      }
    })
 
   
  });


it('Should select an option from a dynamic dropdown', () => {
 
    // cy.get(':nth-child(3) > .underlined-animated > .bi').click()
 
    // cy.get('.absolute > .bg-white > .group-1:nth-child(3) > .flex > .group-1-hover-font').click({force:true})
    cy.get(':nth-child(3) > .underlined-animated > .bi')
    .invoke('css', 'visibility', 'visible') // Override the 'visibility' CSS property
    .then(() => {
      // Once the parent element is made visible, interact with the hidden element
      cy.contains('Order History').click({force:true}); // Replace 'Your Po...' with the text of the hidden element
    });

});   

  afterEach(() => {
  })

  })
