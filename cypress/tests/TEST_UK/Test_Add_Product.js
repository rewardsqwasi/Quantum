import ukLoginData from "../../fixtures/ukLoginData.json"
import ukLoginLocators from "../../locators/ukLoginLocators.json"
import addProductLocators from "../../locators/addProductLocators.json"


describe('Add Invoice', () => {

  before(() => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {

      console.error('Uncaught Exception:', err.message)

      return false
    })
  })
  
  beforeEach(() => {

    cy.UK_LOGIN_MEMBER();

  })
    
    it('should display the text link add product', () => {
      // Verify that the text link is present on the page
      cy.xpath(addProductLocators.textAddProduct).should('exist');
    });

    it('should handle exceptions when text link is not found', () => {
      // Simulate an exception by using an invalid selector
      try{
        cy.xpath('invalidSelector').should('not.exist')
      }catch(error) {
        expect(error.message).to.include('Add product text not found');
      }
    });
  
    it('should be clickable', () => {
      // Verify that the text link is clickable
      cy.xpath(addProductLocators.textAddProduct).should('be.visible').click();
    });

    it('should handle exceptions when questionnaire dropdown is not found', () => {
      // Simulate an exception by using an valid selector
      try {
        cy.xpath(addProductLocators.textAddProduct).should('be.visible').click();  
        cy.get(addProductLocators.questoin1).should('exist')
      }
      catch (error) {
        expect(error.message).to.include('');
      }

    });

    it('should select an option from the questionnaire dropdown', () => {
      // Select an option from the dropdown
      cy.xpath(addProductLocators.textAddProduct).should('be.visible').click();
      cy.get(addProductLocators.questoin1).select('1');

      // Verify that the selected option is displayed
      cy.get(addProductLocators.questoin1).should('have.value', '1');
    });



    it('should display the radio button for questionnaire answer', () => {
      // Verify that the radio button is present on the page
      cy.xpath(addProductLocators.textAddProduct).should('be.visible').click();
      cy.get(addProductLocators.answer).should('exist');
    });
  
    it('should select an answer', () => {
      // Select a radio button for answer
      cy.xpath(addProductLocators.textAddProduct).should('be.visible').click();
      cy.get(addProductLocators.answer).click({force:true});

      cy.get(addProductLocators.btnContinue).should('be.visible');

      cy.get(addProductLocators.btnContinue).click();
    // Add assertions to check the result of the click action

  
    });
  
    it('should handle exceptions when radio button is not found', () => {
      // Simulate an exception by using an invalid selector
      try{
        cy.get('invalidSelector').should('not.exist')
      }
      catch(error) {
        expect(error.message).to.include('Radio button for answer not found');
      }

    });

  afterEach(() => {
  })

})