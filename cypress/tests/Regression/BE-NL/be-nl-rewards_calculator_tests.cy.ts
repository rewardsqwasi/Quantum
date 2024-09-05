import App from 'cypress/pageObjects/BE-NL/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_BE-NL'),
  "password": Cypress.env('MEMBER_PASSWORD_BE-NL')
};
let app = new App();
let region = 'be';

describe('BE (NL lang) Region - Rewards Calculator Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.switchToNL();
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickRewardsCalculatorBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/rewards-calculator';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Club - Punten berekenen');
  });

  it('Verify Points Calculator Section', () => {
    app.rewardsCalculatorPage.sectionBreadcrumbElement().should('be.visible');
    app.rewardsCalculatorPage.sectionElement().should('be.visible');
    app.rewardsCalculatorPage.viewSection();
    app.rewardsCalculatorPage.sectionHeadingElement().should('be.visible');
    app.rewardsCalculatorPage.tableElement().should('be.visible');
    app.rewardsCalculatorPage.addAnotherProductButtonElement().should('be.visible');
  });

  it('Verify Placeholder', () => {
    app.rewardsCalculatorPage.enterProductCodeSpanElement().should('have.text', 'Voer productcode in');
  });

  it('Verify that the default value for the product quantity is 1', () => {
    app.rewardsCalculatorPage.inputQuantityFieldElement().should('have.value', '1');
  });

  it('Verify the user can select quantity', () => {
    app.rewardsCalculatorPage.incrementQuantity();
    app.rewardsCalculatorPage.inputQuantityFieldElement().should('have.value', '2');
    app.rewardsCalculatorPage.decrementQuantity();
    app.rewardsCalculatorPage.inputQuantityFieldElement().should('have.value', '1');
  });

  it('Verify the points are displayed against the searched product', () => {
    app.rewardsCalculatorPage.enterProductCode('GPLS FFKF06 2066');
    app.rewardsCalculatorPage.pointsFieldElement().should('have.value', '60');
  });

  it('Verify that the total points are calculated', () => {
    app.rewardsCalculatorPage.totalPointsFieldElement().should('have.value', '60');
  });

  it('Verify the user can add new row', () => {
    app.rewardsCalculatorPage.addAnotherProduct();
    app.rewardsCalculatorPage.enterProductCodeDivElement().should('have.length', 2);
  });

  it('Verify that the user can delete the row', () => {
    app.rewardsCalculatorPage.removeProductRow(2);
    app.rewardsCalculatorPage.enterProductCodeDivElement().should('have.length', 1);
  });

})
