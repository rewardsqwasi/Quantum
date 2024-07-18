import BasePage from "../BasePage";

export default class TakebackPage extends BasePage {

  private url = '/takeback';
  private section_breadcrumb = '//li[contains(text(),"VELUX Rewards - Takeback")]/parent::ul/parent::div[contains(@class,"breadcrumb-section")]';
  private section_div = '//section';
  private section_heading = '//h1[text()="Puntengegevens"]';
  private reward_detail_div = '#reward-details';
  private amount_select = '//select[@id="amount"]';
  private cancel_btn = '//a[contains(text(),"Annuleren")]';
  private select_btn = '//span[contains(text(),"Wissel in")]/parent::button';
  private takeback_link = '//a[text()="takeback.velux.nl"]'

  amountSelectElement(){
    return this.element(this.amount_select);
  }

  takebackLinkElement(){
    return this.element(this.takeback_link);
  }

  cancelBtnElement(){
    return this.element(this.cancel_btn);
  }

  selectBtnElement(){
    return this.element(this.select_btn);
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

  rewardDetailDivElement(){
    return this.element(this.reward_detail_div);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
