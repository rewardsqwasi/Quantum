import 'cypress-xpath';
import { createHistogram } from 'perf_hooks';

export default class BasePage {

    element(locator: string): Cypress.Chainable<JQuery<HTMLElement>>{
        let element: Cypress.Chainable<JQuery<HTMLElement>>;
        if (locator.startsWith('/') || locator.startsWith('(/')) {
            element = cy.xpath(locator);
        } else {
            element = cy.get(locator);
        }
        return element;
    }

    click(locator: string) {
        this.element(locator).click({ force: true });
    }

    click2(locator: string) {
        this.element(locator).click();
    }

    
    select(locator: string, option) {
        this.element(locator).select(option, { force: true });
    }

    check(locator: string) {
        this.element(locator).check({ force: true });
    }

    selectFile(locator: string, file: string) {
        cy.fixture(file).as('file')
        this.element(locator).selectFile('@file',{
            action: 'drag-drop'
          });
    }

    selectFile2(locator: string, file: string) {
        this.element(locator).attachFile(file);
    }

    forceClick(locator: string) {
        this.element(locator).invoke("removeAttr", "target").click({ force: true })
    }

    hover(locator: string) {
        this.element(locator).trigger("mouseover");
    }

    goToUrl(url: string) {
        cy.visit(url);
    }

    type(locator: string, text: string) {
        this.element(locator).clear().type(text);
    }

    pressKey(locator: string, key: string) {
        this.element(locator).type(key);
    }

    inner_text(locator: string): Cypress.Chainable<string> {
        return this.element(locator).invoke("text");
    }

    getAttributeValue(locator: string, name: string): Cypress.Chainable<string> {
        return this.element(locator).invoke("attr",name);
    }

    isElementPresent(locator: string): Cypress.Chainable<boolean> {
        return this.element(locator).then(($element) => $element.length > 0);
    }

    getURL(){
        return cy.url();
    }

    getPageTitle(){
        return cy.title();
    }

    wait(time: number){
        cy.wait(time);
    }

    inView(locator: string){
        this.element(locator).scrollIntoView();
    }

    removeFromDom(locator: string){
        this.element(locator).invoke('remove');
    }

    getRequest(url: string){
        try {
            cy.request({
                    method:'GET',
                    url: url,
            }).then((response) => {
                let body = response.body;
                console.log("GET RESPONSE FROM BASE: "+body);
                return body;
            });    
        } catch(error) {
            console.log('An error occurred:', error);
            return null;
        }
    }

    getRequest3(url: string){
        return new Cypress.Promise((resolve, reject) => {
            cy.request ({
                method: 'GET',
                url: url
            })
            .then(response =>  resolve(response.body))
        })
    }

    deleteRequest(url: string){
        return new Cypress.Promise((resolve, reject) => {
            cy.request ({
                method: 'DELETE',
                url: url
            })
            .then(response =>  resolve(response.body))
        })
    }

    renderContent(url: string, content: string){
        cy.intercept(url, (req) => {
            req.reply(content);
        }).as('contentRoute');
        cy.visit(url);
        cy.wait('@contentRoute');
    }

    log(any: any){
        cy.log(any);
    }

}
