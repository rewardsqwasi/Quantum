import App from 'cypress/pageObjects/CH-IT/AppPage';

const member = {
  "email": Cypress.env('MEMBER_EMAIL_CH_IT'),
  "password": Cypress.env('MEMBER_PASSWORD_CH_IT')
};
let app = new App();
let region = 'ch';

describe('CH (IT lang) Region - Rewards History Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.switchToIT();
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickRewardHistoryCTA();
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/rewards-history';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX PRIMA Portal - I miei buoni');
  });

  it('Verify Rewards History Section', () => {
    app.rewardsHistoryPage.sectionElement().should('be.visible');
    app.rewardsHistoryPage.sectionHeadingElement().should('be.visible');
    app.rewardsHistoryPage.viewSection();
    app.rewardsHistoryPage.myVouchersTabElement().should('be.visible');
    app.rewardsHistoryPage.allVouchersTabElement().should('be.visible');
    app.rewardsHistoryPage.sidebarDivElement().should('be.visible');
    app.rewardsHistoryPage.claimRewardBtnElement().should('be.visible');
    app.rewardsHistoryPage.allVouchersBtnElement().should('be.visible');
    app.rewardsHistoryPage.myVouchersBtnElement().should('be.visible');
  });

})
