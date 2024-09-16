import BasePage from "../BasePage";

export default class HomePage extends BasePage {
 
  private url = '/home';
  private main_btn = '(//span[contains(text(),"Hjem")]/parent::a)[1]';
  private add_purchase_btn = '(//span[contains(text(),"Optjen Bonuskroner")]/parent::a)[1]';
  private purchase_status_btn = '//span[contains(text(),"Tidligere optjente bonuskroner")]/parent::a';
  private add_replace_btn = '//span[contains(text(), "Add Replacement")]';
  private claim_rewards_btn = '(//span[contains(text(),"Anvend Bonuskroner")]/parent::a)[1]';
  private rewards_history_btn = '//span[contains(text(),"Historik")]/parent::a';
  private rewards_calculator_btn = '(//span[contains(text(),"Beregn Bonuskroner")]/parent::a)[1]';
  private dashboard_btn = '(//span[contains(text(),"Dashboard")]/parent::a)[1]';
  private basket_btn = '//i[contains(@class,"fa-shopping-cart")]/parent::a';
  private banner_section_div = '//div[contains(@class,"banners-section")]';
  private swiper_banner_dev = '//div[contains(@class,"banners-section")]//div[contains(@class,"swiper-container")]';
  private mini_dashboard_banner_div = '//div[contains(@onclick,"/store-mini-dashboard-click")]';
  private goto_mini_dashboard_slide = '//div[contains(@onclick,"/store-mini-dashboard-click")]//following::span[contains(@class,"swiper-pagination-bullet") and @aria-label="Go to slide 2"]';
  private goto_mini_dashboard_slide2 = '(//div[contains(@onclick,"/store-mini-dashboard-click")]/following::div[@aria-label="Next slide"])[1]';
  private current_point_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Aktuelle point"])[1]';
  private points_earned_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Optjente bonuskroner"])[1]';
  private points_spent_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[text()="Bonuskroner anvendt"])[1]';
  private total_points_div = '(//div[contains(@onclick,"/store-mini-dashboard-click")]//div[contains(text()," Dine point")])[1]';
  private bonus_level_chart = '(//canvas[@id="bonusLevelChart"])[1]';
  private add_purchase_CTA = '//h6[contains(text(),"Optjen Bonuskroner")]//ancestor::a';
  private spend_points_CTA = '//h6[contains(text(),"Anvend Bonuskroner")]//ancestor::a';
  private reward_calculator_CTA = '//h6[contains(text(),"Beregn Bonuskroner")]//ancestor::a';
  private claim_rewards_div = '(//h1[contains(text(),"Gør krav på dine belønninger")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private stay_informed_div = '(//h1[contains(text(),"Hold dig informeret")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private services_div = '(//h1[contains(text(),"Services")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private velux_tips_div = '(//h1[contains(text(),"VELUX Tips & Tricks Videos")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private claim_rewards_heading = '(//h1[contains(text(),"Gør krav på dine belønninger")]/parent::div)[1]';
  private stay_informed_heading = '//h1[contains(text(),"Hold dig informeret")]/parent::div';
  private services_heading = '//h1[contains(text(),"Services")]/parent::div';
  private velux_tips_heading = '//h1[contains(text(),"VELUX Tips & Tricks Videos")]/parent::div';
  private contact_us_btn = '//span[text()="Kontakt os"]//parent::a';
  private contact_us_banner_div = '//span[text()="Kontakt os"]//ancestor::div[contains(@class,"banners-section-2")]';
  private contact_email_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//span[text()="velux-dk@velux.com"]';
  private contact_number_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//span[text()="45164516"]';
  private address_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//p';
  private footer_section = '//footer';
  private terms_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Betingelser")]';
  private home_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"velux.dk")]';
  private contact_us_link_footer = '//a[contains(text(),"Kontakt os")]';
  private velux_privacy_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//a[contains(text(),"Privatlivspolitik")]';
  private velux_email_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"mailto:velux-dk@velux.com")]';
  private velux_facebook_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"www.velux.dk/TMFacebook")]';
  private velux_youtube_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(@href,"https://www.youtube.com/user/VELUXDK")]';
  private cookie_policy_link_footer = '//a[contains(text(),"Cookiepolitik")]';
  private profile_btn = '//span[text()="Profil"]/parent::div/parent::a';
  private logout_btn = '//span[text()="Log ud"]/parent::div/parent::a';

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

  clickCookiePolicyLinkFooter(){
    this.click(this.cookie_policy_link_footer);
  }

  clickMainBtn(){
    this.click(this.main_btn);
  }

  clickAddPurchseBtn(){
    this.click(this.add_purchase_btn);
  }

  clickAddReplaceBtn(){
    this.forceClick(this.add_replace_btn);
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
    this.inView(this.stay_informed_heading);
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

  veluxYoutubeLinkElement(){
    return this.element(this.velux_youtube_link_footer);
  }

  veluxFacebookLinkElement(){
    return this.element(this.velux_facebook_link_footer);
  }

  veluxemailLinkElement(){
    return this.element(this.velux_email_link_footer);
  }

}
