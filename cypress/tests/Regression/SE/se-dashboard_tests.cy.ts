import App from 'cypress/pageObjects/SE/AppPage';

const dataFiles = '../../fixtures/';
const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_SE'),
  "password": Cypress.env('MEMBER_PASSWORD_SE')
};
let app = new App();
let region = 'se';

describe('SE Region - Dashboard Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickDashboardBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/dashboard';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Hantverkarbonus - Dashboard');
  });

  it('Verify dashboard Section', () => {  
    app.dashboardPage.sectionBreadcrumbElement().should('be.visible');
    app.dashboardPage.sectionElement().should('be.visible');
    app.dashboardPage.viewSection();
    app.dashboardPage.sectionHeadingElement().should('be.visible');
    app.dashboardPage.yourPointsHeadingElement().should('be.visible');
  });

  it('Verify that the available points are displayed correctly', () => {  
    app.dashboardPage.pointsAvailableElement().should('be.visible');
    app.dashboardPage.pointsAvailableElement().should('have.text', '0');
  });

  it('Verify that the total points earned are displayed correctly', () => {  
    app.dashboardPage.totalPointsEarnedElement().should('be.visible');
    app.dashboardPage.totalPointsEarnedElement().should('have.text', '0');
  });

  it('Verify that the total points spent are displayed correctly', () => {  
    app.dashboardPage.totalPointsSpentElement().should('be.visible');
    app.dashboardPage.totalPointsSpentElement().should('have.text', '0');
  });
/*
  it('Verify that the points expires on are displayed correctly', () => {  
    app.dashboardPage.pointsExpiresOnElement().should('be.visible');
    app.dashboardPage.pointsExpiresOnElement().should('have.text', '0');
  });
*/

})
