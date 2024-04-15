/// <reference types="Cypress" />
import 'cypress-xpath';
import 'cypress-file-upload';
import ukLoginData from "../fixtures/ukLoginData.json"
import ukLoginLocators from "../locators/ukLoginLocators.json"
import ukAdminLoginLocators from "../locators/ukAminLoginLocators.json"
import ukAdminLoginData from "../fixtures/ukAdminLoginData.json"


Cypress.Commands.add('UK_LOGIN_MEMBER', () => {
    cy.visit("https://stage.memberportal.velux.qwasi.com/uk/login");

    cy.viewport(1280, 720);
    
    cy.get(ukLoginLocators.email).type(ukLoginData.email);
    cy.get(ukLoginLocators.password).type(ukLoginData.password);
    cy.get(ukLoginLocators.loginBtn).click({ force: true });

    cy.url().should('include', 'uk/home');
})


Cypress.Commands.add('UK_LOGIN_Primary', () => {
    cy.visit("https://stage.memberportal.velux.qwasi.com/uk/login");

    cy.viewport(1280, 720);
    
    cy.get(ukLoginLocators.email).type(ukLoginData.email2);
    cy.get(ukLoginLocators.password).type(ukLoginData.password2);
    cy.get(ukLoginLocators.loginBtn).click({ force: true });

    cy.url().should('include', 'uk/home');
})


Cypress.Commands.add('UK_LOGIN_Admin', () => {
    cy.visit("https://stage.velux.qwasi.com/Loyalty/admin/index.php");

    cy.viewport(1280, 720);
    
    
    cy.get(ukAdminLoginLocators.username).type(ukAdminLoginData.username);
    cy.get(ukAdminLoginLocators.password).type(ukAdminLoginData.password);
    cy.get(ukAdminLoginLocators.submitbtn).click();

    
})
Cypress.Commands.add('NL_LOGIN_MEMBER', () => {
    cy.visit("https://stage.memberportal.velux.qwasi.com/nl");

    cy.viewport(1280, 720);
    
    cy.get(ukLoginLocators.email).type(ukLoginData.email3);
    cy.get(ukLoginLocators.password).type(ukLoginData.password3);
    cy.get(ukLoginLocators.loginBtn).click({ force: true });

    cy.url().should('include', 'nl/home');
})

Cypress.Commands.add('FR_LOGIN_MEMBER', () => {
    cy.visit("https://stage.memberportal.velux.qwasi.com/fr");

    cy.viewport(1280, 720);
    
    cy.get(ukLoginLocators.email).type(ukLoginData.email3);
    cy.get(ukLoginLocators.password).type(ukLoginData.password3);
    cy.get(ukLoginLocators.loginBtn).click({ force: true });

    cy.url().should('include', 'fr/home');
})

Cypress.Commands.add("clickButton", (selector, isForced, index) => {
    index = index || 0
    if (isForced)
        cy.get(selector).eq(index).click({ force: true })
    else
        cy.get(selector).eq(index).click()
})

Cypress.Commands.add("fillField", (selector, text, isUnique, index) => {
    index = index || 0
    cy.get(selector).eq(index).clear()
    if (isUnique) {
        const uniqueText = text + "_" + window.uniqueId
        cy.get(selector).eq(index).type(uniqueText)
    }
    else
        cy.get(selector).eq(index).type(text, { parseSpecialCharSequences: false })
})

Cypress.Commands.add("fillJson", (selector, jsonArray) => {
    cy.get(selector).clear({ force: true }).focus()
    for (let line in jsonArray) {
        cy.get(selector).type(jsonArray[line], { parseSpecialCharSequences: false })
        cy.get(selector).type("{enter}")
    }
})

Cypress.Commands.add("fillCode", (selector, code) => {
    cy.get(selector).clear({ force: true }).focus()
    for (let line in code) {
        cy.get(selector).type(code[line], { force: true, parseSpecialCharSequences: false })
        cy.get(selector).type("{enter}", { force: true })
    }
    cy.get(selector).type("{del}", { force: true })
    cy.get(selector).type("{del}", { force: true })
    cy.get(selector).type("{del}", { force: true })
})

Cypress.Commands.add("selectFromDropdown", (selector, option, index) => {
    index = index || 0
    cy.get(selector.menu).eq(index).click().parent().find(selector.option).contains(option).click()
})

Cypress.Commands.add("isElementVisible", (selector, index) => {
    index = index || 0
    cy.get(selector).eq(index).should("be.visible")
})

Cypress.Commands.add("assertText", (selector, text, index) => {
    index = index || 0
    cy.get(selector).eq(index).should("have.text", text)
})

Cypress.Commands.add("assertValue", (selector, text, index) => {
    index = index || 0
    cy.get(selector).eq(index).should("have.value", text)
})

Cypress.Commands.add("containsText", (selector, text) => {
    cy.get(selector).should('be.visible').and('contain', text)
})

Cypress.Commands.add("assertPageUrl", (route) => {
    cy.url().should('include', route)
})

/* --------------------------------------------------------------------------------------------- */


Cypress.Commands.add("saveLocalStorage", () => {
    Object.keys(localStorage).forEach(key => {
        LOCAL_STORAGE_MEMORY[key] = localStorage[key]
    })
})


Cypress.Commands.add("login", () => {
    cy.session('Authtokken', () => {
        cy.request({
            method: 'GET',
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            followRedirect: true,
            form: true,
            body: {
                username: 'Admin',
                password: 'admin123'
            }

        }).then(() => {
            Cypress.Cookies.debug(true);

            // Visit a page to set the cookie in the browser
            cy.visit('/dashboard/index')

            // Get the cookie directly from the browser
            cy.getCookie('orangehrm').then((cookie) => {
                const authToken = cookie.value;
                cy.setCookie('session_id', authToken)
            })
        })






    })
})

let LOCAL_STORAGE_MEMORY = {};
Cypress.Commands.add("saveLocalStorage", () => {
    Object.keys(localStorage).forEach(key => {
        LOCAL_STORAGE_MEMORY[key] = localStorage[key]
    })
})

Cypress.Commands.add("restoreLocalStorage", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
        localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key])
    })
})

// commands.js
Cypress.Commands.add('Logininapplication', () => {
    cy.visit('/auth/login')
    login.typeUserName(loginData.UserName)
    login.typePassword()
    login.clickLogin()
    login.assertDashboard()
})
