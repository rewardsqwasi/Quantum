import BasePage from "../BasePage";

export default class LoginPage extends BasePage {

  private email_field = '#loginEmail';
  private password_field = '#loginPassword';
  private login_btn = '#submit';
  private url = '/login';
  private header_links_section = '#top-menu';
  private footer_links_section = '//footer//h6[text()="Links"]/parent::div';
  private home_btn_header = '//ul[@id="top-menu"]//span[text()="Startpagina"]/parent::a';
  private home_btn_footer = '//footer//h6[text()="Links"]/parent::div//span[text()="Startpagina"]/parent::a';
  private terms_btn_header = '//ul[@id="top-menu"]//span[contains(text(),"Algemene Voorwaarden")]/parent::a';
  private terms_btn_footer = '//footer//h6[text()="Links"]/parent::div//span[contains(text(),"Algemene Voorwaarden")]/parent::a';
  private faq_btn_header = '//ul[@id="top-menu"]//span[contains(text(),"Vragen")]/parent::a';
  private velux_privacy_btn_header = '//ul[@id="top-menu"]//span[text()="VELUX Privacy Policy"]/parent::a';
  private velux_privacy_btn_footer = '//footer//h6[text()="Links"]/parent::div//span[contains(text(),"VELUX") and contains(text(),"Privacy Policy")]/parent::a';
  private altaterra_privacy_btn_header = '//ul[@id="top-menu"]//span[text()="Altaterra Privacy Policy"]/parent::a';
  private altaterra_privacy_btn_footer = '//footer//h6[text()="Links"]/parent::div//span[text()="Altaterra Privacy Policy"]/parent::a';
  private read_more_btn = '//span[text()="Read more"]';
  private contact_btn_header = '//ul[@id="top-menu"]//span[text()="Contact Us"]/parent::a';
  private contact_btn_footer = '//footer//h6[text()="Links"]/parent::div//span[text()="Contact Us"]/parent::a';
  private create_account_btn = '//a[text()="Registreer"]';
  private forgot_pass_btn = '//a[text()="Gebruikersnaam of wachtwoord vergeten?"]';
  private allow_cookie_btn = '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll';
  private banner_div = '//div[@id="banner"]';
  private banner_images = '//div[@id="banner"]//img';
  private contact_number_footer_text_1 = '(//footer//div[@class="grid_3"])[1]//p[text()="030-6.629.629"]';
  private contact_number_footer_text_2 = '(//footer//div[@class="grid_3"])[1]//p[text()="030-6.629.610"]';
  private contact_number_footer_text_3 = '(//footer//div[@class="grid_3"])[1]//p[text()="030-6.629.613"]';
  private address_footer_text = '(//footer//div[@class="grid_3"])[1]//p[1]';
  private footer_social_link_section = '(//footer//div[@class="grid_3"])[3]';
  private velux_instagram_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"instagram.com/velux_nl")]';
  private velux_pinterest_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"pinterest.com/VELUXNederland")]';
  private velux_youtube_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"www.youtube.com/user/veluxn")]';
  private velux_facebook_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"www.facebook.com/velux.nl")]';
  private signIn_tab = '//legend[text()="INLOGGEN"]';
  private password_error = '#loginPasswordStatus';
  private email_error = '#loginEmailStatus';
  private toast_message = '//div[@class="toast-message"]';

  getToastMessagText(){
    return this.inner_text(this.toast_message);
  }

  getEmailFieldValidationMsg(){
    return this.validationMessage(this.email_field);
  }

  getEmailFieldErrorMsg(){
    return this.inner_text(this.email_error);
  }

  getPasswordFieldErrorMsg(){
    return this.inner_text(this.password_error);
  }

  pressEnter(){
    this.type(this.password_field, '{enter}');
  }

  passwordFieldElement(){
    return this.element(this.password_field);
  }

  emailFieldElement(){
    return this.element(this.email_field);
  }

  loginBtnElement(){
    return this.element(this.login_btn);
  }

  signInTabElement(){
    return this.element(this.signIn_tab);
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

  viewFooterSocialLinkSection(){
    this.inView(this.footer_social_link_section);
  }

  footerSocialLinkSectionElement(){
    return this.element(this.footer_social_link_section);
  }
 
  getAddressFooterText(){
    return this.inner_text(this.address_footer_text);
  }

  contactNumberFooterText3Element(){
    return this.element(this.contact_number_footer_text_3);
  }

  contactNumberFooterText2Element(){
    return this.element(this.contact_number_footer_text_2);
  }

  contactNumberFooterText1Element(){
    return this.element(this.contact_number_footer_text_1);
  }

  bannerDivElement(){
    return this.element(this.banner_div);
  }

  bannerImagesElement(){
    return this.element(this.banner_images);
  }

  login(email: string, password: string){
    this.clear(this.email_field);
    this.clear(this.password_field);
    if(email==undefined) email = " ";
    if(password==undefined) password = " ";
    if(email!="") this.type(this.email_field,email);
    if(password!="") this.type(this.password_field, password);
    this.click(this.login_btn);
  }

  headerLinksSectionElement(){
    return this.element(this.header_links_section);
  }

  footerLinksSectionElement(){
    return this.element(this.footer_links_section);
  }

  createAccountBtnElement(){
    return this.element(this.create_account_btn);
  }

  clickHomeBtnHeader(){
    this.click(this.home_btn_header);
  }

  clickHomeBtnFooter(){
    this.click(this.home_btn_footer);
  }

  clickTermsBtnHeader(){
    this.click(this.terms_btn_header);
  }

  clickTermsBtnFooter(){
    this.click(this.terms_btn_footer);
  }
  
  clickFAQBtnHeader(){
    this.click(this.faq_btn_header);
  }

  clickVeluxPrivacyBtnHeader(){
    this.forceClick(this.velux_privacy_btn_header);
    this.click(this.read_more_btn);
  }

  clickVeluxPrivacyBtnFooter(){
    this.forceClick(this.velux_privacy_btn_footer);
    this.click(this.read_more_btn);
  }

  clickAltaterraPrivacyBtnHeader(){
    this.forceClick(this.altaterra_privacy_btn_header);
  }

  clickAltaterraPrivacyBtnFooter(){
    this.forceClick(this.altaterra_privacy_btn_footer);
  }

  clickContactBtnHeader(){
    this.click(this.contact_btn_header);
  }

  clickContactBtnFooter(){
    this.click(this.contact_btn_footer);
  }

  clickCreateAccountBtn(){
    this.click(this.create_account_btn);
  }

  clickForgotPassBtn(){
    this.click(this.forgot_pass_btn);
  }

  forgotPassBtnElement(){
    return this.element(this.forgot_pass_btn);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

  allowCookie(){
    //this.click(this.allow_cookie_btn);
    const cookieName = 'CookieConsent';
    const val = '{stamp:%27biCWQ8IPbyJJLYXNCgtZQDpCdHB3f6cRFj61+K+4Gc+AYGcaUc9/Nw==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1717675965893%2Cregion:%27pk%27}';
    this.setCookies(cookieName, val);
  }

}
