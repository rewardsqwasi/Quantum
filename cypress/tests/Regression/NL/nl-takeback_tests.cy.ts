import App from 'cypress/pageObjects/NL/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_NL'),
  "password": Cypress.env('MEMBER_PASSWORD_NL')
};
let app = new App();
let region = 'nl';

describe('NL Region - Takeback Page Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickSpendPointsBtn();
    app.claimRewardsPage.gotoTakeback();
    let url = Cypress.env('BASE_URL') + '/'+region+'/takeback';
    app.getURL().should('contain', url);    
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Rewards - Takeback');
  });

  it('Verify TakeBack Section', () => {
    app.takebackPage.sectionDivElement().should('be.visible');
    app.takebackPage.sectionBreadcrumbElement().should('be.visible');
    app.takebackPage.sectionHeadingElement().should('be.visible');
    app.takebackPage.rewardDetailDivElement().should('be.visible');
    app.takebackPage.takebackLinkElement().should('be.visible');
    app.takebackPage.amountSelectElement().should('be.visible');
    app.takebackPage.cancelBtnElement().should('be.visible');
    app.takebackPage.selectBtnElement().should('be.visible');
    app.takebackPage.rewardDetailDivElement().find('img').should('be.visible').invoke('attr', 'src').should('not.be.empty');
    app.takebackPage.rewardDetailDivElement().xpath('//h2/p').should('have.text', 'Take Back');
    app.takebackPage.amountSelectElement().find('option').should('have.length', 10).each((option, index) => {
    const expectedValue = ['---', '1', '5', '10', '20', '50', '100', '200', '500', '1000'];
    const expectedText = ['Selecteer bedrag', '€1', '€5','€10', '€20', '€50', '€100', '€200', '€500', '€1000'];
    app.wrap(option).should('have.value', expectedValue[index]);
    app.wrap(option).should('have.text', expectedText[index]);
    });
  });

})
