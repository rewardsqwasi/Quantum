import App from '../../pageObjects/AT/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_AT'),
  "password": Cypress.env('MEMBER_PASSWORD_AT')
};
let app = new App();
let region = 'at';

describe('Sanity Test Austria Region', () => {
  
  it('Sanity Test Austria Region', () => {
    //if(IS_PROD==="true"){
      app.loginPage.allowCookie();
      //app.getURL().should('contain', '?consent=preferences,statistics,marketing&ref-original=');
    //}
    app.loginPage.open(region);
    let loginUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/login';
    app.getURL().should('contain', loginUrl);
    app.getPageTitle().should('eq','VELUX Handwerker Bonusclub - Startseite');
    app.loginPage.login(member.email, member.password);
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/home';
    app.getURL().should('contain', url);
    app.getPageTitle().should('eq','VELUX Handwerker Bonusclub - Startseite');
    
    app.homePage.clickAddPurchseBtn();
    let addPurUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/add-purchase';
    app.getURL().should('contain', addPurUrl);
    app.getPageTitle().should('eq','VELUX Handwerker Bonusclub - Fügen Sie Ihren Einkauf hinzu');

    app.homePage.clickPointsHistoryBtn();
    let pointHistUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/purchase-status';
    app.getURL().should('contain', pointHistUrl);
    app.getPageTitle().should('eq','VELUX Handwerker Bonusclub - Einreichstatus');
    //app.getPageTitle().should('match', new RegExp(`^(VELUX Handwerker Bonusclub - Einreichstatuse|VELUX Handwerker Bonusclub - Einreichstatus)$`));

    app.homePage.clickPartnersBtn();
    let claimRewardUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/partners';
    app.getURL().should('contain', claimRewardUrl);
    app.getPageTitle().should('eq','VELUX Handwerker Bonusclub - Punkte einlösen');

    app.homePage.clickRewardsHistoryBtn();
    let rewardHistoryUrl = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/rewards-history';
    app.getURL().should('contain', rewardHistoryUrl);
    app.getPageTitle().should('eq','VELUX Handwerker Bonusclub - Eingelöste Punkte überprüfen');

  });

})
