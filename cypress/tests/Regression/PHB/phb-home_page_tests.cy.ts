import App from 'cypress/pageObjects/PHB/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_PHB'),
  "password": Cypress.env('MEMBER_PASSWORD_PHB')
};
let app = new App();
let region = 'phb';

describe('PHB Region - Home Page Tests', () => {
  
  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Header Menu Links', () => {
    let homeUrl = Cypress.env('BASE_URL') + '/'+region+'/home';
    app.homePage.clickMainBtn();
    app.getURL().should('contain', homeUrl);
    app.homePage.clickAddPurchseBtn();
    let addPurUrl = Cypress.env('BASE_URL') + '/'+region+'/add-purchase';
    app.getURL().should('contain', addPurUrl);
    app.homePage.clickPointsHistoryBtn();
    let pointHistUrl = Cypress.env('BASE_URL') + '/'+region+'/purchase-status';
    app.getURL().should('contain', pointHistUrl);
  });

  it('Verify Page URL', () => {
    let homeUrl = Cypress.env('BASE_URL') + '/'+region+'/home';
    app.homePage.clickMainBtn();
    app.getURL().should('contain', homeUrl);
    app.getPageTitle().should('eq','VELUX-Prämien - Startseite');
  });

  it('Verify Banners Section', () => {
    app.homePage.bannerSectionDivElement().should('be.visible');
  });

  it('Verify Points Panel Section', () => {
    app.homePage.pointsPanelDivElement().should('be.visible');
    app.homePage.currentPointsElement().should('be.visible');
    app.homePage.currentPointsElement().should('have.text', 'Ihr bisheriger Ertrag € 0');
    app.homePage.outstandingInvoicesElement().should('be.visible');
  });

  it('Verify CTA Buttons', () => {
    app.homePage.clickAddPurchaseCTA();
    let addPurUrl = Cypress.env('BASE_URL') + '/'+region+'/add-purchase';
    app.getURL().should('contain', addPurUrl);
    app.homePage.open(region);
    app.homePage.clickPurchaseStatusCTA();
    let purURL = Cypress.env('BASE_URL') + '/'+region+'/purchase-status';
    app.getURL().should('contain', purURL);
  });

  it('Verify Marketing Panel Section', () => {
    app.homePage.open(region);
    app.homePage.marketingPanelDivElement().should('be.visible');
    app.homePage.viewMarketingPanelSection();
    app.homePage.marketingPanelImageElement().should('be.visible');
    app.homePage.marketingPanelBtnElement().should('be.visible');
    //app.homePage.clickMarketingPanelBtn();
    //app.getURL().should('contain', 'https://hs.velux.de/velux-plus-september-gewinnspiel-anmeldung');
  });

})
