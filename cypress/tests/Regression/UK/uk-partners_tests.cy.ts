import App from 'cypress/pageObjects/UK/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_UK'),
  "password": Cypress.env('MEMBER_PASSWORD_UK')
};
let app = new App();
let region = 'uk';

describe('UK Region - Partners Tests', () => {

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
    app.claimRewardsPage.gotoPartners();
    let url = Cypress.env('BASE_URL') + '/'+region+'/partners';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Rewards - Claim Rewards');
  });

  it('Verify Partner Section', () => {
    app.partnersPage.shopSectionDivElement().should('be.visible');
    app.partnersPage.sectionBreadcrumbElement().should('be.visible');
    app.partnersPage.partnersDivElement().should('be.visible');
  });

  it('Verify Partners Elements', () => {
    app.partnersPage.partnersDivElement().each((element) => {
      app.wrap(element).find('h5').should('be.visible').invoke('text').should('not.be.empty');
    });
    app.partnersPage.partnersDivElement().each((element) => {
      app.wrap(element).find('p').should('be.visible').invoke('text').should('not.be.empty');
    });
    app.partnersPage.partnersDivElement().each((element) => {
      app.wrap(element).find('img').should('be.visible').invoke('attr', 'src').should('not.be.empty');
    });
    app.partnersPage.partnersDivElement().each((element) => {
      app.wrap(element).xpath('//span[contains(text(),"Claim")]/parent::button').should('be.visible');
    });
    app.partnersPage.partnersDivElement().each((element) => {
      app.wrap(element).xpath('//span[contains(text(),"View details")]/parent::a').should('be.visible');
    });
    app.partnersPage.partnersDivElement().each((element) => {
      app.wrap(element).find('select').should('be.visible').each((element) => {
        app.wrap(element).find('option').each((option, index) => {
          if (index === 0) {
            cy.wrap(option).should('have.text', ' Choose');
            cy.wrap(option).should('have.attr', 'disabled');
          }
          else {
            const expectedValue = ['5', '10', '20', '25', '50', '100', '200', '250', '500'];
            const expectedText = ['£5', '£10', '£20', '£25', '£50', '£100', '£200', '£250','£500',
            '£5 Voucher', '£10 Voucher', '£20 Voucher', '£25 Voucher', '£50 Voucher', '£100 Voucher', '£200 Voucher',
            '£250 Voucher', '£500 Voucher', '£5 eGift Card', '£10 eGift Card', '£20 eGift Card', '£25 eGift Card',
            '£50 eGift Card', '£100 eGift Card', '£200 eGift Card', '£250 eGift Card','£500 eGift Card'];
            app.wrap(option).invoke('attr', 'value').should('be.oneOf', expectedValue);
            app.wrap(option).invoke('text').should('be.oneOf', expectedText);
          }
        });
      });
    });
  });

})