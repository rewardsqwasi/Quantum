import App from 'cypress/pageObjects/FR/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_FR'),
  "password": Cypress.env('MEMBER_PASSWORD_FR')
};
let app = new App();
let region = 'fr';

describe('FR Region - Projects Tests', () => {

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
    app.homePage.clickProjectsBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/projects';
    app.getURL().should('contain', url);    
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX & CO - Projects');
  });

  it('Verify Section', () => {
    app.projectPage.sectionElement().should('be.visible');
    app.projectPage.sectionBreadcrumbElement().should('be.visible');
    app.projectPage.tableElement().should('be.visible');
    app.projectPage.tableHeadingElement().should('be.visible');
    app.projectPage.tableHeaderColumnElement().should('be.visible');
    app.projectPage.filterStatusSelectElement().should('be.visible');
    app.projectPage.paginationSelectElement().should('be.visible');
  });

})
