import App from 'cypress/pageObjects/NL/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_NL'),
  "password": Cypress.env('MEMBER_PASSWORD_NL')
};
let app = new App();
let region = 'nl';

describe('NL Region - Partners Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickSpendPointsBtn();
    app.claimRewardsPage.gotoPartners();
    let url = Cypress.env('BASE_URL') + '/'+region+'/partners';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Rewards - Wissel mijn punten in');
  });

  it('Verify Partner Section', () => {
    app.partnersPage.shopSectionDivElement().should('be.visible');
    app.partnersPage.sectionBreadcrumbElement().should('be.visible');
    app.partnersPage.partnersDivElement().should('be.visible');
  });

  it('Verify Partners Elements', () => {
    app.partnersPage.partnersDivElement().each((element) => {
      app.wrap(element).find('h5').should('be.visible').invoke('text').should('not.be.empty');
    });
    app.partnersPage.partnersDivElement().each((element) => {
      app.wrap(element).find('p').should('be.visible').invoke('text').should('not.be.empty');
    });
    app.partnersPage.partnersDivElement().each((element) => {
      app.wrap(element).find('img').should('be.visible').invoke('attr', 'src').should('not.be.empty');
    });
    app.partnersPage.partnersDivElement().each((element) => {
      app.wrap(element).xpath('//span[contains(text(),"Wissel in")]/parent::button').should('be.visible');
    });
    app.partnersPage.partnersDivElement().each((element) => {
      app.wrap(element).xpath('//span[contains(text(),"Bekijk details")]/parent::a').should('be.visible');
    });
    app.partnersPage.partnersDivElement().each((element) => {
      app.wrap(element).find('select').should('be.visible').each((element) => {
        app.wrap(element).find('option').each((option, index) => {
          if (index === 0) {
            cy.wrap(option).should('have.text', ' kiezen');
            cy.wrap(option).should('have.attr', 'disabled');
          }
          else {
            const expectedValue = ['10', '20', '25', '50', '100', '250', '500'];
            const expectedText = ['€10', '€20', '€25', '€50', '€100', '€250', '€500'];
            app.wrap(option).invoke('attr', 'value').should('be.oneOf', expectedValue);
            app.wrap(option).invoke('text').should('be.oneOf', expectedText);
          }
        });
      });
    });
  });

})
