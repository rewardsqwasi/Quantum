import ukAdminLoginData from "../../fixtures/ukAdminLoginData.json"
import ukAdminLoginLocators from "../../locators/ukAminLoginLocators.json"

describe('UK Admin Portal', () => {
  
 
  before (() => {

    Cypress.on('uncaught exception', (err, runnable) => {
    
    console.error('Uncaught Exception:', err.message)
    
    return false
    })

  })
  beforeEach(() => { })

  it('UK Admin Portal Login Test', () => {

    cy.visit("https://stage.velux.qwasi.com/Loyalty/admin/index.php");
    cy.url().should('include', '/Loyalty/admin/index.php')

    cy.get(ukAdminLoginLocators.username).type(ukAdminLoginData.username);
    cy.get(ukAdminLoginLocators.password).type(ukAdminLoginData.password);
    cy.get(ukAdminLoginLocators.submitbtn).click();

    

  })




  afterEach(() => {
  })

})