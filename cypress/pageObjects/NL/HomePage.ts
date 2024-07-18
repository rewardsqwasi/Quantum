import BasePage from "../BasePage";

export default class HomePage extends BasePage {
 
  private url = '/home';
  private main_btn = '(//span[contains(text(),"Startpagina")]/parent::a)[1]';
  private add_purchase_btn = '(//span[contains(text(),"Punten Verdienen")]/parent::a)[1]';
  private dsp_btn = '//span[contains(text(),"DSP")]/parent::a';
  private add_replace_btn = '//span[contains(text(),"Add Replacement")]/parent::a';
  private upload_invoice_btn = '//span[contains(text(),"Upload Invoice")]/parent::a';
  private points_history_btn = '//span[contains(text(),"Jouw puntengeschiedenis")]/parent::a';
  private training_point_btn = '//span[contains(text(),"Trainingspunten")]/parent::a';
  private e_learning_btn = '//span[contains(text(),"E-learning")]/parent::a';
  private spend_points_btn = '//span[contains(text(),"Punten uitgeven")]/parent::a';
  private clain_rewards_btn = '//span[contains(text(),"Claim Rewards")]/parent::a';
  private rewards_history_btn = '//span[contains(text(),"Rewards historie")]/parent::a';
  private order_history_btn = '//span[contains(text(),"Order History") or contains(text(),"Orders History")]/parent::a';
  private rewards_calculator_btn = '(//span[contains(text(),"Rewards rekenmachine")]/parent::a)[1]';
  private dashboard_btn = '(//span[contains(text(),"Dashboard")]/parent::a)[1]';
  private basket_btn = '//i[contains(@class,"fa-shopping-cart")]/parent::a';
  private banner_section_div = '//div[contains(@class,"banners-section")]';
  private swiper_banner_dev = '//div[contains(@class,"banners-section")]//div[contains(@class,"swiper-container")]';
  private mini_dashboard_banner_div = '//div[contains(@onclick,"/store-mini-dashboard-click")]';
  private goto_mini_dashboard_slide = '//div[contains(@onclick,"/store-mini-dashboard-click")]//following::span[contains(@class,"swiper-pagination-bullet") and @aria-label="Go to slide 2"]';
  private goto_mini_dashboard_slide2 = '(//div[contains(@onclick,"/store-mini-dashboard-click")]/following::div[@aria-label="Next slide"])[1]';
  private current_point_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Huidige punten"])[1]';
  private points_earned_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Punten verdiend"])[1]';
  private points_spent_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Punten uitgegeven"])[1]';
  private total_points_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[contains(text(),"Puntentotaal")])[1]';
  private bonus_level_chart = '(//canvas[@id="bonusLevelChart"])[1]';
  private add_purchase_CTA = '//h6[contains(text(),"Punten Verdienen")]//ancestor::a';
  private spend_points_CTA = '//h6[contains(text(),"Punten uitgeven")]//ancestor::a';
  private reward_calculator_CTA = '//h6[contains(text(),"Rewards rekenmachine")]//ancestor::a';
  private claim_rewards_div = '(//h1[contains(text(),"Claim Rewards")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private stay_informed_div = '(//h1[contains(text(),"Stay Informed")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private services_div = '//h1[contains(text(),"Diensten")]/parent::div//following-sibling::div[contains(@class,"grid")]';
  private velux_tips_div = '(//h1[contains(text(),"VELUX Tips & Tricks Videos")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private claim_rewards_heading = '//h1[contains(text(),"Claim Rewards")]/parent::div';
  private stay_informed_heading = '//h1[contains(text(),"Stay Informed")]/parent::div';
  private services_heading = '//h1[contains(text(),"Diensten")]/parent::div';
  private velux_tips_heading = '//h1[contains(text(),"VELUX Tips & Tricks Videos")]/parent::div';
  private contact_us_btn = '//span[text()="Contact Us"]//parent::a';
  private contact_us_banner_div = '//span[text()="Contact Us"]//ancestor::div[contains(@class,"banners-section-2")]';
  private contact_email_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//span[text()="rewards@velux.nl"]';
  private contact_number_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//span[text()="+31 30 662 96 29"]';
  private address_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//p';
  private footer_section = '//footer';
  private terms_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Algemene Voorwaarden")]';
  private home_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Startpagina")]';
  private trading_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Handelsvoorwaarden")]';
  private contact_us_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Neem contact op")]';
  private faq_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Vragen?")]';
  private velux_facebook_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"www.facebook.com/velux.nl")]';
  private velux_instagram_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"www.instagram.com/velux_nl")]';
  private velux_pinterest_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"www.pinterest.com/VELUXNederlan")]';
  private velux_youtube_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"www.youtube.com/user/veluxnl")]';
  private learn_more_div = '(//span[contains(text(),"Ontdek meer")]/ancestor::div[contains(@class,"grid")])[1]';
  private learn_more_link = '//span[contains(text(),"Ontdek meer")]/parent::a';
  private logout_btn = '//span[text()="Log uit"]/parent::div/parent::a';
  private profile_btn = '//span[text()="Profiel"]/parent::div/parent::a';

  clickProfile(){
    this.forceClick(this.profile_btn);
  }

  clickLogout(){
    this.forceClick(this.logout_btn);
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

  mainTabBtnElement(){
    return this.element(this.main_btn);
  }

  clickMainBtn(){
    this.click(this.main_btn);
  }

  clickMiniDashboard(){
    this.click(this.mini_dashboard_banner_div);
  }

  clickAddPurchseBtn(){
    this.click(this.add_purchase_btn);
  }

  clickDSPBtn(){
    this.forceClick(this.dsp_btn);
  }

  clickAddReplaceBtn(){
    this.forceClick(this.add_replace_btn);
  }

  clickUploadInvoiceBtn(){
    this.forceClick(this.upload_invoice_btn);
  }

  clickPointsHistoryBtn(){
    this.forceClick(this.points_history_btn);
  }

  clickTrainingPointBtn(){
    this.forceClick(this.training_point_btn);
  }

  clickELearningBtn(){
    this.forceClick(this.e_learning_btn);
  }
  
  clickSpendPointsBtn(){
    this.click(this.spend_points_btn);
  }

  clickClaimRewardsBtn(){
    this.forceClick(this.clain_rewards_btn);
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

  veluxTipsHeadingElement(){
    return this.element(this.velux_tips_heading);
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

  veluxTipsDivElement(){
    return this.element(this.velux_tips_div);
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
    this.inView(this.services_heading);
  }

  viewStayInformedSection(){
    this.inView(this.services_heading);
  }

  viewVeluxTipsSection(){
    this.inView(this.velux_tips_heading);
  }

  contactEmailFooterTextElement(){
    return this.element(this.contact_email_footer_text);
  }

  contactNumberFooterTextElement(){
    return this.element(this.contact_number_footer_text);
  }

  getAddressFooterText(){
    return this.element(this.address_footer_text);
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

  clickTradingLinkFooter(){
    this.click(this.trading_link_footer);
  }

  clickContactUsLinkFooter(){
    this.click(this.contact_us_link_footer);
  }

  clickFAQLinkFooter(){
    this.click(this.faq_link_footer);
  }

  veluxInstagramLinkElement(){
    return this.element(this.velux_instagram_link_footer);
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