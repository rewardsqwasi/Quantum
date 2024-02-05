import ukLoginData from "../fixtures/ukLoginData.json"
import ukLoginLocators from "../locators/ukLoginLocators.json"

describe('UK Member Portal', () => {
  
  before(() => { })
  beforeEach(() => { })

  it('UK Member Portal Login Test', () => {

    cy.visit("https://stage.memberportal.velux.qwasi.com/uk/home");
    cy.url().should('include', 'stage.memberportal.velux.qwasi.com/uk')

    cy.get(ukLoginLocators.email).type(ukLoginData.email);
    cy.get(ukLoginLocators.password).type(ukLoginData.password);
    cy.get(ukLoginLocators.loginBtn).click();


  })

  afterEach(() => {
  })

})