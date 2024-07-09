import BasePage from "../BasePage";

export default class ChantierPage extends BasePage {

  private url = '/assistance-chantier';
  private section_breadcrumb = '//li[contains(text(),"VELUX & CO - Assistance Chantier")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private section_div = '.sign-up-section';
  private heading = '//h4[text()=" Assistance Chantier "]';

  sectionBreadcrumbElement(){
    return this.element(this.section_breadcrumb);
  }

  sectionDivElement(){
    return this.element(this.section_div);
  }

  headingElement(){
    return this.element(this.heading);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
