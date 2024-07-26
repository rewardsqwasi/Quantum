import BasePage from "../BasePage";

export default class ContactUsPage extends BasePage {

  private url = '/contact';
  private email = '//a[contains(@href,"mailto")]';
  private section_breadcrumb = '//li[contains(text(),"VELUX Rewards - Contact")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private section = '//section';
  private image = '//div[contains(@class,"pageBlockCustom")]//*[contains(@style,"/page-blocks/") or contains(@src,"/page-blocks/")]';
  private heading = '//h2';

  headingElement(){
    return this.element(this.heading);
  }

  sectionBreadcrumbElement(){
    return this.element(this.section_breadcrumb);
  }
  
  sectionElement(){
    return this.element(this.section);
  }

  imageElement(){
    return this.element(this.image);
  }

  emailElement(){
    return this.element(this.email);
  }

  viewSection(){
    this.inView(this.section);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
