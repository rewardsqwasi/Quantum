import App from '../../pageObjects/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_UK'),
  "password": Cypress.env('MEMBER_PASSWORD_UK')
};
let app = new App();
let region = 'uk';

describe('UK Region - Home Page Tests', () => {

  
  before(() => {
    app.loginPage.open();
    if(IS_PROD==="true"){
      app.loginPage.allowCookie();
    }
    app.loginPage.open();
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Header Menu Links', () => {
    let homeUrl = Cypress.env('BASE_URL') + '/'+region+'/home';
    app.homePage.clickMainBtn();
    app.getURL().should('contain', homeUrl);
    app.homePage.clickAddPurchseBtn();
    let addPurUrl = Cypress.env('BASE_URL') + '/'+region+'/add-purchase';
    app.getURL().should('contain', addPurUrl);
    app.homePage.clickDSPBtn();
    let dspUrl = Cypress.env('BASE_URL') + '/'+region+'/dsp-points';
    app.getURL().should('contain', dspUrl);
    app.homePage.clickAddReplaceBtn();
    let addReplUrl = Cypress.env('BASE_URL') + '/'+region+'/add-replacement';
    app.getURL().should('contain', addReplUrl);
    app.homePage.clickUploadInvoiceBtn();
    app.getURL().should('contain', addPurUrl);
    app.homePage.clickPointsHistoryBtn();
    let pointHistUrl = Cypress.env('BASE_URL') + '/'+region+'/purchase-status';
    app.getURL().should('contain', pointHistUrl);
    app.homePage.clickTrainingPointBtn();
    let trainPointUrl = Cypress.env('BASE_URL') + '/'+region+'/training-points';
    app.getURL().should('contain', trainPointUrl);
    app.homePage.clickSpendPointsBtn();
    let claimRewardUrl = Cypress.env('BASE_URL') + '/'+region+'/claim-rewards';
    app.getURL().should('contain', claimRewardUrl);
    app.homePage.clickClaimRewardsBtn();
    app.getURL().should('contain', claimRewardUrl);
    app.homePage.clickRewardsHistoryBtn();
    let rewardHistoryUrl = Cypress.env('BASE_URL') + '/'+region+'/rewards-history';
    app.getURL().should('contain', rewardHistoryUrl);
    app.homePage.clickOrderHistoryBtn();
    let orderHistoryUrl = Cypress.env('BASE_URL') + '/'+region+'/new_shop/orders-history';
    app.getURL().should('contain', orderHistoryUrl);
    app.homePage.clickRewardsCalculatorBtn();
    let rewardsCalculatorUrl = Cypress.env('BASE_URL') + '/'+region+'/rewards-calculator';
    app.getURL().should('contain', rewardsCalculatorUrl);
    app.homePage.clickDashboardBtn();
    let dashboardUrl = Cypress.env('BASE_URL') + '/'+region+'/dashboard';
    app.getURL().should('contain', dashboardUrl);
    app.homePage.clickBasketBtn();
    let basketUrl = Cypress.env('BASE_URL') + '/'+region+'/new_shop/basket';
    app.getURL().should('contain', basketUrl);
  });

  it('Verify Banners Section', () => {
    app.homePage.open();
    app.homePage.bannerSectionDivElement().should('be.visible');
    app.homePage.swiperBannerDivElement().should('have.length', 2)
  });

  it('Verify Mini Dashboard Section', () => {
    app.homePage.open();
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
    app.homePage.open();
    app.homePage.clickAddPurchaseCTA();
    let addPurUrl = Cypress.env('BASE_URL') + '/'+region+'/add-purchase';
    app.getURL().should('contain', addPurUrl);
    app.homePage.open();
    app.homePage.clickSpendPointsCTA();
    let claimRewardUrl = Cypress.env('BASE_URL') + '/'+region+'/claim-rewards';
    app.getURL().should('contain', claimRewardUrl);
    app.homePage.open();
    app.homePage.clickRewardCalculatorCTA();
    let rewardsCalculatorUrl = Cypress.env('BASE_URL') + '/'+region+'/rewards-calculator';
    app.getURL().should('contain', rewardsCalculatorUrl);
  });

  it('Verify Claim Rewards Section', () => {
    app.homePage.open();
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

  it('Verify Velux Tips & Tricks Videos Section', () => {
    app.homePage.veluxTipsHeadingElement().should('be.visible');
    app.homePage.viewVeluxTipsSection();
    app.homePage.veluxTipsDivElement().should('be.visible');
  });

  it('Verify Contact Us Section', () => {
    app.homePage.contactUsBannerDivElement().should('be.visible');
    app.homePage.contactUsBtnElement().should('be.visible');
    app.homePage.clickContactUsBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/contact';
    app.getURL().should('contain', url);
  });

  it('Verify Footer Contact Section', () => {
    app.homePage.footerSectionElement().should('be.visible');
    app.homePage.viewFooterSection();
    app.homePage.contactEmailFooterTextElement().should('be.visible');
    app.homePage.contactNumberFooterTextElement().should('be.visible');
    app.homePage.getAddressFooterText().should('eq', 'VELUX Company LtdWoodside WayGlenrothesFifeScotlandKY7 4ND');
    app.homePage.altaterraEmailFooterTextElement().should('be.visible');
    app.homePage.altaterraNumberFooterTextElement().should('be.visible');
  });

  it('Verify Footer Links Section', () => {
    app.homePage.footerSectionElement().should('be.visible');
    app.homePage.viewFooterSection();
    app.homePage.clickTermsLinkFooter();
    let termUrl = Cypress.env('BASE_URL') + '/'+region+'/terms-and-conditions';
    app.getURL().should('contain', termUrl);
    app.homePage.clickPromotionalLinkFooter();
    let promotionalUrl = Cypress.env('BASE_URL') + '/'+region+'/terms-promotion';
    app.getURL().should('contain', promotionalUrl);
    app.homePage.clickContactUsLinkFooter();
    let contactUsUrl = Cypress.env('BASE_URL') + '/'+region+'/contact';
    app.getURL().should('contain', contactUsUrl);
    if(IS_PROD==="false"){
      app.homePage.clickFAQLinkFooter();
      let faqUrl = Cypress.env('BASE_URL') + '/'+region+'/faq';
      app.getURL().should('contain', faqUrl);
    }
    app.homePage.clickEarnPointsLinkFooter();
    let earnUrl = Cypress.env('BASE_URL') + '/'+region+'/how-to-earn-points';
    app.getURL().should('contain', earnUrl);
    app.homePage.clickAltaterraPrivacyLinkFooter();
    app.getURL().should('contain', 'https://dakea.co.uk/app/uploads/2022/02/Privacy-Policy.pdf');
    app.homePage.open();
    app.homePage.clickVeluxPrivacyLinkFooter();
    app.getURL().should('contain', 'https://www.velux.co.uk/legal/privacy-policy');
  });

  it('Verify Footer Social Links Section', () => {
    app.homePage.open();
    app.homePage.footerSectionElement().should('be.visible');
    app.homePage.viewFooterSection();
    app.homePage.veluxTwitterLinkElement().should('be.visible');
    app.homePage.veluxPinterestLinkElement().should('be.visible');
    app.homePage.veluxYoutubeLinkElement().should('be.visible');
    app.homePage.veluxFacebookLinkElement().should('be.visible');
    app.homePage.dakeaFacebookLinkElement().should('be.visible');
    app.homePage.dakeaLinkedinLinkElement().should('be.visible');
    app.homePage.dakeaYoutubeLinkElement().should('be.visible');
  });

})
