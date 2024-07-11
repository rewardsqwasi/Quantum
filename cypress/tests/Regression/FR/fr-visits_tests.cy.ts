import App from 'cypress/pageObjects/FR/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_FR'),
  "password": Cypress.env('MEMBER_PASSWORD_FR')
};
let app = new App();
let region = 'fr';

describe('FR Region - Visits Tests', () => {

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
    app.claimRewardsPage.gotoVisits();
    let url = Cypress.env('BASE_URL') + '/'+region+'/visits';
    app.getURL().should('contain', url);    
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX & CO - Convertir mes points');
  });

  it('Verify Events Section', () => {
    app.visitsPage.sectionDivElement().should('be.visible');
    app.visitsPage.sectionBreadcrumbElement().should('be.visible');
    app.visitsPage.futureEventHeadingElement().should('be.visible');
    app.visitsPage.pastEventHeadingElement().should('be.visible');
  });

  it('Verify Events Elements', () => {
    app.visitsPage.eventsDivElement().each((element) => {
      app.wrap(element).find('a').should('be.visible').invoke('attr', 'href').should('not.be.empty');
    });
    app.visitsPage.eventsDivElement().each((element) => {
      app.wrap(element).find('p').should('be.visible').invoke('text').should('not.be.empty');
    });
    app.visitsPage.eventsDivElement().each((element) => {
      app.wrap(element).find('img').should('be.visible').invoke('attr', 'src').should('not.be.empty');
    });
  });

})
