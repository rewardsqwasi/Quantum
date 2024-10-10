import App from 'cypress/pageObjects/DE/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_DE'),
  "password": Cypress.env('MEMBER_PASSWORD_DE')
};
let app = new App();
let region = 'de';

describe('DE Region - Terms & Conditions Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickTermsLinkFooter();
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/terms-and-conditions';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX PLUS - Teilnahmebedingungen');
  });

  it('Verify Section', () => {
    app.termsPage.sectionElement().should('be.visible');
    app.termsPage.viewSection();
    app.termsPage.sectionHeadingElement().should('be.visible');
    app.termsPage.sectionHeadingElement().should('have.text', '\n    VELUX PLUS: Teilnahmevereinbarung [Stand: 01.07.2024]\n');
    app.termsPage.partnerProgramLinkElement().should('be.visible');
  });

  it('Verify Partner Program Section', () => {
    app.termsPage.clickPartnerProgramLink();
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/partner-program';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX PLUS - Partnervereinbarung');
    app.termsPage.partnerSelectElement().should('be.visible');
    app.termsPage.partnerSelectElement().find('option').should('have.length', 3)
    .each((option, index) => {
      if (index === 0) {
        cy.wrap(option).should('have.text', "Bitte wählen");
      }
      else {
        const expectedValue = ['','VELUX Experte Qualitäts-Partner', 'VELUX Experte Premium-Partner'];
        app.wrap(option).should('have.value', expectedValue[index]);
        app.wrap(option).should('have.text', expectedValue[index]);
      }
    });
    app.termsPage.meetCriteriaCheckboxElement().should('be.visible');
    app.termsPage.termsCondtionCheckboxElement().should('be.visible');
    app.termsPage.acceptedCheckboxElement().should('be.visible');
    app.termsPage.sendRequestButtonElement().should('be.visible');
  });

})
