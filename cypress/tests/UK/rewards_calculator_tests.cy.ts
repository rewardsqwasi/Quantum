import App from '../../pageObjects/UK/AppPage';

const dataFiles = '../../fixtures/';
const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_UK'),
  "password": Cypress.env('MEMBER_PASSWORD_UK')
};
let app = new App();
let region = 'uk';

describe('UK Region - Rewards Calculator Tests', () => {

  before(() => {
    app.loginPage.open(region);
    if(IS_PROD==="true"){
      app.loginPage.allowCookie();
      app.getURL().should('contain', '?consent=preferences,statistics,marketing&ref-original=');
    }
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickRewardsCalculatorBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/rewards-calculator';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Rewards - Rewards Calculator');
  });

  it('Verify Claim your training workshop points Section', () => {
    app.rewardsCalculatorPage.sectionBreadcrumbElement().should('be.visible');
    app.rewardsCalculatorPage.sectionElement().should('be.visible');
    app.rewardsCalculatorPage.viewSection();
    app.rewardsCalculatorPage.sectionHeadingElement().should('be.visible');
    app.rewardsCalculatorPage.tableElement().should('be.visible');
    app.rewardsCalculatorPage.addAnotherProductButtonElement().should('be.visible');
  });

})
