import App from 'cypress/pageObjects/FR/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_FR'),
  "password": Cypress.env('MEMBER_PASSWORD_FR')
};
let app = new App();
let region = 'fr';

describe('FR Region - Claim Rewards Tests', () => {

  before(() => {
    app.loginPage.open(region);
    if(IS_PROD==="true"){
      app.loginPage.allowCookie();
      //app.getURL().should('contain', '?consent=preferences,statistics,marketing&ref-original=');
    }
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickSpendPointsBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/claim-rewards';
    app.getURL().should('contain', url);    
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX & CO - Convertir mes points');
  });

  it('Verify Claim Rewards Section', () => {
    app.claimRewardsPage.productSectionDivElement().should('be.visible');
    app.claimRewardsPage.viewSection();
    app.claimRewardsPage.headingElement().should('be.visible');
    app.claimRewardsPage.myProjectDivElement().should('be.visible');
    app.claimRewardsPage.displaysDivElement().should('be.visible');
    app.claimRewardsPage.chasingDaylightDivElement().should('be.visible');
    app.claimRewardsPage.veluxCoStoreDivElement().should('be.visible');
    app.claimRewardsPage.siteAssistDivElement().should('be.visible');
    app.claimRewardsPage.partnersDivElement().should('be.visible');
  });

})
