import App from '../../pageObjects/UK/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_UK'),
  "password": Cypress.env('MEMBER_PASSWORD_UK')
};
let app = new App();
let region = 'uk';

describe('UK Region - Add User Tests', () => {

  before(() => {
    app.loginPage.open(region);
    if(IS_PROD==="true"){
      app.loginPage.allowCookie();
      app.getURL().should('contain', '?consent=preferences,statistics,marketing&ref-original=');
    }
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
  });

  it('Verify Page URL', () => {
    app.homePage.clickProfile();
    app.profilePage.clickAddUserBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/create-team-member';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Rewards - Edit Profile');
  });

  it('Verify Add User Section', () => {  
    app.addUserPage.sectionBreadcrumbElement().should('be.visible');
    app.addUserPage.sectionElement().should('be.visible');
    app.addUserPage.viewSection();
    app.addUserPage.sectionHeadingElement().should('be.visible');
    app.addUserPage.cancelBtnElement().should('be.visible');
    app.addUserPage.saveDetailsBtnElement().should('be.visible');
    app.addUserPage.firstNameFieldElement().should('be.visible');
    app.addUserPage.lastNameFieldElement().should('be.visible');
    app.addUserPage.emailFieldElement().should('be.visible');
    app.addUserPage.mobileFieldElement().should('be.visible');
    app.addUserPage.mobileVerifyFieldElement().should('be.visible');
  });

})
