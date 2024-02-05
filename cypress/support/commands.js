/// <reference types="Cypress" />

//import loginData from "../fixtures/loginData.json"
//const login = require("../business logic/login")


/* ------------------------------- Technical helper functions ------------------------------- */

/*
    All technical helper functions goes here. These are tool/framework focused e.g.

    clickButton()
    assertTextContent()
    assertElementValueOnChange()
    selectDropdown()
    ...
*/

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
