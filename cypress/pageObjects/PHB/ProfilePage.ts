import BasePage from "../BasePage";

export default class ProfilePage extends BasePage {

  private url = '/edit-profile';
  private section = '//section';
  private sectionHeading = '//section//h2[text()="Mein Profil - Unternehmensdaten"]';
  private form = '//form[contains(@action,"/de/update-account")]';
  private how_many_people_select = '//div[@id="q3CoreWrapper"]//select';
  private how_many_roof_input = '//div[@id="q5CoreWrapper"]//input';
  private how_many_velux_select = '//div[@id="q6CoreWrapper"]//select';
  private first_name_field = '#firstName';
  private last_name_field = '#lastName';
  private company_name_field = '#company_name';
  private company_phone_field = '#companyPhone';
  private address_1_field = '#address_line1';
  private postcode_field = '#postcode';
  private town_field = '#town_county';
  private mobile_field = '#mobile';
  private email_field = '#email';
  private customer_id_field = '//input[@readonly="readonly" and @id="customerID"]';

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

  companyPhoneFieldElement(){
    return this.element(this.company_phone_field);
  }

  address1FieldElement(){
    return this.element(this.address_1_field);
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

  howManyRoofInputElement(){
    return this.element(this.how_many_roof_input);
  }

  howManyVeluxSelectElement(){
    return this.element(this.how_many_velux_select);
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
