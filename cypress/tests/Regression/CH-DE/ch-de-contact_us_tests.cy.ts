import App from 'cypress/pageObjects/CH/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_CH'),
  "password": Cypress.env('MEMBER_PASSWORD_CH')
};
let app = new App();
let region = 'ch';

describe('CH (DE lang) Region - Contact Us Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.switchToDE();
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickContactUsLinkFooter();
    let contactUsUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/contact';
    app.getURL().should('contain', contactUsUrl);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX PRIMA Portal - Kontakt');
  });

  it('Verify Contact Us Section', () => {
    app.contactUsPage.sectionElement().should('be.visible');
    app.contactUsPage.viewSection();
    app.contactUsPage.headingElement().should('be.visible');
    app.contactUsPage.headingElement().should('have.text', 'Kontaktformular');
  });

  it('Verify that the image on the contact us is displaying.', () => {
    app.contactUsPage.imageElement().should('be.visible');
  });

})
