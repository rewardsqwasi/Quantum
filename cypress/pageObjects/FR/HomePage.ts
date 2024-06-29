import BasePage from "../BasePage";

export default class HomePage extends BasePage {
 
  private url = '/home';
  private main_btn = '(//span[contains(text(),"Accueil")]/parent::a)[1]';
  private add_purchase_btn = '(//span[contains(text(),"Collecter des points")]/parent::a)[1]';
  private points_history_btn = '(//span[contains(text(),"Historique de vos factures")]/parent::a)[1]';
  private spend_points_btn = '(//span[contains(text(),"Convertir mes points")]/parent::a)[1]';
  private rewards_history_btn = '(//span[contains(text(),"Historique des points")]/parent::a)[1]';
  private projects_btn = '(//span[contains(text(),"Statut de mes projets")]/parent::a)[1]';
  private rewards_calculator_btn = '(//span[contains(text(),"Calculateur de points")]/parent::a)[1]';
  private dashboard_btn = '(//span[contains(text(),"Tableau de bord")]/parent::a)[1]';
  private basket_btn = '//i[contains(@class,"fa-shopping-cart")]/parent::a';
  private banner_section_div = '//div[contains(@class,"banners-section")]';
  private swiper_banner_dev = '//div[contains(@class,"banners-section")]//div[contains(@class,"swiper-container")]';
  private bonus_level_chart = '(//figure//div[@id="bonusLevelChartFr"])[1]';
  private learn_more_dashboard_btn = '(//button[contains(@onclick,"/store-mini-dashboard-click")])[1]';
  private add_purchase_CTA = '//h6[contains(text(),"Collecter des points")]//ancestor::a';
  private spend_points_CTA = '//h6[contains(text(),"Convertir mes points")]//ancestor::a';
  private reward_calculator_CTA = '//h6[contains(text(),"Calculateur de points")]//ancestor::a';
  private tools_and_training_div = '(//h1[contains(text(),"OUTILS ET FORMATIONS")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private product_info_div = '(//h1[contains(text(),"PRODUITS ET INFORMATIONS PRATIQUES")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private tools_and_training_heading = '//h1[contains(text(),"OUTILS ET FORMATIONS")]/parent::div';
  private product_info_heading = '//h1[contains(text(),"PRODUITS ET INFORMATIONS PRATIQUES")]/parent::div';
  private contact_us_btn = '//span[text()="Contact Us"]//parent::a';
  private contact_us_banner_div = '//span[text()="Contact Us"]//ancestor::div[contains(@class,"banners-section-2")]';
  private contact_email_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//span[text()="veluxandco@velux.com"]';
  private contact_number_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//span[text()="0181871638"]';
  private address_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//p';
  private footer_section = '//footer';
  private terms_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Conditions générales d\'utilisation")]';
  private promotional_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Promotional Terms and Conditions")]';
  private contact_us_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Contactez-nous")]';
  private faq_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"FAQ")]';
  private home_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Accueil")]';
  private velux_privacy_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Politique de confidentialité")]';
  private velux_facebook_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"facebook.com/velux.france")]';
  private velux_twitter_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"twitter.com/velux_france")]';
  private velux_pinterest_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"pinterest.com/veluxfr/")]';
  private velux_youtube_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"www.youtube.com/channel/UCh1kbrKoJwdyXTS_w_nQ0rA")]';
  private logout_btn = '//span[text()="Déconnexion"]/parent::div/parent::a';
  private profile_btn = '//span[text()="Profil"]/parent::div/parent::a';
  private learn_more_div = '(//span[contains(text(),"En savoir plus")]/ancestor::div[contains(@class,"grid")])[1]';
  private learn_more_link = '//span[contains(text(),"En savoir plus")]/parent::a';

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

  clickProjectsBtn(){
    this.forceClick(this.projects_btn);
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

  contactUsBannerDivElement(){
    return this.element(this.contact_us_banner_div);
  }

  contactUsBtnElement(){
    return this.element(this.contact_us_btn);
  }

  clickContactUsBtn(){
    this.forceClick(this.contact_us_btn);
  }

  productInfoHeadingElement(){
    return this.element(this.product_info_heading);
  }

  toolsAndTrainingHeadingElement(){
    return this.element(this.tools_and_training_heading);
  }

  productInfoDivElement(){
    return this.element(this.product_info_div);
  }

  toolsAndTrainingDivElement(){
    return this.element(this.tools_and_training_div);
  }

  viewProductInfoSection(){
    this.inView(this.product_info_heading);
  }

  viewToolsAndTrainingSection(){
    this.inView(this.tools_and_training_heading);
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

  clickPromotionalLinkFooter(){
    this.click(this.promotional_link_footer);
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

  veluxPinterestLinkElement(){
    return this.element(this.velux_pinterest_link_footer);
  }

  veluxYoutubeLinkElement(){
    return this.element(this.velux_youtube_link_footer);
  }

  veluxFacebookLinkElement(){
    return this.element(this.velux_facebook_link_footer);
  }

}
