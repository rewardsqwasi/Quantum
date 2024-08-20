import BasePage from "../BasePage";

export default class TermsPage extends BasePage {

  private url = '/terms-and-conditions';
  private section_breadcrumb = '//li[contains(text(),"VELUX Club - Conditions Générales")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private section = '//section';

  sectionBreadcrumbElement(){
    return this.element(this.section_breadcrumb);
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
