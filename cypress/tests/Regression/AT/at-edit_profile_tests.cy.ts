import App from 'cypress/pageObjects/AT/AppPage';

const IS_PROD = Cypress.env('IS_PROD');
const member = {
  "email": Cypress.env('MEMBER_EMAIL_AT'),
  "password": Cypress.env('MEMBER_PASSWORD_AT')
};
let app = new App();
let region = 'at';

describe('AT Region - Edit Profile Tests', () => {
  let data;
  before(() => {
    app.loginPage.allowCookie();
    app.loginPage.open(region);
    app.loginPage.login(member.email, member.password);
    if(IS_PROD==="true"){
      app.loadFixture('prod/at.json').then((d) => {
        data = d;
      });
    }
    else{
      app.loadFixture('stage/at.json').then((d) => {
        data = d;
      });
    }
  });

  it('Verify Page URL', () => {
    app.homePage.clickEditProfileLink();
    let url = Cypress.env('DACH_BASE_URL')+'.'+region+'/'+region+'/edit-profile';
    app.getURL().should('contain', url);
  });

  it('Verify Page Title', () => {
    app.getPageTitle().should('eq','VELUX Handwerker Bonusclub - Profil / Konto bearbeiten');
  });

  it('Verify Profile Section', () => {
    app.profilePage.sectionElement().should('be.visible');
    app.profilePage.viewSection();
    app.profilePage.sectionHeadingElement().should('be.visible');
  });

  it('Verify "profile details" fields exist and inputs can be given.', () => {  
    app.profilePage.customerIdFieldElement().should('be.visible');
    app.profilePage.firstNameFieldElement().should('be.visible');
    app.profilePage.lastNameFieldElement().should('be.visible');
    app.profilePage.companyNameFieldElement().should('be.visible');
    app.profilePage.companyNumberFieldElement().should('be.visible');
    app.profilePage.address1FieldElement().should('be.visible');
    app.profilePage.address2FieldElement().should('be.visible');
    app.profilePage.postcodeFieldElement().should('be.visible');
    app.profilePage.townFieldElement().should('be.visible');
    app.profilePage.emailFieldElement().should('be.visible');
    app.profilePage.mobileFieldElement().should('be.visible');
    app.profilePage.firstNameFieldElement().should('have.value', data.firstName);
    app.profilePage.lastNameFieldElement().should('have.value', data.lastName);
    app.profilePage.emailFieldElement().should('have.value', data.email);
    app.profilePage.companyNameFieldElement().should('have.value', data.companyName);
  });

  it('Verify that user is not able to edit the read only fields.', () => {  
    app.profilePage.customerIdFieldElement().should('have.attr', 'readonly', 'readonly');
    app.profilePage.mobileFieldElement().should('have.attr', 'readonly', 'readonly');
  });

  it('Verify questions and inputs in the "A little bit about you and your company" exist', () => {  
    app.profilePage.howManyPeopleSelectElement().should('be.visible');
    app.profilePage.howManyEmployeeSelectElement().should('be.visible');
    app.profilePage.howManyRoofSelectElement().should('be.visible');
    app.profilePage.howManyVeluxSelectElement().should('be.visible');
    app.profilePage.veluxRewardsQuesElement().should('be.visible');
    app.profilePage.recommendVeluxSelectElement().should('be.visible');
  });

  it('Verify the answers are pre-populated when the edit profile page is accessed.', () => {  
    app.profilePage.howManyPeopleSelectElement().find('option:selected').should('have.length', 1);
    app.profilePage.howManyEmployeeSelectElement().should('have.attr', 'value').and('match',/^[0-9]+$/);
    app.profilePage.howManyRoofSelectElement().should('have.attr', 'value').and('match',/^[0-9]+$/);
    app.profilePage.howManyVeluxSelectElement().find('option:selected').should('have.length', 1);
    app.profilePage.veluxRewardsQuesElement().find('option:selected').should('have.length', 1);
    app.profilePage.recommendVeluxSelectElement().find('option:selected').should('have.length', 1);
  });

})
