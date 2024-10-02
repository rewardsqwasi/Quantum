import BasePage from "../BasePage";

export default class LoginPage extends BasePage {

  private email_field = '#loginEmail';
  private password_field = '#loginPassword';
  private login_btn = '#submit';
  private url = '/login';
  private header_links_section = '#top-menu';
  private terms_btn_header = '//ul[@id="top-menu"]//span[text()="Teilnahmebedingungen"]/parent::a';
  private velux_privacy_btn_header = '//ul[@id="top-menu"]//span[text()="Datenschutz-Bestimmungen"]/parent::a';
  private contact_btn_header = '//ul[@id="top-menu"]//span[text()="Kontaktieren Sie uns"]/parent::a';
  private footer_links_section = '//footer//h6[text()="Über das Portal"]/parent::div';
  private home_btn_footer = '//footer//h6[text()="Über das Portal"]/parent::div//span[text()="Startseite"]/parent::a';
  private terms_btn_footer = '//footer//h6[text()="Über das Portal"]/parent::div//span[text()="Teilnahmebedingungen"]/parent::a';
  private velux_privacy_btn_footer = '//footer//h6[text()="Über das Portal"]/parent::div//span[text()="Datenschutz-Bestimmungen"]/parent::a';
  private contact_btn_footer = '//footer//h6[text()="Über das Portal"]/parent::div//span[text()="Kontaktieren Sie uns"]/parent::a';
  private create_account_btn = '//a[text()="Jetzt registrieren"]';
  private forgot_pass_btn = '//a[text()="Passwort vergessen?"]';
  private banner_div = '//div[@id="banner"]';
  private banner_images = '//div[@id="banner"]//img';
  private contact_email_footer_text = '(//footer//div[@class="grid_3"])[1]//a[text()="info@velux.ch"]';
  private contact_number_footer_text = '(//footer//div[@class="grid_3"])[1]//p[text()="Tel: 062 289 44 44"]';
  private address_footer_text = '(//footer//div[@class="grid_3"])[1]//p[1]';
  private footer_social_link_section = '(//footer//div[@class="grid_3"])[3]';
  private velux_facebook_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"www.facebook.com/VELUXSwitzerland")]';
  private velux_twitter_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"twitter.com/veluxschweiz")]';
  private velux_youtube_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"youtube.com/channel/UC7ZcyeiHOKvQdd7l3XpPUPQ")]';
  private toast_message = '//div[@class="toast-message"]';
  private signIn_tab = '//legend[text()="Einloggen"]';
  private password_error = '#loginPasswordStatus';
  private email_error = '#loginEmailStatus';
  private german_lang_btn = '//ul[@id="top-menu"]//span[text()="DE"]/parent::a[@title="German"]';
  private french_lang_btn = '//ul[@id="top-menu"]//span[text()="FR"]/parent::a[@title="French"]';
  private ital_lang_btn = '//ul[@id="top-menu"]//span[text()="IT"]/parent::a[@title="Italian"]';

  switchToFR(){
    this.click(this.french_lang_btn);
  }

  switchToDE(){
    this.click(this.german_lang_btn);
  }

  switchToIT(){
    this.click(this.ital_lang_btn);
  }

  getEmailFieldErrorMsg(){
    return this.inner_text(this.email_error);
  }

  getPasswordFieldErrorMsg(){
    return this.inner_text(this.password_error);
  }
  
  getPasswordFieldValidationMsg(){
    return this.validationMessage(this.password_field);
  }

  getEmailFieldValidationMsg(){
    return this.validationMessage(this.email_field);
  }

  passwordFieldElement(){
    return this.element(this.password_field);
  }

  emailFieldElement(){
    return this.element(this.email_field);
  }

  loginBtnlement(){
    return this.element(this.email_field);
  }

  getToastMessagText(){
    return this.inner_text(this.toast_message);
  }

  signInTabElement(){
    return this.element(this.signIn_tab);
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

  footerSocialLinkSectionElement(){
    return this.element(this.footer_social_link_section);
  }

  viewFooterSocialLinkSection(){
    this.inView(this.footer_social_link_section);
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

  pressEnter(){
    this.type(this.password_field, '{enter}');
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

  clickHomeBtnFooter(){
    this.click(this.home_btn_footer);
  }

  clickTermsBtnHeader(){
    this.click(this.terms_btn_header);
  }

  clickTermsBtnFooter(){
    this.click(this.terms_btn_footer);
  }

  clickVeluxPrivacyBtnHeader(){
    this.forceClick(this.velux_privacy_btn_header);;
  }

  clickVeluxPrivacyBtnFooter(){
    this.forceClick(this.velux_privacy_btn_footer);
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
    const val = '{stamp:%27GrpML0SJsAQMkBIz+8uvtStTqJG5GlCOWfVOyAVG0uS9GrlLibMrHw==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1718876250437%2Cregion:%27pk%27}';
    this.setCookies(cookieName, val);
  }

}
