import BasePage from "../BasePage";

export default class MyProjectPage extends BasePage {

  private url = '/mon-projet';
  private section_breadcrumb = '//li[contains(text(),"VELUX & CO - Mon Projet")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private section_div = '//section';
  private section_heading = '//h4[text()=" Pour en profiter, c\'est simple!"]';
  private section_form_text = '//p[text()="Remplissez le formulaire ci-dessous."]';
  private communication_services_list = '//h4[text()=" Communication"]//following-sibling::ul';
  private professional_events_list = '//h4[text()=" Evènements professionnels"]//following-sibling::ul';
  private domain_select = '#domain';
  private points_input_field = '//input[@id="points"]';
  private comments_input_field = '//textarea[@id="comment"]';
  private cancel_btn = '//span[contains(text(),"Annuler de demande")]/parent::a';
  private continue_btn = '//span[contains(text(),"Continuer")]/parent::button';
  private events_table_div = '//div[@id="showroom-table"]';
  private communication_table_div = '//div[@id="communication-table"]';

  eventsTableDivElement(){
    return this.element(this.events_table_div);
  }

  communicationTableDivElement(){
    return this.element(this.communication_table_div);
  }
  
  selectDomain(domain: string){
    this.select(this.domain_select, domain);
  }

  cancelBtnElement(){
    return this.element(this.cancel_btn);
  }

  continueBtnElement(){
    return this.element(this.continue_btn);
  }

  domainSelectElement(){
    return this.element(this.domain_select);
  }

  pointsInputFieldElement(){
    return this.element(this.points_input_field);
  }

  commentsInputFieldElement(){
    return this.element(this.comments_input_field);
  }

  sectionBreadcrumbElement(){
    return this.element(this.section_breadcrumb);
  }

  sectionDivElement(){
    return this.element(this.section_div);
  }

  sectionHeadingElement(){
    return this.element(this.section_heading);
  }

  sectionFormTextElement(){
    return this.element(this.section_form_text);
  }
  
  communicationServicesListElement(){
    return this.element(this.communication_services_list);
  }

  professionalEventsListElement(){
    return this.element(this.professional_events_list);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
