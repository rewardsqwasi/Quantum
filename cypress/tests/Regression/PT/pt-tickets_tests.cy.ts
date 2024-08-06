import App from 'cypress/pageObjects/PT/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_PT'),
  "password": Cypress.env('MEMBER_PASSWORD_PT')
};
let app = new App();
let region = 'pt';

describe('PT Region - Tickets Tests', () => {

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
    app.homePage.clickSpendPointsBtn();
    app.claimRewardsPage.gotoTickets();
    let url = Cypress.env('BASE_URL') + '/'+region+'/tickets';
    app.getURL().should('contain', url);    
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','Recompensas VELUX - Solicitar prémios');
  });

  it('Verify Events Section', () => {
    app.ticketsPage.sectionDivElement().should('be.visible');
    app.ticketsPage.sectionBreadcrumbElement().should('be.visible');
    app.ticketsPage.futureEventHeadingElement().should('be.visible');
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
  });

})
