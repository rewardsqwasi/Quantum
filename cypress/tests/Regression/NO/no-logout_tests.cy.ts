import App from 'cypress/pageObjects/NO/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_NO'),
  "password": Cypress.env('MEMBER_PASSWORD_NO')
};
let app = new App();
let region = 'no';

describe('NO Region - Logout Test', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Logout Functionality', () => {
    let url = Cypress.env('BASE_URL') + '/'+region+'/home';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX Bonus - Hjem');
    app.homePage.clickLogout();
    url = Cypress.env('BASE_URL') + '/'+region+'/login';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX Bonus');
  });

})
