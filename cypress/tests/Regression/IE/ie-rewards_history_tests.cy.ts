import App from 'cypress/pageObjects/UK/AppPage';

const dataFiles = '../../fixtures/';
const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_IE'),
  "password": Cypress.env('MEMBER_PASSWORD_IE')
};
let app = new App();
let region = 'ie';

describe('IE Region - Rewards History Tests', () => {

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
    app.homePage.clickRewardsHistoryBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/rewards-history';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Rewards - Rewards History');
  });

  it('Verify Rewards History Section', () => {
    app.rewardsHistoryPage.sectionBreadcrumbElement().should('be.visible');
    app.rewardsHistoryPage.shopSectionElement().should('be.visible');
    app.rewardsHistoryPage.searchFilterFormElement().should('be.visible');
    app.rewardsHistoryPage.viewSection();
    app.rewardsHistoryPage.searchFilterRadioBtnsElement().should('be.visible');
    app.rewardsHistoryPage.filterButtonElement().should('be.visible');
  });

})
