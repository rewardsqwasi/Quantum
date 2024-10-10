import App from 'cypress/pageObjects/DE/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_DE'),
  "password": Cypress.env('MEMBER_PASSWORD_DE')
};
let app = new App();
let region = 'de';

describe('DE Region - Home Page Tests', () => {
  
  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Header Menu Links', () => {
    let homeUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/home';
    app.homePage.clickMainBtn();
    app.getURL().should('contain', homeUrl);
    app.homePage.clickAddPurchseBtn();
    let addPurUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/add-purchase';
    app.getURL().should('contain', addPurUrl);
    app.homePage.clickPointsHistoryBtn();
    let pointHistUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/purchase-status';
    app.getURL().should('contain', pointHistUrl);
  });

  it('Verify Page URL', () => {
    let homeUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/home';
    app.homePage.clickMainBtn();
    app.getURL().should('contain', homeUrl);
    app.getPageTitle().should('eq','VELUX PLUS - Startseite');
  });

  it('Verify Banners Section', () => {
    app.homePage.bannerSectionDivElement().should('be.visible');
    app.homePage.bannerImageElement().should('be.visible');
  });

  it('Verify Points Panel Section', () => {
    app.homePage.pointsPanelDivElement().should('be.visible');
    app.homePage.currentPointsElement().should('be.visible');
    app.homePage.currentPointsElement().should('have.text', 'Ihr bisheriger Ertrag €0');
    app.homePage.outstandingInvoicesElement().should('be.visible');
  });

  it('Verify CTA Buttons', () => {
    app.homePage.clickAddPurchaseCTA();
    let addPurUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/add-purchase';
    app.getURL().should('contain', addPurUrl);
    app.homePage.open(region);
    app.homePage.clickPurchaseStatusCTA();
    let purURL = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/purchase-status';
    app.getURL().should('contain', purURL);
    app.homePage.open(region);
    app.homePage.clickDashboardCTA();
    let dashboardUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/dashboard';
    app.getURL().should('contain', dashboardUrl);
  });

  it('Verify Marketing Panel Section', () => {
    app.homePage.open(region);
    app.homePage.marketingPanelDivElement().should('be.visible');
    app.homePage.viewMarketingPanelSection();
    app.homePage.marketingPanelImageElement().should('be.visible');
    app.homePage.marketingPanelBtnElement().should('be.visible');
    app.homePage.clickMarketingPanelBtn();
    app.getURL().should('contain', 'https://hs.velux.de/velux-plus-september-gewinnspiel-anmeldung');
  });

})
