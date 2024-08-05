import BasePage from "../BasePage";

export default class HomePage extends BasePage {
 
  private url = '/home';
  private main_btn = '(//span[contains(text(),"Página Principal")]/parent::a)[1]';
  private add_purchase_btn = '(//span[contains(text(),"Ganar puntos")]/parent::a)[1]';
  private points_history_btn = '(//span[contains(text(),"Tu historial de puntos")]/parent::a)[1]';
  private installer_cert_btn = '(//span[contains(text(),"Certificado de Instalación")]/parent::a)[1]';
  private training_point_btn = '//span[contains(text(),"Trainingspunten")]/parent::a';
  private spend_points_btn = '(//span[contains(text(),"Gastar puntos")]/parent::a)[1]';
  private claim_rewards_btn = '(//span[contains(text(),"Reclamar premios")]/parent::a)[1]';
  private rewards_history_btn = '//span[contains(text(),"Historial de premios")]/parent::a';
  private order_history_btn = '//span[contains(text(),"Order History") or contains(text(),"Orders History")]/parent::a';
  private rewards_calculator_btn = '(//span[contains(text(),"Calculadora de premios")]/parent::a)[1]';
  private dashboard_btn = '(//span[contains(text(),"Panel de Control")]/parent::a)[1]';
  private basket_btn = '//i[contains(@class,"fa-shopping-cart")]/parent::a';
  private banner_section_div = '//div[contains(@class,"banners-section")]';
  private swiper_banner_dev = '//div[contains(@class,"banners-section")]//div[contains(@class,"swiper-container")]';
  private mini_dashboard_banner_div = '//div[contains(@onclick,"/store-mini-dashboard-click")]';
  private goto_mini_dashboard_slide = '//div[contains(@onclick,"/store-mini-dashboard-click")]//following::span[contains(@class,"swiper-pagination-bullet") and @aria-label="Go to slide 2"]';
  private goto_mini_dashboard_slide2 = '(//div[contains(@onclick,"/store-mini-dashboard-click")]/following::div[@aria-label="Next slide"])[1]';
  private current_point_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Current Points"])[1]';
  private points_earned_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Points earned"])[1]';
  private points_spent_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Points spent"])[1]';
  private total_points_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[contains(text(),"Total Points")])[1]';
  private bonus_level_chart = '(//canvas[@id="bonusLevelChart"])[1]';
  private learn_more_dashboard_btn = '(//div[contains(@onclick,"/store-mini-dashboard-click")])[1]';
  private add_purchase_CTA = '//h6[contains(text(),"Ganar puntos")]//ancestor::a';
  private spend_points_CTA = '//h6[contains(text(),"Gastar puntos")]//ancestor::a';
  private reward_calculator_CTA = '//h6[contains(text(),"Calculadora de premios")]//ancestor::a';
  private claim_rewards_div = '(//h1[contains(text(),"Reclama tus recompensas")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private claim_rewards_heading = '//h1[contains(text(),"Reclama tus recompensas")]/parent::div';
  private contact_us_btn = '//span[text()="Contact Us"]//parent::a';
  private contact_us_banner_div = '//span[text()="Contact Us"]//ancestor::div[contains(@class,"banners-section-2")]';
  private contact_email_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//span[text()="velux-e@velux.com"]';
  private contact_number_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//span[text()="915097099"]';
  private address_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//p';
  private altaterra_email_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//span[text()="cs@altaterra.eu"]';
  private altaterra_number_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//span[text()="Tel: 020 3970 5080"]';
  private footer_section = '//footer';
  private terms_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Términos y condiciones")]';
  private contact_us_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Contáctanos")]';
  private faq_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Preguntas frecuentes")]';
  private home_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Inicio")]';
  private velux_privacy_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Política de privacidad")]';
  private velux_facebook_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"facebook.com/VELUXSpain")]';
  private velux_twitter_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"twitter.com/VELUXSpain")]';
  private velux_pinterest_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"pinterest.com/veluxspain")]';
  private velux_youtube_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"youtube.com/channel/UCPS23wPe7COLNEKgwMaFVRw")]';
  private tools_and_training_div = '(//h1[contains(text(),"Herramientas y formación")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private product_info_div = '(//h1[contains(text(),"Producto y noticias")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private tools_and_training_heading = '//h1[contains(text(),"Herramientas y formación")]/parent::div';
  private product_info_heading = '//h1[contains(text(),"Producto y noticias")]/parent::div';
  private profile_btn = '//span[text()="Perfil"]/parent::div/parent::a';
  private learn_more_div = '(//span[contains(text(),"Más información")]/ancestor::div[contains(@class,"grid")])[1]';
  private learn_more_link = '//span[contains(text(),"Más información")]/parent::a';
  private logout_btn = '//span[text()="Cerrar sesión"]/parent::div/parent::a';

  clickLogout(){
    this.forceClick(this.logout_btn);
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

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
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

  clickLearnMoreDashboardBtn(){
    this.forceClick(this.learn_more_dashboard_btn);
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

  clickInstallerCertBtn(){
    this.forceClick(this.installer_cert_btn);
  }

  clickTrainingPointBtn(){
    this.forceClick(this.training_point_btn);
  }

  clickSpendPointsBtn(){
    this.click(this.spend_points_btn);
  }

  clickClaimRewardsBtn(){
    this.forceClick(this.claim_rewards_btn);
  }

  clickRewardsHistoryBtn(){
    this.forceClick(this.rewards_history_btn);
  }

  clickOrderHistoryBtn(){
    this.forceClick(this.order_history_btn);
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
    this.forceClick(this.bonus_level_chart);
  }

  clickGotoMiniDashboardChart(){
    this.forceClick(this.goto_mini_dashboard_slide2);
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

  claimRewardsHeadingElement(){
    return this.element(this.claim_rewards_heading);
  }

  claimRewardsDivElement(){
    return this.element(this.claim_rewards_div);
  }

  viewClaimRewardsSection(){
    this.inView(this.claim_rewards_heading);
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

  altaterraEmailFooterTextElement(){
    return this.element(this.altaterra_email_footer_text);
  }

  altaterraNumberFooterTextElement(){
    return this.element(this.altaterra_number_footer_text);
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
    this.click(this.velux_privacy_link_footer);
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
