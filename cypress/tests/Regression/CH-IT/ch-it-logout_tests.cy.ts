import App from 'cypress/pageObjects/CH-IT/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_CH_IT'),
  "password": Cypress.env('MEMBER_PASSWORD_CH_IT')
};
let app = new App();
let region = 'ch';

describe('CH (IT lang) Region - Logout Test', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.switchToIT();
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Logout Functionality', () => {
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/home';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX PRIMA Portal - Home');
    app.homePage.clickLogout();
    url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/login';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX PRIMA Portal - Startseite');
  });

})
