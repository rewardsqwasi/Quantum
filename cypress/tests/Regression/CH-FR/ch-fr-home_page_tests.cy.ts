import App from 'cypress/pageObjects/CH-FR/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_CH_FR'),
  "password": Cypress.env('MEMBER_PASSWORD_CH_FR')
};
let app = new App();
let region = 'ch';

describe('CH (FR lang) Region - Home Page Tests', () => {
  
  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.switchToFR();
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
    app.getPageTitle().should('eq','VELUX PRIMA Portal - Accueil');
  });

  it('Verify Banners Section', () => {
    app.homePage.bannerSectionDivElement().should('be.visible');
    app.homePage.bannerImageElement().should('be.visible');
  });

  it('Verify Points Panel Section', () => {
    app.homePage.pointsPanelDivElement().should('be.visible');
    app.homePage.currentPointsElement().should('be.visible');
    app.homePage.currentPointsElement().should('have.text', '0');
  });

  it('Verify CTA Buttons', () => {
    app.homePage.clickAddPurchaseCTA();
    let addPurUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/add-purchase';
    app.getURL().should('contain', addPurUrl);
    app.homePage.open(region);
    app.homePage.clickClaimRewardsCTA();
    let partnersUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/claim-rewards';
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
    app.homePage.marketingPanelBtnElement().should('be.visible');
    app.homePage.clickMarketingPanelBtn();
    app.getURL().should('contain', 'https://contenthub.velux.com/collections/437fb1659b6c4a1e93a9d89095b753');
  });

})
