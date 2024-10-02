import BasePage from "../BasePage";

export default class ContactUsPage extends BasePage {

  private url = '/contact';
  private section = '//section';
  private image = '//section//img';
  private heading = '(//h1)[1]';

  headingElement(){
    return this.element(this.heading);
  }
  
  sectionElement(){
    return this.element(this.section);
  }

  imageElement(){
    return this.element(this.image);
  }

  viewSection(){
    this.inView(this.section);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
