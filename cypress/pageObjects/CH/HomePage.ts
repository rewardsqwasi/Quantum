import BasePage from "../BasePage";

export default class HomePage extends BasePage {
 
  private url = '/home';
  private product_catalogue_btn = '//ul[@id="menu"]//a[text()="Produktekatalog"]';
  private edit_profile_link = '//ul[@id="top-menu"]//span[text()="Profil bearbeiten"]/parent::a';
  private main_btn = '//ul[@id="menu"]//a[text()="Startseite"]';
  private add_purchase_btn = '//ul[@id="menu"]//a[text()="Bestellung erfassen"]';
  private points_history_btn = '//ul[@id="menu"]//a[text()="Meine Bestellungen"]';
  private banner_section_div = '//div[@id="banner"]//img';
  private banner_img = '//div[@id="banner"]//img';
  private add_purchase_CTA = '//div[@id="member-items"]//a[@href="add-purchase"]';
  private claim_rewards_CTA = '//div[@id="member-items"]//a[@href="claim-rewards"]';
  private reward_history_CTA = '//div[@id="member-items"]//a[@href="rewards-history"]';
  private marketing_panel_div = '//div[@id="marketing-panel"]';
  private marketing_panel_img = '//div[@id="marketing-panel"]//img';
  private marketing_panel_btn = '//div[@id="marketing-panel"]//a[contains(text(),"Jetzt Flyer herunterladen")]';
  private footer_section = '//footer';
  private footer_links_section = '//footer//h6[text()="Über das Portal"]/parent::div';
  private home_link_footer = '//footer//h6[text()="Über das Portal"]/parent::div//span[text()="Startseite"]/parent::a';
  private terms_link_footer = '//footer//h6[text()="Über das Portal"]/parent::div//span[text()="Teilnahmebedingungen"]/parent::a';
  private velux_privacy_link_footer = '//footer//h6[text()="Über das Portal"]/parent::div//span[text()="Datenschutz-Bestimmungen"]/parent::a';
  private contact_us_link_footer = '//footer//h6[text()="Über das Portal"]/parent::div//span[text()="Kontaktieren Sie uns"]/parent::a';
  private contact_email_footer_text = '(//footer//div[@class="grid_3"])[1]//a[text()="info@velux.ch"]';
  private contact_number_footer_text = '(//footer//div[@class="grid_3"])[1]//p[text()="Tel: 062 289 44 44"]';
  private address_footer_text = '(//footer//div[@class="grid_3"])[1]//p[1]';
  private footer_social_link_section = '(//footer//div[@class="grid_3"])[3]';
  private velux_facebook_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"www.facebook.com/VELUXSwitzerland")]';
  private velux_twitter_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"twitter.com/veluxschweiz")]';
  private velux_youtube_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"youtube.com/channel/UC7ZcyeiHOKvQdd7l3XpPUPQ")]';
  private logout_btn = '//ul[@id="top-menu"]//span[text()="Abmelden"]/parent::a';
  private points_panel = '//div[@id="points-panel"]';
  private current_points = '//div[@id="points-panel"]//td[text()="Total von mir gesammelte Punkte"]/following-sibling::td/strong';

  currentPointsElement(){
    return this.element(this.current_points);
  }

  pointsPanelDivElement(){
    return this.element(this.points_panel);
  }

  clickLogout(){
    this.forceClick(this.logout_btn);
  }

  clickEditProfileLink(){
    this.click2(this.edit_profile_link);
  }
  
  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

  mainTabBtnElement(){
    return this.element(this.main_btn);
  }

  clickMainBtn(){
    this.click2(this.main_btn);
  }

  clickAddPurchseBtn(){
    this.click2(this.add_purchase_btn);
  }

  clickPointsHistoryBtn(){
    this.click2(this.points_history_btn);
  } 
  
  clickRewardsHistoryCTA(){
    this.click2(this.reward_history_CTA);
  }
  

  bannerSectionDivElement(){
    return this.element(this.banner_section_div);
  }

  clickProductCatalogueBtn(){
    this.forceClick(this.product_catalogue_btn);
  }

  bannerImageElement(){
    return this.element(this.banner_img);
  }

  clickAddPurchaseCTA(){
    this.click2(this.add_purchase_CTA);
  }

  clickClaimRewardsCTA(){
    this.click2(this.claim_rewards_CTA);
  }

  clickRewardHistoryCTA(){
    this.click2(this.reward_history_CTA);
  }

  rewardHistoryCTAElement(){
    return this.element(this.reward_history_CTA);
  }

  addPurchaseCTAElement(){
    return this.element(this.add_purchase_CTA);
  }

  marketingPanelDivElement(){
    return this.element(this.marketing_panel_div);
  }

  viewMarketingPanelSection(){
    this.inView(this.marketing_panel_div);
  }

  marketingPanelImageElement(){
    return this.element(this.marketing_panel_img);
  }

  clickMarketingPanelBtn(){
    this.forceClick(this.marketing_panel_btn);
  }

  marketingPanelBtnElement(){
    return this.element(this.marketing_panel_btn);
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

  veluxTwitterLinkElement(){
    return this.element(this.velux_twitter_link_footer);
  }

  veluxYoutubeLinkElement(){
    return this.element(this.velux_youtube_link_footer);
  }

  veluxFacebookLinkElement(){
    return this.element(this.velux_facebook_link_footer);
  }

  clickHomeLinkFooter(){
    this.click(this.home_link_footer);
  }

  footerSocialLinkElement(){
    return this.element(this.footer_social_link_section);
  }

  footerLinksElement(){
    return this.element(this.footer_links_section);
  }

}
