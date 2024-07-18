import BasePage from "../BasePage";

export default class AddUserPage extends BasePage {

  private url = '/create-team-member';
  private section_breadcrumb = '//li[contains(text(),"VELUX Rewards - Gegevens")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private section = '//div[contains(@class,"sign-up-section")]';
  private sectionHeading = '//div[contains(@class,"sign-up-section")]//h4[text()=" Teamleden Toevoegen "]';
  private save_details_btn = '//span[text()="Details Opslaan"]/parent::button';
  private cancel_btn = '//span[text()="Annuleren"]/parent::a';
  private first_name_field = '//input[@placeholder="Voornaam"]';
  private last_name_field = '//input[@placeholder="Achternaam"]';
  private email_field = '//input[@placeholder="E-mail contactpersoon"]';
  private mobile_field = '//input[@id="mobile"]';
  private mobile_verify_field = '//input[@id="mobile_verify"]';

  mobileVerifyFieldElement(){
    return this.element(this.mobile_verify_field);
  }

  mobileFieldElement(){
    return this.element(this.mobile_field);
  }

  emailFieldElement(){
    return this.element(this.email_field);
  }

  lastNameFieldElement(){
    return this.element(this.last_name_field);
  }

  firstNameFieldElement(){
    return this.element(this.first_name_field);
  }

  saveDetailsBtnElement(){
    return this.element(this.save_details_btn);
  }

  cancelBtnElement(){
    return this.element(this.cancel_btn);
  }

  clickCancelBtn(){
    return this.click(this.cancel_btn);
  }

  sectionBreadcrumbElement(){
    return this.element(this.section_breadcrumb);
  }
  
  sectionElement(){
    return this.element(this.section);
  }

  sectionHeadingElement(){
    return this.element(this.sectionHeading);
  }

  viewSection(){
    this.inView(this.section);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
