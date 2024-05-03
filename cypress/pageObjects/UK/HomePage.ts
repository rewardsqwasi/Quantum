import BasePage from "../BasePage";

export default class HomePage extends BasePage {
 
  private url = '/home';
  private main_btn = '(//span[contains(text(),"Main")]/parent::a)[1]';
  private add_purchase_btn = '//span[contains(text(),"Add Purchase") or contains(text(),"Earn Points")]/parent::a';
  private dsp_btn = '//span[contains(text(),"DSP")]/parent::a';
  private add_replace_btn = '//span[contains(text(),"Add Replacement")]/parent::a';
  private upload_invoice_btn = '//span[contains(text(),"Upload Invoice")]/parent::a';
  private points_history_btn = '//span[contains(text(),"Your Points History")]/parent::a';
  private training_point_btn = '//span[contains(text(),"Training Points")]/parent::a';
  private spend_points_btn = '//span[contains(text(),"Spend Points")]/parent::a';
  private clain_rewards_btn = '//span[contains(text(),"Claim Rewards")]/parent::a';
  private rewards_history_btn = '//span[contains(text(),"Rewards History")]/parent::a';
  private order_history_btn = '//span[contains(text(),"Order History") or contains(text(),"Orders History")]/parent::a';
  private rewards_calculator_btn = '(//span[contains(text(),"Rewards Calculator")]/parent::a)[1]';
  private dashboard_btn = '(//span[contains(text(),"Dashboard")]/parent::a)[1]';
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
  private add_purchase_CTA = '//h6[contains(text(),"Add Purchase") or contains(text(),"Earn points")]//ancestor::a';
  private spend_points_CTA = '//h6[contains(text(),"Spend Points") or contains(text(),"Spend points")]//ancestor::a';
  private reward_calculator_CTA = '//h6[contains(text(),"Reward Calculator") or contains(text(),"Reward calculator") or contains(text(),"Rewards Calculator") or contains(text(),"Rewards calculator")]//ancestor::a';
  private claim_rewards_div = '(//h1[contains(text(),"Claim Rewards") or contains(text(),"Claim Your Rewards")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private stay_informed_div = '(//h1[contains(text(),"Stay Informed")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private services_div = '(//h1[contains(text(),"Services")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private velux_tips_div = '(//h1[contains(text(),"VELUX Tips & Tricks Videos")]/parent::div//following-sibling::div[contains(@class,"grid")])[1]';
  private claim_rewards_heading = '(//h1[contains(text(),"Claim Rewards") or contains(text(),"Claim Your Rewards")]/parent::div)[1]';
  private stay_informed_heading = '//h1[contains(text(),"Stay Informed")]/parent::div';
  private services_heading = '//h1[contains(text(),"Services")]/parent::div';
  private velux_tips_heading = '//h1[contains(text(),"VELUX Tips & Tricks Videos")]/parent::div';
  private contact_us_btn = '//span[text()="Contact Us"]//parent::a';
  private contact_us_banner_div = '//span[text()="Contact Us"]//ancestor::div[contains(@class,"banners-section-2")]';
  private contact_email_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//span[text()="myrewards@velux.co.uk"]';
  private contact_number_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//span[text()="01592778293"]';
  private address_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[1]//p';
  private altaterra_email_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//span[text()="cs@altaterra.eu"]';
  private altaterra_number_footer_text = '(//footer//div[contains(@class,"lg:col-span-3")])[2]//span[text()="Tel: 020 3970 5080"]';
  private footer_section = '//footer';
  private terms_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(text(),"Term and Conditions") or contains(text(),"Terms and Conditions") and not(contains(text(),"Promotional"))]';
  private promotional_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(text(),"Promotional Terms and Conditions")]';
  private altaterra_privacy_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(text(),"Altaterra Privacy Policy")]';
  private contact_us_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(text(),"Contact Us")]';
  private faq_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(text(),"FAQ")]';
  private earn_points_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(text(),"How to Earn Points")]';
  private velux_privacy_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[3]//a[contains(text(),"VELUX Privacy Policy")]';
  private velux_facebook_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[4]//a[contains(@href,"facebook.com/VELUXGBI")]';
  private velux_twitter_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[4]//a[contains(@href,"twitter.com/veluxgbi") or contains(@href,"twitter.com/VELUXGBI")]';
  private velux_pinterest_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[4]//a[contains(@href,"pinterest.com/VELUXGroup") or contains(@href,"pinterest.com/veluxgbi")]';
  private velux_youtube_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[4]//a[contains(@href,"www.youtube.com/channel/UC57bJX1nvVM94JR66LoXhJQ") or contains(@href,"www.youtube.com/user/VeluxGBI")]';
  private dakea_facebook_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[4]//a[contains(@href,"facebook.com/HelloDakea")]';
  private dakea_linkedin_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[4]//a[contains(@href,"linkedin.com/showcase/dakeauk")]';
  private dakea_youtube_link_footer = '(//footer//div[contains(@class,"lg:col-span-3")])[4]//a[contains(@href,"youtube.com/user/DakeaChannel")]';

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

  clickPromotionalLinkFooter(){
    this.click(this.promotional_link_footer);
  }

  clickAltaterraPrivacyLinkFooter(){
    this.click(this.altaterra_privacy_link_footer);
  }

  clickContactUsLinkFooter(){
    this.click(this.contact_us_link_footer);
  }

  clickFAQLinkFooter(){
    this.click(this.faq_link_footer);
  }

  clickEarnPointsLinkFooter(){
    this.click(this.earn_points_link_footer);
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

  dakeaFacebookLinkElement(){
    return this.element(this.dakea_facebook_link_footer);
  }

  dakeaLinkedinLinkElement(){
    return this.element(this.dakea_linkedin_link_footer);
  }

  dakeaYoutubeLinkElement(){
    return this.element(this.dakea_youtube_link_footer);
  }

}