import BasePage from "../BasePage";

export default class HomePage extends BasePage {
 
  private url = '/home';
  private main_btn = '(//span[contains(text(),"Hoofdpagina")]/parent::a)[1]';
  private add_purchase_btn = '(//span[contains(text(),"Verdien punten")]/parent::a)[1]';
  private points_history_btn = '(//span[contains(text(),"Uw puntengeschiedenis")]/parent::a)[1]';
  private spend_points_btn = '(//span[contains(text(),"Besteed punten")]/parent::a)[1]';
  private rewards_history_btn = '(//span[contains(text(),"Beloningsgeschiedenis")]/parent::a)[1]';
  private rewards_calculator_btn = '(//span[contains(text(),"Puntencalculator")]/parent::a)[1]';
  private dashboard_btn = '(//span[contains(text(),"Dashboard")]/parent::a)[1]';
  private basket_btn = '//i[contains(@class,"fa-shopping-cart")]/parent::a';
  private lang_select_btn = '//button[@id="language-selector"]';
  private french_lang_link = '//a[@title="French"]';
  private dutch_lang_link = '//a[@title="Dutch"]';
  private banner_section_div = '//div[contains(@class,"banners-section")]';
  private swiper_banner_dev = '//div[contains(@class,"banners-section")]//div[contains(@class,"swiper-container")]';
  private learn_more_dashboard_btn = '(//div[contains(@onclick,"/store-mini-dashboard-click")])[1]';
  private add_purchase_CTA = '//h6[contains(text(),"Verdien punten")]//ancestor::a';
  private spend_points_CTA = '//h6[contains(text(),"Besteed punten")]//ancestor::a';
  private reward_calculator_CTA = '//h6[contains(text(),"Punten berekenen")]//ancestor::a';
  private mini_dashboard_banner_div = '//div[contains(@onclick,"/store-mini-dashboard-click")]';
  private goto_mini_dashboard_slide2 = '(//div[contains(@onclick,"/store-mini-dashboard-click")]/following::div[@aria-label="Next slide"])[1]';
  private current_point_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Current Points"])[1]';
  private points_earned_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Points earned"])[1]';
  private points_spent_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Points spent"])[1]';
  private total_points_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[contains(text(),"Total Points")])[1]';
  private bonus_level_chart = '(//canvas[@id="bonusLevelChart"])[1]';
  private claim_rewards_div = '(//h1[contains(text(),"Claim uw beloningen")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private stay_informed_div = '(//h1[contains(text(),"BLIJF OP DE HOOGTE")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private services_div = '(//h1[contains(text(),"DIENSTEN")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private claim_rewards_heading = '//h1[contains(text(),"Claim uw beloningen")]/parent::div';
  private stay_informed_heading = '//h1[contains(text(),"BLIJF OP DE HOOGTE")]/parent::div';
  private services_heading = '//h1[contains(text(),"DIENSTEN")]/parent::div';
  private learn_more_div = '//span[contains(text(),"Ontdek meer")]/ancestor::div[contains(@class,"info-panel-text-columnn-background")]';
  private learn_more_link = '//span[contains(text(),"Ontdek meer")]/ancestor::div[contains(@class,"info-panel-text-columnn-background")]//a';
  private contact_email_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//span[text()="professionals-be@velux.com"]';
  private contact_number_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//span[text()="32010420909"]';
  private address_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//p';
  private footer_section = '//footer';
  private home_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Hoofdpagina")]';
  private terms_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Algemene voorwaarden")]';
  private velux_privacy_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Politique de Confidentialité")]';
  private faq_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Veelgestelde vragen")]';
  private contact_us_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Contact")]';
  private velux_facebook_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"facebook.com/velux.be")]';
  private velux_twitter_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"twitter.com/VELUXBelgium")]';
  private velux_youtube_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"www.youtube.com/user/VELUXBelgium")]';
  private logout_btn = '//span[text()="Uitloggen"]/parent::div/parent::a';
  private profile_btn = '//span[text()="Profiel"]/parent::div/parent::a';

  switchToFR(){
    this.click(this.lang_select_btn);
    this.click(this.french_lang_link);
  }

  clickLanguageSelect(){
    this.click(this.lang_select_btn);
  }

  languageSelectBtn(){
    return this.element(this.lang_select_btn);
  }

  frenchLanguageLink(){
    return this.element(this.french_lang_link);
  }

  dutchLanguageLink(){
    return this.element(this.dutch_lang_link);
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

  clickBonusLevelChart(){
    this.forceClick(this.bonus_level_chart);
  }

  clickGotoMiniDashboardChart(){
    this.forceClick(this.goto_mini_dashboard_slide2);
  }

  serviceHeadingElement(){
    return this.element(this.services_heading);
  }

  stayInformedHeadingElement(){
    return this.element(this.stay_informed_heading);
  }

  claimRewardsHeadingElement(){
    return this.element(this.claim_rewards_heading);
  }

  servicesDivElement(){
    return this.element(this.services_div);
  }

  stayInformedDivElement(){
    return this.element(this.stay_informed_div);
  }

  claimRewardsDivElement(){
    return this.element(this.claim_rewards_div);
  }

  viewClaimRewardsSection(){
    this.inView(this.claim_rewards_heading);
  }

  viewServicesSection(){
    this.inView(this.stay_informed_heading);
  }

  viewStayInformedSection(){
    this.inView(this.services_heading);
  }  

  clickProfile(){
    this.forceClick(this.profile_btn);
  }

  learnMoreDivElement(){
    return this.element(this.learn_more_div);
  }

  learnMoreLinkElement(){
    return this.element(this.learn_more_link);
  }

  clickLearnMore(){
    this.forceClick(this.learn_more_link);
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

  clickBasketBtn(){
    this.click(this.basket_btn);
  }

  bannerSectionDivElement(){
    return this.element(this.banner_section_div);
  }

  swiperBannerDivElement(){
    return this.element(this.swiper_banner_dev);
  }

  bonusLevelChartElement(){
    return this.element(this.bonus_level_chart);
  }

  clickLearnMoreDashboardBtn(){
    this.forceClick(this.learn_more_dashboard_btn);
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

  clickContactUsLinkFooter(){
    this.click(this.contact_us_link_footer);
  }

  clickFAQLinkFooter(){
    this.click(this.faq_link_footer);
  }

  clickHomeLinkFooter(){
    this.click(this.home_link_footer);
  }

  clickVeluxPrivacyLinkFooter(){
    this.forceClick(this.velux_privacy_link_footer);
  }

  veluxTwitterLinkElement(){
    return this.element(this.velux_twitter_link_footer);
  }

  veluxYoutubeLinkElement(){
    return this.element(this.velux_youtube_link_footer);
  }

  veluxFacebookLinkElement(){
    return this.element(this.velux_facebook_link_footer);
  }

}
