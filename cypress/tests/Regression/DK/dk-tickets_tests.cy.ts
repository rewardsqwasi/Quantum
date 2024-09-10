import App from 'cypress/pageObjects/DK/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_DK'),
  "password": Cypress.env('MEMBER_PASSWORD_DK')
};
let app = new App();
let region = 'dk';

describe('DK Region - Tickets Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickClaimRewardsBtn();
    app.claimRewardsPage.gotoTickets();
    let url = Cypress.env('BASE_URL') + '/'+region+'/tickets';
    app.getURL().should('contain', url);    
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX håndværkerbonus - Anvend bonuskroner');
  });

  it('Verify Events Section', () => {
    app.ticketsPage.sectionDivElement().should('be.visible');
    app.ticketsPage.sectionBreadcrumbElement().should('be.visible');
   // app.ticketsPage.futureEventHeadingElement().should('be.visible');
    app.ticketsPage.pastEventHeadingElement().should('be.visible');
  });

  it('Verify Events Elements', () => {
    app.ticketsPage.eventsDivElement().each((element) => {
      app.wrap(element).find('a').should('exist').invoke('attr', 'href').should('not.be.empty');
    });
    app.ticketsPage.eventsDivElement().each((element) => {
      app.wrap(element).find('p').should('exist').invoke('text').should('not.be.empty');
    });
    app.ticketsPage.eventsDivElement().each((element) => {
      app.wrap(element).find('img').should('exist').invoke('attr', 'src').should('not.be.empty');
    });
    app.ticketsPage.eventsDivElement().each((element) => {
      app.wrap(element).xpath('//p/strong[contains(text(),"Se detaljer")]/parent::p/parent::span/parent::button').should('exist');
    });
  });

})
