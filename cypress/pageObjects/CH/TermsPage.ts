import BasePage from "../BasePage";

export default class TermsPage extends BasePage {

  private url = '/terms-and-conditions';
  private section_heading = '//section//h1';
  private section = '//section';

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
