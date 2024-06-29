import BasePage from "../BasePage";

export default class ProfilePage extends BasePage {

  private url = '/edit-profile';
  private section_breadcrumb = '//li[contains(text(),"VELUX & CO - Modifier mon profil")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private section = '//div[contains(@class,"sign-up-section")]';
  private sectionHeading = '//div[contains(@class,"sign-up-section")]//h4[text()=" Votre profil "]';
  private how_many_people_select = '//select[@id="q3Core"]';
  private working_time_select = '//select[@id="q9Core"]';
  private how_many_roof_select = '//input[@id="q5Core"]';
  private how_many_velux_select = '//select[@id="q6Core"]';
  private describe_yourself_select = '//select[@id="q7Core"]';
  private recommend_velux_select = '//select[@id="q2Core"]';
  private first_name_field = '#firstName';
  private last_name_field = '#lastName';
  private company_name_field = '#companyName';
  private company_number_field = '#companyNumber';
  private address_1_field = '#address1';
  private address_2_field = '#address2';
  private postcode_field = '#postcode';
  private town_field = '#town';
  private mobile_field = '#mobile';
  private email_field = '#email';
  private customer_id_field = '//input[@id="disabled-input"]';

  customerIdFieldElement(){
    return this.element(this.customer_id_field);
  }

  firstNameFieldElement(){
    return this.element(this.first_name_field);
  }

  lastNameFieldElement(){
    return this.element(this.last_name_field);
  }

  companyNameFieldElement(){
    return this.element(this.company_name_field);
  }

  companyNumberFieldElement(){
    return this.element(this.company_number_field);
  }

  address1FieldElement(){
    return this.element(this.address_1_field);
  }

  address2FieldElement(){
    return this.element(this.address_2_field);
  }

  postcodeFieldElement(){
    return this.element(this.postcode_field);
  }

  townFieldElement(){
    return this.element(this.town_field);
  }

  mobileFieldElement(){
    return this.element(this.mobile_field);
  }

  emailFieldElement(){
    return this.element(this.email_field);
  }

  howManyPeopleSelectElement(){
    return this.element(this.how_many_people_select);
  }

  workingTimeSelectElement(){
    return this.element(this.working_time_select);
  }

  howManyRoofSelectElement(){
    return this.element(this.how_many_roof_select);
  }

  howManyVeluxSelectElement(){
    return this.element(this.how_many_velux_select);
  }

  describeYourselfSelectElement(){
    return this.element(this.describe_yourself_select);
  }

  recommendVeluxSelectElement(){
    return this.element(this.recommend_velux_select);
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
