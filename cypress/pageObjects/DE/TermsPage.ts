import BasePage from "../BasePage";

export default class TermsPage extends BasePage {

  private url = '/terms-and-conditions';
  private section_heading = '(//section//h2)[1]';
  private section = '//section';
  private partner_program_link = '//a[text()="Mehr Informationen zum VELUX Partnerprogramm"]';
  private send_request_button = '//input[@value="Anfrage senden" and @type="submit"]';
  private partner_select ='//select[@id="type"]';
  private meet_criteria_checkbox = '//input[@id="matchCriteria" and @type="checkbox"]';
  private terms_condtion_checkbox = '//input[@id="termsCondition" and @type="checkbox"]';
  private accepted_checkbox = '//input[@id="accepted" and @type="checkbox"]';

  meetCriteriaCheckboxElement(){
    return this.element(this.meet_criteria_checkbox);
  }

  termsCondtionCheckboxElement(){
    return this.element(this.terms_condtion_checkbox);
  }

  acceptedCheckboxElement(){
    return this.element(this.accepted_checkbox);
  }

  partnerSelectElement(){
    return this.element(this.partner_select);
  }

  sendRequestButtonElement(){
    return this.element(this.send_request_button);
  }

  partnerProgramLinkElement(){
    return this.element(this.partner_program_link);
  }

  clickPartnerProgramLink(){
    return this.click2(this.partner_program_link);
  }

  sectionHeadingElement(){
    return this.element(this.section_heading);
  }
  
  sectionElement(){
    return this.element(this.section);
  }

  viewSection(){
    this.inView(this.section);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
