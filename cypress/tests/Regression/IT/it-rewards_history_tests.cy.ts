import App from 'cypress/pageObjects/IT/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_IT'),
  "password": Cypress.env('MEMBER_PASSWORD_IT')
};
let app = new App();
let region = 'it';

describe('IT Region - Rewards History Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });
  
  it('Verify Page URL', () => {
    app.homePage.clickRewardsHistoryBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/rewards-history';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Premia - Storico Premi');
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
