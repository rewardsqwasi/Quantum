import App from 'cypress/pageObjects/BE-NL/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_BE'),
  "password": Cypress.env('MEMBER_PASSWORD_BE')
};
let app = new App();
let region = 'be';

describe('BE (NL lang) Region - Logout Test', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.switchToNL();
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Logout Functionality', () => {
    let url = Cypress.env('BASE_URL') + '/'+region+'/home';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX Club - Startpagina');
    app.homePage.clickLogout();
    url = Cypress.env('BASE_URL') + '/'+region+'/login';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX Club - Accueil');
  });

})
