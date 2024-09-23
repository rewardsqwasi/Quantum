import BasePage from "../BasePage";

export default class RewardsHistoryPage extends BasePage {

  private url = '/rewards-history';
  private section = '(//section)[1]';
  private section_heading = '//section//h1[text()="Eingelöste Punkte überprüfen"]'
  private my_vouchers_tab = '//li[text()="My Vouchers"]';

  sectionHeadingElement(){
    return this.element(this.section_heading);
  }
  
  sectionElement(){
    return this.element(this.section);
  }

  myVouchersTabElement(){
    return this.element(this.my_vouchers_tab);
  }
  
  viewSection(){
    this.inView(this.section);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
