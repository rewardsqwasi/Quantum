import App from 'cypress/pageObjects/UK/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_DA'),
  "password": Cypress.env('MEMBER_PASSWORD_DA')
};
let app = new App();
let region = 'da';

describe('DA Region - Dashboard Tests', () => {

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
    app.getPageTitle().should('eq','VELUX Rewards - Dashboard');
  });

  it('Verify dashboard Section', () => {  
    app.dashboardPage.sectionBreadcrumbElement().should('be.visible');
    app.dashboardPage.sectionElement().should('be.visible');
    app.dashboardPage.viewSection();
    app.dashboardPage.sectionHeadingElement().should('be.visible');
  });

  it('Verify that the current points are displayed correctly', () => {  
    app.dashboardPage.currentPointsElement().should('be.visible');
    app.dashboardPage.currentPointsElement().should('have.text', '57');
  });

  it('Verify that the total points earned are displayed correctly', () => {  
    app.dashboardPage.totalPointsEarnedElement().should('be.visible');
    app.dashboardPage.totalPointsEarnedElement().should('have.text', '77');
  });

  it('Verify that the total points spent are displayed correctly', () => {  
    app.dashboardPage.totalPointsSpentElement().should('be.visible');
    app.dashboardPage.totalPointsSpentElement().should('have.text', '20');
  });

  it('Verify that "Your Points Earned Last Year" and "Your Points Earned This Year" are displayed correctly', () => {  
    app.dashboardPage.pointsEarnedLastYearElement().should('be.visible');
    app.dashboardPage.pointsEarnedLastYearElement().should('have.text', '267');
    app.dashboardPage.pointsEarnedThisYearElement().should('be.visible');
    app.dashboardPage.pointsEarnedThisYearElement().should('have.text', '10');
  });

  it('Verify that "Your Points Spent Last Year" and "Your Points Spent This Year" are displayed correctly', () => {  
    app.dashboardPage.pointsSpentLastYearElement().should('be.visible');
    app.dashboardPage.pointsSpentLastYearElement().should('have.text', '0');
    app.dashboardPage.pointsSpentThisYearElement().should('be.visible');
    app.dashboardPage.pointsSpentThisYearElement().should('have.text', '20');
  });

  it('Verify that "Your Points Last Year" and "Your Points This Year" are displayed on the dashboard.', () => {
    app.dashboardPage.pointsLastYearDashboardElement().should('be.visible');
    app.dashboardPage.pointsThisYearDashboardElement().should('be.visible');
  });

  it('Verify that the "Product Summary" component is displayed on the page', () => {
    app.dashboardPage.productSummaryComponentDivElement().should('be.visible');
  });

  it('Verify that the "Rejected" checkbox is unchecked by default.', () => {
    app.dashboardPage.showRejectedCheckboxElement().should('be.visible').and('not.be.checked');;
  });  

})
