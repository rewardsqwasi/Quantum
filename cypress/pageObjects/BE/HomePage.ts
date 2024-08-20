import BasePage from "../BasePage";

export default class HomePage extends BasePage {
 
  private url = '/home';
  private main_btn = '(//span[contains(text(),"Page d\'accueil")]/parent::a)[1]';
  private add_purchase_btn = '(//span[contains(text(),"Gagner des points")]/parent::a)[1]';
  private points_history_btn = '(//span[contains(text(),"Historique des achats")]/parent::a)[1]';
  private spend_points_btn = '(//span[contains(text(),"Dépenser des points")]/parent::a)[1]';
  private rewards_history_btn = '(//span[contains(text(),"Historique des récompenses")]/parent::a)[1]';
  private rewards_calculator_btn = '(//span[contains(text(),"Calculateur de récompenses")]/parent::a)[1]';
  private dashboard_btn = '(//span[contains(text(),"Tableau de bord")]/parent::a)[1]';
  private basket_btn = '//i[contains(@class,"fa-shopping-cart")]/parent::a';
  private lang_select_btn = '//button[@id="language-selector"]';
  private french_lang_link = '//a[@title="French"]';
  private dutch_lang_link = '//a[@title="Dutch"]';
  private banner_section_div = '//div[contains(@class,"banners-section")]';
  private swiper_banner_dev = '//div[contains(@class,"banners-section")]//div[contains(@class,"swiper-container")]';
  private learn_more_dashboard_btn = '(//div[contains(@onclick,"/store-mini-dashboard-click")])[1]';
  private add_purchase_CTA = '//h6[contains(text(),"Gagner des points")]//ancestor::a';
  private spend_points_CTA = '//h6[contains(text(),"Dépenser des points")]//ancestor::a';
  private reward_calculator_CTA = '//h6[contains(text(),"Calculateur de points")]//ancestor::a';
  private mini_dashboard_banner_div = '//div[contains(@onclick,"/store-mini-dashboard-click")]';
  private goto_mini_dashboard_slide2 = '(//div[contains(@onclick,"/store-mini-dashboard-click")]/following::div[@aria-label="Next slide"])[1]';
  private current_point_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Current Points"])[1]';
  private points_earned_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Points earned"])[1]';
  private points_spent_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Points spent"])[1]';
  private total_points_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[contains(text(),"Total Points")])[1]';
  private bonus_level_chart = '(//canvas[@id="bonusLevelChart"])[1]';
  private claim_rewards_div = '(//h1[contains(text(),"Réclamez vos récompenses")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private stay_informed_div = '(//h1[contains(text(),"RESTEZ INFORMÉS")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private services_div = '(//h1[contains(text(),"SERVICES")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private claim_rewards_heading = '//h1[contains(text(),"Réclamez vos récompenses")]/parent::div';
  private stay_informed_heading = '//h1[contains(text(),"RESTEZ INFORMÉS")]/parent::div';
  private services_heading = '//h1[contains(text(),"SERVICES")]/parent::div';
  private learn_more_div = '//span[contains(text(),"En savoir plus")]/ancestor::div[contains(@class,"info-panel-text-columnn-background")]';
  private learn_more_link = '//span[contains(text(),"En savoir plus")]/ancestor::div[contains(@class,"info-panel-text-columnn-background")]//a';
  private contact_email_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//span[text()="professionals-be@velux.com"]';
  private contact_number_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//span[text()="32010420909"]';
  private address_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//p';
  private footer_section = '//footer';
  private home_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Accueil")]';
  private terms_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Conditions Générales")]';
  private velux_privacy_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Politique de Confidentialité")]';
  private faq_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Questions fréquentes")]';
  private contact_us_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Contactez-nous")]';
  private velux_facebook_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"facebook.com/velux.be")]';
  private velux_twitter_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"twitter.com/VELUXBelgium")]';
  private velux_youtube_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"www.youtube.com/user/VELUXBelgium")]';
  private logout_btn = '//span[text()="Déconnexion"]/parent::div/parent::a';
  private profile_btn = '//span[text()="Profil"]/parent::div/parent::a';

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
