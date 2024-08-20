import App from 'cypress/pageObjects/BE/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_BE'),
  "password": Cypress.env('MEMBER_PASSWORD_BE')
};
let app = new App();
let region = 'be';

describe('BE (FR lang) Region - Dashboard Tests', () => {

  before(() => {
    app.loginPage.open(region);
    app.loginPage.switchToFR();
    if(IS_PROD==="true"){
      app.loginPage.allowCookie();
      //app.getURL().should('contain', '?consent=preferences,statistics,marketing&ref-original=');
    }
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickDashboardBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/dashboard';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Club - Tableau de bord.');
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
