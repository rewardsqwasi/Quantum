import BasePage from "../BasePage";

export default class TicketsPage extends BasePage {

  private url = '/tickets';
  private section_breadcrumb = '//li[contains(text(),"VELUX Bonus - Løs inn bonus")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private section_div = '.shop-section';
  private future_event_heading = '//h1[contains(text(),"Kommende arrangementer")]';
  private past_event_heading = '//h1[contains(text(),"Tidligere arrangementer")]';
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