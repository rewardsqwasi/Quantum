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
      //app.getURL().should('contain', '?consent=preferences,statistics,marketing&ref-original=');
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
  });

  it('Verify "Add team members" fields exist and inputs can be given', () => {  
    app.addUserPage.firstNameFieldElement().should('be.visible');
    app.addUserPage.lastNameFieldElement().should('be.visible');
    app.addUserPage.emailFieldElement().should('be.visible');
    app.addUserPage.mobileFieldElement().should('be.visible');
    app.addUserPage.mobileVerifyFieldElement().should('be.visible');
  });

  it('Verify that Placeholders for all the fields exist.', () => {  
    app.addUserPage.firstNameFieldElement().should('have.attr', 'placeholder',"First Name");
    app.addUserPage.lastNameFieldElement().should('have.attr', 'placeholder',"Last Name");
    app.addUserPage.emailFieldElement().should('have.attr', 'placeholder',"Email Address");
    app.addUserPage.mobileFieldElement().should('have.attr', 'placeholder',"07400 123456");
    app.addUserPage.mobileVerifyFieldElement().should('have.attr', 'placeholder',"07400 123456");
  });

  it('Verify cancel button', () => {  
    app.addUserPage.clickCancelBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/edit-profile';
    app.getURL().should('contain', url);
  });

})
