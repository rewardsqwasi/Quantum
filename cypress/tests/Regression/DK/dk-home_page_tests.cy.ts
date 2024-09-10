import App from 'cypress/pageObjects/DK/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_DK'),
  "password": Cypress.env('MEMBER_PASSWORD_DK')
};
let app = new App();
let region = 'dk';

describe('dK Region - Home Page Tests', () => {
  
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
    app.homePage.clickClaimRewardsBtn();
    let claimRewardUrl = Cypress.env('BASE_URL') + '/'+region+'/claim-rewards';
    app.getURL().should('contain', claimRewardUrl);
    app.homePage.clickRewardsHistoryBtn();
    let rewardHistoryUrl = Cypress.env('BASE_URL') + '/'+region+'/rewards-history';
    app.getURL().should('contain', rewardHistoryUrl);
    app.homePage.clickRewardsCalculatorBtn();
    let rewardsCalculatorUrl = Cypress.env('BASE_URL') + '/'+region+'/rewards-calculator';
    app.getURL().should('contain', rewardsCalculatorUrl);
    app.homePage.clickDashboardBtn();
    let dashboardUrl = Cypress.env('BASE_URL') + '/'+region+'/dashboard';
    app.getURL().should('contain', dashboardUrl);
    app.homePage.clickBasketBtn();
    let basketUrl = Cypress.env('BASE_URL') + '/'+region+'/velux-shop/cart';
    app.getURL().should('contain', basketUrl);
  });

  it('Verify Page URL', () => {
    let homeUrl = Cypress.env('BASE_URL') + '/'+region+'/home';
    app.homePage.clickMainBtn();
    app.getURL().should('contain', homeUrl);
    app.getPageTitle().should('eq','VELUX håndværkerbonus - Hjemmeside');
  });

  it('Verify Banners Section', () => {
    app.homePage.open(region);
    app.homePage.bannerSectionDivElement().should('be.visible');
    app.homePage.swiperBannerDivElement().should('have.length', 2)
  });

  it('Verify Mini Dashboard Section', () => {
    app.homePage.open(region);
    app.homePage.miniDashboardBannerDivElement().should('be.visible');
    app.homePage.clickGotoMiniDashboardChart();
    app.homePage.currentPointDivElement().should('exist');
    app.homePage.pointsEarnedDivElement().should('exist');
    app.homePage.pointsSpentDivElement().should('exist');
    app.homePage.totalPointsDivElement().should('exist');
    app.homePage.bonusLevelChartElement().should('exist');
    app.homePage.clickBonusLevelChart();
    let dashboardUrl = Cypress.env('BASE_URL') + '/'+region+'/dashboard';
    app.getURL().should('contain', dashboardUrl);
  });

  it('Verify CTA Buttons', () => {
    app.homePage.open(region);
    app.homePage.clickAddPurchaseCTA();
    let addPurUrl = Cypress.env('BASE_URL') + '/'+region+'/add-purchase';
    app.getURL().should('contain', addPurUrl);
    app.homePage.open(region);
    app.homePage.clickSpendPointsCTA();
    let claimRewardUrl = Cypress.env('BASE_URL') + '/'+region+'/claim-rewards';
    app.getURL().should('contain', claimRewardUrl);
    app.homePage.open(region);
    app.homePage.clickRewardCalculatorCTA();
    let rewardsCalculatorUrl = Cypress.env('BASE_URL') + '/'+region+'/rewards-calculator';
    app.getURL().should('contain', rewardsCalculatorUrl);
  });

  it('Verify Claim Rewards Section', () => {
    app.homePage.open(region);
    app.homePage.claimRewardsHeadingElement().should('be.visible');
    app.homePage.viewClaimRewardsSection();
    app.homePage.claimRewardsDivElement().should('be.visible');
  });

  it('Verify Stay Informed Section', () => {
    app.homePage.stayInformedHeadingElement().should('be.visible');
    app.homePage.viewStayInformedSection();
    app.homePage.stayInformedDivElement().should('be.visible');
  });

  it('Verify Services Section', () => {
    app.homePage.serviceHeadingElement().should('be.visible');
    app.homePage.viewServicesSection();
    app.homePage.servicesDivElement().should('be.visible');
  });


  it('Verify Contact Us Section', () => {
    app.homePage.contactUsBannerDivElement().should('be.visible');
    app.homePage.contactUsBtnElement().should('be.visible');
    app.homePage.clickContactUsBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/contact';
    app.getURL().should('contain', url);
  });

})
