import App from 'cypress/pageObjects/CH/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_CH'),
  "password": Cypress.env('MEMBER_PASSWORD_CH')
};
let app = new App();
let region = 'ch';

describe('CH (DE lang) Region - Terms & Conditions Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.switchToDE();
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickTermsLinkFooter();
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/terms-conditions';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX PRIMA Portal - Teilnahmebedingungen');
  });

  it('Verify Section', () => {
    app.termsPage.sectionElement().should('be.visible');
    app.termsPage.viewSection();
    app.termsPage.sectionHeadingElement().should('be.visible');
    app.termsPage.sectionHeadingElement().should('have.text', 'Teilnahmebedingungen VELUX PRIMA ');
  });

})
