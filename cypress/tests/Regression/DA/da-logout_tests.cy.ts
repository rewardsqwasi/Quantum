import App from 'cypress/pageObjects/UK/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_DA'),
  "password": Cypress.env('MEMBER_PASSWORD_DA')
};
let app = new App();
let region = 'da';

describe('DA Region - Logout Test', () => {

  before(() => {
    app.loginPage.open(region);
    if(IS_PROD==="true"){
      app.loginPage.allowCookie();
      //app.getURL().should('contain', '?consent=preferences,statistics,marketing&ref-original=');
    }
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Logout Functionality', () => {
    let url = Cypress.env('BASE_URL') + '/'+region+'/home';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX Rewards - Home');
    app.homePage.clickLogout();
    url = Cypress.env('BASE_URL') + '/'+region+'/login';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX Rewards - Home');
  });

})
