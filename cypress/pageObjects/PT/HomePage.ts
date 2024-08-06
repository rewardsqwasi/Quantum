import BasePage from "../BasePage";

export default class HomePage extends BasePage {
 
  private url = '/home';
  private main_btn = '(//span[contains(text(),"Menu Principal")]/parent::a)[1]';
  private add_purchase_btn = '(//span[contains(text(),"Pontos Ganhos")]/parent::a)[1]';
  private points_history_btn = '(//span[contains(text(),"O seu histórico de pontos")]/parent::a)[1]';
  private spend_points_btn = '(//span[contains(text(),"Gastar Pontos")]/parent::a)[1]';
  private rewards_history_btn = '//span[contains(text(),"Histórico de recompensas")]/parent::a';
  private rewards_calculator_btn = '(//span[contains(text(),"Calculadora de recompensas") or contains(text(),"Calculadora de Recompensas")]/parent::a)[1]';
  private dashboard_btn = '(//span[contains(text(),"Painel de controlo")]/parent::a)[1]';
  private basket_btn = '//i[contains(@class,"fa-shopping-cart")]/parent::a';
  private banner_section_div = '//div[contains(@class,"banners-section")]';
  private swiper_banner_dev = '//div[contains(@class,"banners-section")]//div[contains(@class,"swiper-container")]';
  private mini_dashboard_banner_div = '//div[contains(@onclick,"/store-mini-dashboard-click")]';
  private goto_mini_dashboard_slide2 = '(//div[contains(@onclick,"/store-mini-dashboard-click")]/following::div[@aria-label="Next slide"])[1]';
  private current_point_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Current Points"])[1]';
  private points_earned_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Points earned"])[1]';
  private points_spent_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Points spent"])[1]';
  private total_points_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[contains(text(),"Total Points")])[1]';
  private bonus_level_chart = '(//canvas[@id="bonusLevelChart"])[1]';
  private learn_more_dashboard_btn = '(//div[contains(@onclick,"/store-mini-dashboard-click")])[1]';
  private add_purchase_CTA = '//h6[contains(text(),"Pontos Ganhos")]//ancestor::a';
  private spend_points_CTA = '//h6[contains(text(),"Gastar Pontos")]//ancestor::a';
  private reward_calculator_CTA = '//h6[contains(text(),"Calculadora de Recompensas")]//ancestor::a';
  private claim_rewards_div = '(//h1[contains(text(),"Reivindique suas recompensas")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private claim_rewards_heading = '//h1[contains(text(),"Reivindique suas recompensas")]/parent::div';
  private contact_email_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//span[text()="velux-p@velux.com"]';
  private contact_number_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//span[text()="218800060"]';
  private address_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//p/parent::span';
  private footer_section = '//footer';
  private terms_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Termos e Condições")]';
  private contact_us_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Contacte-nos")]';
  private home_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Início")]';
  private velux_privacy_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Política de Privacidade")]';
  private velux_facebook_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"facebook.com/VELUXPortugal")]';
  private installer_cert_btn = '(//span[contains(text(),"Certificado de instalação")]/parent::a)[1]';
  private tools_and_training_div = '(//h1[contains(text(),"Ferramentas e formação")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private product_info_div = '(//h1[contains(text(),"Produtos e notícias")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private tools_and_training_heading = '//h1[contains(text(),"Ferramentas e formação")]/parent::div';
  private product_info_heading = '//h1[contains(text(),"Produtos e notícias")]/parent::div';
  private learn_more_div = '(//span[contains(text(),"Mais informações")]/ancestor::div[contains(@class,"grid")])[1]';
  private learn_more_link = '//span[contains(text(),"Mais informações")]/parent::a';
  private logout_btn = '//span[text()="Terminar sessão"]/parent::div/parent::a';
  private profile_btn = '//span[text()="Perfil"]/parent::div/parent::a';
  
  clickHomeLinkFooter(){
    this.click(this.home_link_footer);
  }

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

  clickInstallerCertBtn(){
    this.forceClick(this.installer_cert_btn);
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

  clickVeluxPrivacyLinkFooter(){
    this.click(this.velux_privacy_link_footer);
  }

  veluxFacebookLinkElement(){
    return this.element(this.velux_facebook_link_footer);
  }

}
