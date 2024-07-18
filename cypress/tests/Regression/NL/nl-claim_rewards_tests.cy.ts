import App from 'cypress/pageObjects/NL/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_NL'),
  "password": Cypress.env('MEMBER_PASSWORD_NL')
};
let app = new App();
let region = 'nl';

describe('NL Region - Claim Rewards Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickSpendPointsBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/claim-rewards';
    app.getURL().should('contain', url);    
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Rewards - Wissel mijn punten in');
  });

  it('Verify Claim Rewards Section', () => {
    app.claimRewardsPage.productSectionDivElement().should('be.visible');
    app.claimRewardsPage.viewSection();
    app.claimRewardsPage.headingElement().should('be.visible');
    app.claimRewardsPage.veluxRewardsShopDivElement().should('be.visible');
    app.claimRewardsPage.takebackDivElement().should('be.visible');
    app.claimRewardsPage.retailersDivElement().should('be.visible');
    app.claimRewardsPage.ChasingDaylightDivElement().should('be.visible');
  });

})
