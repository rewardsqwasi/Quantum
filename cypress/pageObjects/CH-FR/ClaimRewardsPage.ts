import BasePage from "../BasePage";

export default class ClaimRewardsPage extends BasePage {

  private url = '/claim-rewards';
  private section = '//div[@id="content"]/section';
  private section_heading = '//section//h2[text()="VELUX & moi"]';
  private section_heading_2 = '//section//h2[text()="Partenaires de primes"]';
  private dealer_select_btn = '//a[text()="Sélectionner" and contains(@href,"/dealers")]';
  private dealer_div = '//div[@class="row"]//h3/a[text()="Trouvez votre revendeur préféré"]';
  private zalando_select_btn = '//a[text()="Sélectionner" and contains(@href,"/partners/21")]';
  private zalando_div = '//div[@class="row"]//h3/a[text()="Zalando"]';
  private ticketcorner_select_btn = '//a[text()="Sélectionner" and contains(@href,"/partners/22")]';
  private ticketcorner_div = '//div[@class="row"]//h3/a[text()="Ticketcorner"]';
  private media_select_btn = '//a[text()="Sélectionner" and contains(@href,"/partners/23")]';
  private media_div = '//div[@class="row"]//h3/a[text()="Media Markt"]';
  private manor_select_btn = '//a[text()="Sélectionner" and contains(@href,"/partners/24")]';
  private manor_div = '//div[@class="row"]//h3/a[text()="Manor"]';
  private coop_select_btn = '//a[text()="Sélectionner" and contains(@href,"/partners/25")]';
  private coop_div = '//div[@class="row"]//h3/a[text()="Coop"]';
  private bonus_detail_heading = '//h1[text()="Détails des points"]';
  private reward_detail_element = '//div[@id="reward-details"]';
  private cancel_btn = '//a[text()="Annuler"]';
  private sidebar_div = '//div[@id="sidebar"]';
  private claim_reward_btn = '//div[@id="point-details"]/a[text()="Echanger des points"]';
  private my_vouchers_btn = '//div[@id="point-details"]/a[text()="Mes bons"]';
  private all_vouchers_btn = '//div[@id="point-details"]/a[text()="Tous les bons"]';

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

  clickCancelBtn(){
    this.click(this.cancel_btn);
  }

  rewardDetailElement(){
    return this.element(this.reward_detail_element);
  }

  bonusDetailHeadingElement(){
    return this.element(this.bonus_detail_heading);
  }

  sectionHeading2Element(){
    return this.element(this.section_heading_2);
  }

  dealerDivElement(){
    return this.element(this.dealer_div);
  }

  gotoDealer(){
    this.click(this.dealer_select_btn);
  }

  coopDivElement(){
    return this.element(this.coop_div);
  }

  gotoCoop(){
    this.click(this.coop_select_btn);
  }

  manorDivElement(){
    return this.element(this.manor_div);
  }

  gotoManor(){
    this.click(this.manor_select_btn);
  }

  mediaDivElement(){
    return this.element(this.media_div);
  }

  gotoMedia(){
    this.click(this.media_select_btn);
  }

  zalandoDivElement(){
    return this.element(this.zalando_div);
  }

  gotoZalando(){
    this.click(this.zalando_select_btn);
  }

  sectionHeadingElement(){
    return this.element(this.section_heading);
  }

  sectionElement(){
    return this.element(this.section);
  }
  
  ticketcornerDivElement(){
    return this.element(this.ticketcorner_div);
  }

  gotoTicketcorner(){
    this.click(this.ticketcorner_select_btn);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}
