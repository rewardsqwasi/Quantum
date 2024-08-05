import App from 'cypress/pageObjects/ES/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_ES'),
  "password": Cypress.env('MEMBER_PASSWORD_ES')
};
let app = new App();
let region = 'es';

describe('ES Region - Dashboard Tests', () => {

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
    app.homePage.clickDashboardBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/dashboard';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Premia - Panel de control');
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
    app.dashboardPage.pointsAvailableElement().should('have.text', '12');
  });

  it('Verify that the total points earned are displayed correctly', () => {  
    app.dashboardPage.totalPointsEarnedElement().should('be.visible');
    app.dashboardPage.totalPointsEarnedElement().should('have.text', '50');
  });

  it('Verify that the total points spent are displayed correctly', () => {  
    app.dashboardPage.totalPointsSpentElement().should('be.visible');
    app.dashboardPage.totalPointsSpentElement().should('have.text', '38');
  });

})
