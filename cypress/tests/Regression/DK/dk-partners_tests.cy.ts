import App from 'cypress/pageObjects/DK/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_DK'),
  "password": Cypress.env('MEMBER_PASSWORD_DK')
};
let app = new App();
let region = 'dk';

describe('DK Region - Partners Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickClaimRewardsBtn();
    app.claimRewardsPage.gotoPartners();
    let url = Cypress.env('BASE_URL') + '/'+region+'/partners';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX håndværkerbonus - Anvend bonuskroner');
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
      app.wrap(element).xpath('//span[contains(text(),"Indløs")]/parent::button').should('be.visible');
    });
    app.partnersPage.partnersDivElement().each((element) => {
      app.wrap(element).xpath('//span[contains(text(),"Se detaljer")]/parent::a').should('be.visible');
    });
    app.partnersPage.partnersDivElement().each((element) => {
      app.wrap(element).find('select').should('be.visible').each((element) => {
        app.wrap(element).find('option').each((option, index) => {
          if (index === 0) {
            cy.wrap(option).should('have.text', ' Vælg beløb');
            cy.wrap(option).should('have.attr', 'disabled');
          }
          else {
            const expectedValue = ['5', '10', '20', '25', '50', '100', '200', '250', '5000','500', '1000', '3000', '1500', '300', ];
            const expectedText = ['50 DKK', '100 DKK', '500 DKK', '1000 DKK', '3000 DKK', '1500 DKK', 
              '200 DKK', '250 DKK', '300 DKK', '5000 DKK'];
            app.wrap(option).invoke('attr', 'value').should('be.oneOf', expectedValue);
            app.wrap(option).invoke('text').should('be.oneOf', expectedText);
          }
        });
      });
    });
  });

})
