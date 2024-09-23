import BasePage from "../BasePage";

export default class PartnersPage extends BasePage {

  private url = '/partners';
  private section = '(//section)[1]';
  private section_heading = '//section//h1[text()="Punkte einlösen"]'
  private eduscho_select_btn = '//a[text()="Wählen" and contains(@href,"/partners/293")]';
  private eduscho_div = '//div[@class="row"]//h2[text()="Eduscho (Tchibo)"]';
  private amazon_select_btn = '//a[text()="Wählen" and contains(@href,"/partners/1")]';
  private amazon_div = '//div[@class="row"]//p[text()="Amazon Gutscheine"]';
  private media_select_btn = '//a[text()="Wählen" and contains(@href,"/partners/8")]';
  private media_div = '//div[@class="row"]//h2[text()="Media Markt"]';
  private bonus_detail_heading = '//h1[text()="Bonusdetails"]';
  private reward_detail_element = '//div[@id="reward-details"]';

  rewardDetailElement(){
    return this.element(this.reward_detail_element);
  }

  bonusDetailHeadingElement(){
    return this.element(this.bonus_detail_heading);
  }

  mediaDivElement(){
    return this.element(this.media_div);
  }

  gotoMedia(){
    this.click(this.media_select_btn);
  }

  amazonDivElement(){
    return this.element(this.amazon_div);
  }

  gotoAmazon(){
    this.click(this.amazon_select_btn);
  }

  sectionHeadingElement(){
    return this.element(this.section_heading);
  }

  sectionElement(){
    return this.element(this.section);
  }
  
  eduschoDivElement(){
    return this.element(this.eduscho_div);
  }

  gotoEduscho(){
    this.click(this.eduscho_select_btn);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
