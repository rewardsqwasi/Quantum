import App from 'cypress/pageObjects/SE/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_SE'),
  "password": Cypress.env('MEMBER_PASSWORD_SE')
};
let app = new App();
let region = 'se';

describe('SE Region - Claim Rewards Tests', () => {

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
    app.getPageTitle().should('eq','VELUX Hantverkarbonus - Lös in bonuspoäng');
  });

  it('Verify Claim Rewards Section', () => {
    app.claimRewardsPage.productSectionDivElement().should('be.visible');
    app.claimRewardsPage.viewSection();
    app.claimRewardsPage.headingElement().should('be.visible');
    app.claimRewardsPage.partnersDivElement().should('be.visible');
  });

})
