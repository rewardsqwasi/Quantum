import BasePage from "../BasePage";

export default class RewardsHistoryPage extends BasePage {

  private url = '/rewards-history';
  private section = '(//section)[1]';
  private section_heading = '//section//p//b[text()="Verzögerungen bei der Gutscheinbestellung"]';
  private my_vouchers_tab = '//li[text()="Meine Gutscheine"]';
  private all_vouchers_tab = '//li[text()="Alle Gutscheine"]';
  private sidebar_div = '//div[@id="sidebar"]';
  private claim_reward_btn = '//div[@id="point-details"]/a[text()="Punkte einlösen"]';
  private my_vouchers_btn = '//div[@id="point-details"]/a[text()="Meine Gutscheine"]';
  private all_vouchers_btn = '//div[@id="point-details"]/a[text()="Alle Gutscheine"]';

  allVouchersBtnElement(){
    return this.element(this.all_vouchers_btn);
  }

  myVouchersBtnElement(){
    return this.element(this.my_vouchers_btn);
  }

  claimRewardBtnElement(){
    return this.element(this.claim_reward_btn);
  }

  sidebarDivElement(){
    return this.element(this.sidebar_div);
  }

  sectionHeadingElement(){
    return this.element(this.section_heading);
  }
  
  sectionElement(){
    return this.element(this.section);
  }

  myVouchersTabElement(){
    return this.element(this.my_vouchers_tab);
  }

  allVouchersTabElement(){
    return this.element(this.all_vouchers_tab);
  }
  
  viewSection(){
    this.inView(this.section);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
