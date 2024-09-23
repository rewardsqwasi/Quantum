import App from 'cypress/pageObjects/AT/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_AT'),
  "password": Cypress.env('MEMBER_PASSWORD_AT')
};
let app = new App();
let region = 'at';

describe('AT Region - Home Page Tests', () => {
  
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
    app.homePage.clickPartnersBtn();
    let partnersUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/partners';
    app.getURL().should('contain', partnersUrl);
    app.homePage.clickRewardsHistoryBtn();
    let rewardHistoryUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/rewards-history';
    app.getURL().should('contain', rewardHistoryUrl);
  });

  it('Verify Page URL', () => {
    let homeUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/home';
    app.homePage.clickMainBtn();
    app.getURL().should('contain', homeUrl);
    app.getPageTitle().should('eq','VELUX Handwerker Bonusclub - Startseite');
  });

  it('Verify Banners Section', () => {
    app.homePage.bannerSectionDivElement().should('be.visible');
    app.homePage.bannerImageElement().should('be.visible');
  });

  it('Verify Points Panel Section', () => {
    app.homePage.pointsPanelDivElement().should('be.visible');
    app.homePage.currentPointsElement().should('be.visible');
    app.homePage.outstandingInvoicesElement().should('be.visible');
    app.homePage.currentPointsElement().should('have.text', 'Ihre Punkte € 0');
    app.homePage.outstandingInvoicesElement().should('be.visible');
  });

  it('Verify CTA Buttons', () => {
    app.homePage.clickAddPurchaseCTA();
    let addPurUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/add-purchase';
    app.getURL().should('contain', addPurUrl);
    app.homePage.open(region);
    app.homePage.clickPurhaseStatusCTA();
    let pointHistUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/purchase-status';
    app.getURL().should('contain', pointHistUrl);
    app.homePage.open(region);
    app.homePage.clickPartnersCTA();
    let partnersUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/partners';
    app.getURL().should('contain', partnersUrl);
    app.homePage.open(region);
    app.homePage.clickRewardHistoryCTA();
    let rewardHistoryUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/rewards-history';
    app.getURL().should('contain', rewardHistoryUrl);
  });

  it('Verify Marketing Panel Section', () => {
    app.homePage.open(region);
    app.homePage.marketingPanelDivElement().should('be.visible');
    app.homePage.viewMarketingPanelSection();
    app.homePage.marketingPanelImageElement().should('be.visible');
    app.homePage.marketingPanelFaqBtnElement().should('be.visible');
    app.homePage.clickMarketingPanelFaqBtn();
    app.getURL().should('contain', 'https://bonusclub.velux.at/at/faq');
  });

})
