import BasePage from "../BasePage";

export default class HomePage extends BasePage {

  private url = '/home';
  private main_btn = '(//span[contains(text(),"Hjem")]/parent::a)[1]';
  private add_purchase_btn = '(//span[contains(text(),"Tjen bonuskroner")]/parent::a)[1]';
  private purchase_status_btn = '//span[contains(text(),"Din bonushistorikk")]/parent::a';
  private claim_rewards_btn = '//span[contains(text(),"Bruk bonuskroner")]/parent::a';
  private rewards_history_btn = '//span[contains(text(),"Bonushistorikk")]/parent::a';
  private rewards_calculator_btn = '(//span[contains(text(),"Bonuskalkulator")]/parent::a)[1]';
  private dashboard_btn = '(//span[contains(text(),"Dashboard")]/parent::a)[1]';
  private banner_section_div = '//div[contains(@class,"banners-section ")]';
  private swiper_banner_dev = '//div[contains(@class,"banners-section ")]//div[contains(@class,"swiper-container")]';
  private mini_dashboard_banner_div = '//div[contains(@onclick,"/store-mini-dashboard-click")]';
  private goto_mini_dashboard_slide2 = '(//div[contains(@onclick,"/store-mini-dashboard-click")]/following::div[@aria-label="Next slide"])[1]';
  private current_point_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Nåværende bonuskroner"])[1]';
  private points_earned_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Opptjente bonuskroner"])[1]';
  private points_spent_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Bonuskroner brukt"])[1]';
  private total_points_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[contains(text()," Dine bonuskroner")])[1]';
  private bonus_level_chart = '(//canvas[@id="bonusLevelChart"])[1]';
  private add_purchase_CTA = '//h6[contains(text(),"Tjen bonuskroner")]//ancestor::a';
  private spend_points_CTA = '//h6[contains(text(),"Bruk bonuskroner")]//ancestor::a';
  private reward_calculator_CTA = '//h6[contains(text(),"Bonuskalkulator")]//ancestor::a';
  private stay_informed_div = '(//h1[contains(text(),"Hold deg informert")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private stay_informed_heading = '//h1[contains(text(),"Hold deg informert")]/parent::div';
  private contact_us_btn = '//span[text()="Kontakt oss"]//parent::a';
  private contact_us_banner_div = '//span[text()="Kontakt oss"]//ancestor::div[contains(@class,"banners-section-2")]';
  private contact_email_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//span[text()="velux-no@velux.com"]';
  private contact_number_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//span[text()="22510600"]';
  private address_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//p';
  private footer_section = '//footer';
  private terms_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Vilkår og betingelser")]';
  private home_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Hjem")]';
  private contact_us_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Kontakt oss")]';
  private velux_privacy_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Personvernerklæring")]';
  private velux_faq_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"FAQ")]';
  private velux_pinterest_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"www.pinterest.com/veluxnorgeas")]';
  private velux_facebook_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"www.facebook.com/VELUXNorge")]';
  private velux_youtube_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"www.youtube.com/channel/UC777mfTScqf5YVsAM722Xyg")]';
  private profile_btn = '//span[text()="Profil"]/parent::div/parent::a';
  private logout_btn = '//span[text()="Logg ut"]/parent::div/parent::a';

  clickLogout(){
    this.forceClick(this.logout_btn);
  }

  clickHomeLinkFooter(){
    this.click(this.home_link_footer);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

  mainTabBtnElement(){
    return this.element(this.main_btn);
  }

  clickPointsHistoryBtn(){
    this.forceClick(this.purchase_status_btn);
  }
  
  clickProfile(){
    this.forceClick(this.profile_btn);
  }

  clickMainBtn(){
    this.click(this.main_btn);
  }

  clickAddPurchseBtn(){
    this.click(this.add_purchase_btn);
  }

  clickClaimRewardsBtn(){
    this.forceClick(this.claim_rewards_btn);
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

  clickFAQLinkFooter(){
    this.click(this.velux_faq_link_footer);
  }

  veluxPinterestLinkElement(){
    return this.element(this.velux_pinterest_link_footer);
  }

}
