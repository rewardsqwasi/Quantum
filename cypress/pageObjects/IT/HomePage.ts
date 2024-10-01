import BasePage from "../BasePage";

export default class HomePage extends BasePage {
 
  private url = '/home';
  private main_btn = '(//span[contains(text(),"Pagina iniziale")]/parent::a)[1]';
  private add_purchase_btn = '(//span[contains(text(),"Accumula punti")]/parent::a)[1]';
  private points_history_btn = '(//span[contains(text(),"Status Richieste")]/parent::a)[1]';
  private spend_points_btn = '(//span[contains(text(),"Spendi punti")]/parent::a)[1]';
  private rewards_history_btn = '//span[contains(text(),"Storico Premi")]/parent::a';
  private rewards_calculator_btn = '(//span[contains(text(),"Calcolatore")]/parent::a)[1]';
  private dashboard_btn = '(//span[contains(text(),"Statistiche")]/parent::a)[1]';
  private banner_section_div = '(//div[contains(@class,"banners-section")])[1]';
  private swiper_banner_dev = '//div[contains(@class,"banners-section")]//div[contains(@class,"swiper-container")]';
  private mini_dashboard_banner_div = '//div[contains(@onclick,"/store-mini-dashboard-click")]';
  private current_point_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Punti disponibili"])[1]';
  private points_earned_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Punti accumulati"])[1]';
  private points_spent_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Punti spesi"])[1]';
  private total_points_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[contains(text(),"I tuoi punti")])[1]';
  private bonus_level_chart = '(//canvas[@id="bonusLevelChart"])[1]';
  private add_purchase_CTA = '//h6[contains(text(),"Accumula punti")]//ancestor::a';
  private spend_points_CTA = '//h6[contains(text(),"Spendi i tuoi punti")]//ancestor::a';
  private reward_calculator_CTA = '//h6[contains(text(),"Calcolatore")]//ancestor::a';
  private claim_rewards_div = '(//h1[contains(text(),"Richiedi i tuoi premi")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private claim_rewards_heading = '//h1[contains(text(),"Richiedi i tuoi premi")]/parent::div';
  private stay_informed_div = '(//h1[contains(text(),"MIGLIORA OGNI GIORNO")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private stay_informed_heading = '//h1[contains(text(),"MIGLIORA OGNI GIORNO")]/parent::div';
  private tools_and_training_div = '(//h1[contains(text(),"A PORTATA DI MANO: GLI STRUMENTI E I LINK UTILI")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private tools_and_training_heading = '//h1[contains(text(),"A PORTATA DI MANO: GLI STRUMENTI E I LINK UTILI")]/parent::div';
  private contact_us_banner_div = '//strong[text()="Salva subito il numero: 0454859115"]//ancestor::div[contains(@class,"banners-section-2")]';
  private contact_email_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//span[text()="premia@velux.com"]';
  private contact_number_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//span[text()="0456173666"]';
  private address_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//p';
  private footer_section = '//footer';
  private home_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Pagina iniziale")]';
  private terms_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Regolamento")]';
  private contact_us_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Contattaci")]';
  private velux_privacy_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Privacy")]';
  private velux_facebook_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"www.facebook.com/velux/")]';
  private velux_youtube_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"www.youtube.com/user/VELUXItalia")]';
  private logout_btn = '//span[text()="Esci"]/parent::div/parent::a';
  private profile_btn = '//span[text()="Profilo"]/parent::div/parent::a';
  private basket_btn = '//i[contains(@class,"fa-shopping-cart")]/parent::a';

  clickBasketBtn(){
    this.click(this.basket_btn);
  }

  toolsAndTrainingHeadingElement(){
    return this.element(this.tools_and_training_heading);
  }

  toolsAndTrainingDivElement(){
    return this.element(this.tools_and_training_div);
  }

  viewToolsAndTrainingSection(){
    this.inView(this.tools_and_training_heading);
  }

  claimRewardsHeadingElement(){
    return this.element(this.claim_rewards_heading);
  }

  claimRewardsDivElement(){
    return this.element(this.claim_rewards_div);
  }

  viewClaimRewardsSection(){
    this.inView(this.claim_rewards_heading);
  }

  clickProfile(){
    this.forceClick(this.profile_btn);
  }

  clickLogout(){
    this.forceClick(this.logout_btn);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

  mainTabBtnElement(){
    return this.element(this.main_btn);
  }

  clickMainBtn(){
    this.click(this.main_btn);
  }

  clickAddPurchseBtn(){
    this.click(this.add_purchase_btn);
  }

  clickPointsHistoryBtn(){
    this.forceClick(this.points_history_btn);
  }
  
  clickSpendPointsBtn(){
    this.click(this.spend_points_btn);
  }

  clickRewardsHistoryBtn(){
    this.forceClick(this.rewards_history_btn);
  }

  clickRewardsCalculatorBtn(){
    this.click(this.rewards_calculator_btn);
  }

  clickDashboardBtn(){
    this.click(this.dashboard_btn);
  }

  bannerSectionDivElement(){
    return this.element(this.banner_section_div);
  }

  swiperBannerDivElement(){
    return this.element(this.swiper_banner_dev);
  }

  miniDashboardBannerDivElement(){
    return this.element(this.mini_dashboard_banner_div);
  }

  currentPointDivElement(){
    return this.element(this.current_point_div);
  }

  pointsEarnedDivElement(){
    return this.element(this.points_earned_div);
  }

  pointsSpentDivElement(){
    return this.element(this.points_spent_div);
  }

  totalPointsDivElement(){
    return this.element(this.total_points_div);
  }

  bonusLevelChartElement(){
    return this.element(this.bonus_level_chart);
  }

  clickBonusLevelChart(){
    this.forceClick(this.mini_dashboard_banner_div);
  }

  clickAddPurchaseCTA(){
    this.click(this.add_purchase_CTA);
  }

  clickSpendPointsCTA(){
    this.click(this.spend_points_CTA);
  }

  clickRewardCalculatorCTA(){
    this.click(this.reward_calculator_CTA);
  }

  rewardCalculatorCTAElement(){
    return this.element(this.reward_calculator_CTA);
  }

  spendPointsCTAElement(){
    return this.element(this.spend_points_CTA);
  }

  addPurchaseCTAElement(){
    return this.element(this.add_purchase_CTA);
  }

  contactUsBannerDivElement(){
    return this.element(this.contact_us_banner_div);
  }

  stayInformedHeadingElement(){
    return this.element(this.stay_informed_heading);
  }

  stayInformedDivElement(){
    return this.element(this.stay_informed_div);
  }

  viewStayInformedSection(){
    this.inView(this.stay_informed_heading);
  }

  contactEmailFooterTextElement(){
    return this.element(this.contact_email_footer_text);
  }

  contactNumberFooterTextElement(){
    return this.element(this.contact_number_footer_text);
  }

  getAddressFooterText(){
    return this.inner_text(this.address_footer_text);
  }

  footerSectionElement(){
    return this.element(this.footer_section);
  }

  viewFooterSection(){
    this.inView(this.footer_section);
  }

  clickTermsLinkFooter(){
    this.click(this.terms_link_footer);
  }

  clickHomeLinkFooter(){
    this.click(this.home_link_footer);
  }

  clickContactUsLinkFooter(){
    this.click(this.contact_us_link_footer);
  }

  clickVeluxPrivacyLinkFooter(){
    this.forceClick(this.velux_privacy_link_footer);
  }

  veluxYoutubeLinkElement(){
    return this.element(this.velux_youtube_link_footer);
  }

  veluxFacebookLinkElement(){
    return this.element(this.velux_facebook_link_footer);
  }

}
