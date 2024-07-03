import App from 'cypress/pageObjects/FR/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_FR'),
  "password": Cypress.env('MEMBER_PASSWORD_FR')
};
let app = new App();
let region = 'fr';

describe('FR Region - Presentoirs Tests', () => {

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
    app.claimRewardsPage.gotoPresentoirs();
    let url = Cypress.env('BASE_URL') + '/'+region+'/presentoirs';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','Presentoirs - Magasin');
  });

  it('Verify Presentoirs Section', () => {
    app.presentoirsPage.sectionDivElement().should('be.visible');
    app.presentoirsPage.sectionBreadcrumbElement().should('be.visible');
    app.presentoirsPage.presentoirsDivElement().should('be.visible');
  });

  it('Verify Presentoirs Elements', () => {
    app.presentoirsPage.presentoirsDivElement().each((element) => {
      app.wrap(element).find('b').should('be.visible').invoke('text').should('not.be.empty');
    });
    app.presentoirsPage.presentoirsDivElement().each((element) => {
      app.wrap(element).xpath('//p[2]').should('be.visible').invoke('text').should('not.be.empty');
    });
    app.presentoirsPage.presentoirsDivElement().each((element) => {
      app.wrap(element).find('img').should('be.visible').invoke('attr', 'src').should('not.be.empty');
    });
    app.presentoirsPage.presentoirsDivElement().each((element) => {
      app.wrap(element).xpath('//span[contains(text(),"Voir EN Détails")]/parent::a').should('be.visible');
    });
  });

})
