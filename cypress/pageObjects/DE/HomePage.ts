import BasePage from "../BasePage";

export default class HomePage extends BasePage {
 

  private url = '/home';
  private edit_profile_link = '//ul[@id="top-menu"]//span[text()="Profil bearbeiten"]/parent::a';
  private main_btn = '//ul[@id="menu"]//a[text()="Startseite"]';
  private add_purchase_btn = '//ul[@id="menu"]//a[text()="Rechnung einreichen"]';
  private points_history_btn = '//ul[@id="menu"]//a[text()="Rechnungshistorie"]';
  private banner_section_div = '//div[@id="banner"]//img';
  private banner_img = '//div[@id="banner"]//img';
  private add_purchase_CTA = '//div[@id="member-items"]//a[@href="add-purchase"]';
  private purchase_status_CTA = '//div[@id="member-items"]//a[@href="purchase-status"]';
  private dashboard_CTA = '//div[@id="member-items"]//a[@href="dashboard"]';
  private marketing_panel_div = '//div[@id="marketing-panel"]';
  private marketing_panel_img = '//div[@id="marketing-panel"]//img';
  private marketing_panel_btn = '//div[@id="marketing-panel"]//a[contains(text(),"Jetzt mehr erfahren!")]';
  private footer_section = '//footer';
  private footer_links_section = '//footer//h6[text()="Über das Portal"]/parent::div';
  private home_link_footer = '//footer//h6[text()="Über das Portal"]/parent::div//span[text()="Startseite"]/parent::a';
  private terms_link_footer = '//footer//h6[text()="Über das Portal"]/parent::div//span[text()="Teilnahmebedingungen"]/parent::a';
  private contact_us_link_footer = '//footer//h6[text()="Über das Portal"]/parent::div//span[text()="Kontaktieren Sie uns"]/parent::a';
  private contact_email_footer_text = '(//footer//div[@class="grid_3"])[1]//a[text()="plus@velux.de"]';
  private contact_number_footer_text = '(//footer//div[@class="grid_3"])[1]//p[text()="Tel: 0800 / 3242402"]';
  private address_footer_text = '(//footer//div[@class="grid_3"])[1]//p[1]';
  private footer_social_link_section = '(//footer//div[@class="grid_3"])[3]';
  private velux_facebook_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"https://www.facebook.com/veluxprofi")]';
  private velux_pinterest_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"https://www.pinterest.com/veluxde")]';
  private velux_youtube_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"https://www.youtube.com/user/VeluxDeutschland")]';
  private velux_instagram_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"https://www.instagram.com/veluxdach")]';
  private logout_btn = '//ul[@id="top-menu"]//span[text()="Abmelden"]/parent::a';
  private current_points = '(//div[@id="points-panel"]//p)[1]'
  private outstanding_invoices = '//div[@id="points-panel"]//p/small';
  private points_panel = '//div[@id="points-panel"]';

  outstandingInvoicesElement(){
    return this.element(this.outstanding_invoices);
  }

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

  bannerSectionDivElement(){
    return this.element(this.banner_section_div);
  }

  bannerImageElement(){
    return this.element(this.banner_img);
  }

  clickPurchaseStatusCTA(){
    this.click2(this.purchase_status_CTA);
  }

  purchaseStatusCTAElement(){
    return this.element(this.purchase_status_CTA);
  }

  clickDashboardCTA(){
    this.click2(this.dashboard_CTA);
  }

  dashboardCTAElement(){
    return this.element(this.dashboard_CTA);
  }

  clickAddPurchaseCTA(){
    this.click2(this.add_purchase_CTA);
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

  veluxPinterestLinkElement(){
    return this.element(this.velux_pinterest_link_footer);
  }

  veluxInstagramLinkElement(){
    return this.element(this.velux_instagram_link_footer);
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
