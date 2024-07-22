import App from 'cypress/pageObjects/NL/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_NL'),
  "password": Cypress.env('MEMBER_PASSWORD_NL')
};
let app = new App();
let region = 'nl';
/*
describe('NL Region - Add User Tests', () => {

  before(() => {
    app.loginPage.allowCookie();
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
    app.getPageTitle().should('eq','VELUX Rewards - Gegevens');
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
    app.addUserPage.firstNameFieldElement().should('have.attr', 'placeholder',"Voornaam");
    app.addUserPage.lastNameFieldElement().should('have.attr', 'placeholder',"Achternaam");
    app.addUserPage.emailFieldElement().should('have.attr', 'placeholder',"E-mail contactpersoon");
    app.addUserPage.mobileFieldElement().should('have.attr', 'placeholder',"06 12345678");
    app.addUserPage.mobileVerifyFieldElement().should('have.attr', 'placeholder',"06 12345678");
  });

  it('Verify cancel button', () => {  
    app.addUserPage.clickCancelBtn();
    let url = Cypress.env('BASE_URL') + '/'+region+'/edit-profile';
    app.getURL().should('contain', url);
  });

})
*/
