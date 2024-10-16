import BasePage from "../BasePage";

export default class LoginPage extends BasePage {
  
  private email_field = '#loginEmail';
  private password_field = '#loginPassword';
  private login_btn = '#submit';
  private url = '/login';
  private header_links_section = '#top-menu';
  private home_btn_header = '//ul[@id="top-menu"]//span[text()="Startseite"]/parent::a';
  private contact_btn_header = '//ul[@id="top-menu"]//span[text()="Kontaktieren Sie uns"]/parent::a';
  private footer_links_section = '//footer//h6[text()="Über das Portal"]/parent::div';
  private home_btn_footer = '//footer//h6[text()="Über das Portal"]/parent::div//span[text()="Startseite"]/parent::a';
  private terms_btn_footer = '//footer//h6[text()="Über das Portal"]/parent::div//span[text()="Teilnahmebedingungen"]/parent::a';
  private contact_btn_footer = '//footer//h6[text()="Über das Portal"]/parent::div//span[text()="Kontaktieren Sie uns"]/parent::a';
  private create_account_btn = '//a[text()="Jetzt registrieren"]';
  private forgot_pass_btn = '//a[text()="Haben Sie Ihr Passwort vergessen?"]';
  private banner_div = '//div[@id="banner"]';
  private banner_images = '//div[@id="banner"]//img';
  private contact_email_footer_text = '(//footer//div[@class="grid_3"])[1]//a[text()="plus@velux.de"]';
  private contact_number_footer_text = '(//footer//div[@class="grid_3"])[1]//a[text()="plus@velux.de"]';
  private address_footer_text = '(//footer//div[@class="grid_3"])[1]//p[1]';
  private footer_social_link_section = '(//footer//div[@class="grid_3"])[3]';
  private velux_facebook_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"https://www.facebook.com/veluxprofi")]';
  private velux_pinterest_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"https://www.pinterest.com/veluxde")]';
  private velux_youtube_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"https://www.youtube.com/user/VeluxDeutschland")]';
  private velux_instagram_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"https://www.instagram.com/veluxdach")]';
  private toast_message = '//div[@class="toast-message"]';
  private signIn_tab = '//legend[text()="Anmeldung"]';
  private password_error = '#loginPasswordStatus';
  private email_error = '#loginEmailStatus';
  
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
  
  clickTermsBtnFooter(){
    this.click(this.terms_btn_footer);
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

  clickHomeBtnHeader(){
    this.click(this.home_btn_header);
  }

  allowCookie(){
    //this.click(this.allow_cookie_btn);
    const cookieName = 'CookieConsent';
    const val = '{stamp:%27biCWQ8IPbyJJLYXNCgtZQDpCdHB3f6cRFj61+K+4Gc+AYGcaUc9/Nw==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1717675965893%2Cregion:%27pk%27}';
    this.setCookies(cookieName, val);
  }

}
