import App from 'cypress/pageObjects/DE/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_DE'),
  "password": Cypress.env('MEMBER_PASSWORD_DE')
};
let app = new App();
let region = 'de';

describe('DE Region - Logout Test', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Logout Functionality', () => {
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/home';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX PLUS - Startseite');
    app.homePage.clickLogout();
    url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/login';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX PLUS - Startseite');
  });

})
