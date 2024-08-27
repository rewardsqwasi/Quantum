import App from 'cypress/pageObjects/SE/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_SE'),
  "password": Cypress.env('MEMBER_PASSWORD_SE')
};
let app = new App();
let region = 'se';

describe('SE Region - Terms & Conditions Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickTermsLinkFooter();
    let url = Cypress.env('BASE_URL') + '/'+region+'/terms-and-conditions';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Hantverkarbonus - allmänna villkoren');
  });

  it('Verify Section', () => {
    app.termsPage.sectionElement().should('be.visible');
    app.termsPage.viewSection();
    app.termsPage.sectionBreadcrumbElement().should('be.visible');
  });

})
