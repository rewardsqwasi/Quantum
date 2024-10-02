import App from 'cypress/pageObjects/CH/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_CH'),
  "password": Cypress.env('MEMBER_PASSWORD_CH')
};
let app = new App();
let region = 'ch';

describe('CH (DE lang) Region - Logout Test', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.switchToDE();
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Logout Functionality', () => {
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/home';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX PRIMA Portal - Startseite');
    app.homePage.clickLogout();
    url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/login';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX PRIMA Portal - Startseite');
  });

})
