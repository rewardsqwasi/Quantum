import BasePage from "../BasePage";

export default class VisitsPage extends BasePage {

  private url = '/visits';
  private section_breadcrumb = '//li[contains(text(),"VELUX & CO - Convertir mes points")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private section_div = '.shop-section';
  private future_event_heading = '//h1[contains(text(),"Évènements Å Venir")]';
  private past_event_heading = '//h1[contains(text(),"Évènements Passés")]';
  private events_div = '//div[contains(@class,"products-1-section")]//div[contains(@class,"card-container")]';

  sectionBreadcrumbElement(){
    return this.element(this.section_breadcrumb);
  }

  sectionDivElement(){
    return this.element(this.section_div);
  }

  futureEventHeadingElement(){
    return this.element(this.future_event_heading);
  }

  pastEventHeadingElement(){
    return this.element(this.past_event_heading);
  }

  eventsDivElement(){
    return this.element(this.events_div);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
