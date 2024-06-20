import App from 'cypress/pageObjects/UK/AppPage';

const dataFiles = '../../fixtures/';
const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_UK'),
  "password": Cypress.env('MEMBER_PASSWORD_UK')
};
let app = new App();
let region = 'uk';

describe('UK Region - DSP Points Tests', () => {

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
    app.homePage.clickDSPBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/dsp-points';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Rewards - DSP Points');
  });

  it('Verify DSP Points Section', () => {
    app.dspPage.sectionElement().should('be.visible');
    app.dspPage.dspTableElement().should('be.visible');
    app.dspPage.tableHeaderColumnElement().should('be.visible');
  });

})
