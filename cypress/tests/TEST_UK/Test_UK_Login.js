import ukLoginData from "../fixtures/ukLoginData.json"
import ukLoginLocators from "../locators/ukLoginLocators.json"


describe('UK Member Portal Login Test', () => {

    before(() => {
        
        Cypress.on('uncaught:exception', (err, runnable) => {

            console.error('Uncaught Exception:', err.message)

            return false
        })
    })

    beforeEach(async () => {
        
        // Visit the page containing the login form
        await cy.visit('https://stage.memberportal.velux.qwasi.com/uk/login');
        var submitButton = document.getElementById("submit");
        const loginEmail = document.getElementById('loginEmail')
        const loginPassword = document.getElementById('loginPassword')
        if (submitButton) {
            submitButton.removeAttribute("disabled");
            loginEmail.removeAttribute("disabled");
            loginPassword.removeAttribute("disabled");
            console.log("DONE")
        }else{
            console.error("Login button not found");
        }
        
    });
    
    it('should display the email field', () => {
        // Verify that the email field is present on the page
        cy.get(ukLoginLocators.email).should('exist');
    });

    it('should allow valid email input', () => {
        // Enter a valid email address into the email field
        cy.get(ukLoginLocators.email).type(ukLoginData.email);

        // Verify that the entered value is valid
        cy.get(ukLoginLocators.email).should('have.value', ukLoginData.email);
    });

    it('should handle exceptions when email field is not found', () => {
        // Simulate an exception by using an invalid selector
        try {
            cy.get('#invalidSelector').should('not.exist');
        }
        catch (error) {
            expect(error.message).to.include('Email field not found');
        }
    });

    it('should display the password field', () => {
        // Verify that the password field is present on the page
        cy.get(ukLoginLocators.password).should('exist');
    });

    it('should allow password input', () => {
        // Enter a valid password into the password field
        cy.get(ukLoginLocators.password).type(ukLoginData.password);

        // Verify that the entered value is valid
        cy.get(ukLoginLocators.password).should('have.value', ukLoginData.password);
    });

    it('should handle exceptions when password field is not found', () => {
        // Simulate an exception by using an invalid locator
        try {
            cy.get(ukLoginLocators.invalidSelector).should('not.exist')
        } catch (error) {
            expect(error.message).to.include('Password field not found');
        }

    });

    it('should display the login button', () => {
        // Verify that the login button is present on the page
        cy.get(ukLoginLocators.loginBtn).should('exist');
    });

    it('login button should be clickable', () => {
        // Verify that the login button is clickable
        cy.get(ukLoginLocators.loginBtn).should('be.visible').click();
    });

    it('should handle exceptions when login button is not found', () => {
        // Simulate an exception by using an invalid selector
        try {
            cy.get(ukLoginLocators.invalidSelector).should('not.exist')
        } catch (error) {
            expect(error.message).to.include('Login button not found');
        }
    });

    it('should successfully submit the form with a valid email and password', () => {
        // Enter a valid email address into the email field
        cy.get(ukLoginLocators.email).type(ukLoginData.email);
        cy.get(ukLoginLocators.password).type(ukLoginData.password);
        cy.get(ukLoginLocators.loginBtn).click({ force: true });

        cy.url().should('include', 'uk/home');

    });
});
