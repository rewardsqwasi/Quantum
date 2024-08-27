import BasePage from "../BasePage";

export default class LoginPage extends BasePage {

  private email_field = '#loginEmail';
  private password_field = '#loginPassword';
  private login_btn = '#submit';
  private url = '/login';
  private header_links_section = '#top-menu';
  private footer_links_section = '//footer//h6[text()="Länkar"]/parent::div';
  private home_btn_header = '//ul[@id="top-menu"]//span[text()="Hem"]/parent::a';
  private terms_btn_header = '//ul[@id="top-menu"]//span[text()="allmänna villkoren"]/parent::a';
  private privacy_btn_header = '//ul[@id="top-menu"]//span[text()="Integritetspolicy"]/parent::a';
  private home_btn_footer = '//footer//h6[text()="Länkar"]/parent::div//span[text()="Hem"]/parent::a';
  private velux_privacy_btn_footer = '//footer//h6[text()="Länkar"]/parent::div//span[contains(text(),"Integritetspolicy")]/parent::a';
  private terms_btn_footer = '//footer//h6[text()="Länkar"]/parent::div//span[text()="allmänna villkoren"]/parent::a';
  private contact_btn_header = '//ul[@id="top-menu"]//span[text()="Kontakta oss"]/parent::a';
  private contact_btn_footer = '//footer//h6[text()="Länkar"]/parent::div//span[text()="Kontakta oss"]/parent::a';
  private create_account_btn = '//a[text()="Skapa ett konto"]';
  private forgot_pass_btn = '//a[text()="Glömt pinkod?"]';
  private banner_div = '//div[@id="banner"]';
  private banner_images = '//div[@id="banner"]//img';
  private contact_email_footer_text = '(//footer//div[@class="grid_3"])[1]//a[text()="info@velux.se"]';
  private contact_number_footer_text = '(//footer//div[@class="grid_3"])[1]//p[text()="Tel: 042-20 83 80"]';
  private address_footer_text = '(//footer//div[@class="grid_3"])[1]//p[1]';
  private footer_social_link_section = '(//footer//div[@class="grid_3"])[3]';
  private velux_youtube_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"www.youtube.com/channel/UCGPgfblxksDbfAwj2DJnISg")]';
  private velux_facebook_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"facebook.com/VELUXSweden/")]';
  private signIn_tab = '//legend[text()="Registrering"]';
  private password_error = '#loginPasswordStatus';
  private email_error = '#loginEmailStatus';
  private toast_message = '//div[@class="toast-message"]';

  getToastMessagText(){
    return this.inner_text(this.toast_message);
  }

  pressEnter(){
    this.type(this.password_field, '{enter}');
  }

  getEmailFieldErrorMsg(){
    return this.inner_text(this.email_error);
  }

  getPasswordFieldErrorMsg(){
    return this.inner_text(this.password_error);
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

  loginBtnElement(){
    return this.element(this.login_btn);
  }

  signInTabElement(){
    return this.element(this.signIn_tab);
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

  clickTermsBtnFooter(){
    this.click(this.terms_btn_footer);
  }

  bannerDivElement(){
    return this.element(this.banner_div);
  }

  bannerImagesElement(){
    return this.element(this.banner_images);
  }

  clickVeluxPrivacyBtnFooter(){
    this.forceClick(this.velux_privacy_btn_footer);
  }

  clickContactBtnHeader(){
    this.click(this.contact_btn_header);
  }

  clickTermsBtnHeader(){
    this.click(this.terms_btn_header);
  }

  clickPrivacyBtnHeader(){
    this.click(this.privacy_btn_header);
  }

  clickContactBtnFooter(){
    this.click(this.contact_btn_footer);
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

  footerSocialLinkSectionElement(){
    return this.element(this.footer_social_link_section);
  }

  viewFooterSocialLinkSection(){
    this.inView(this.footer_social_link_section);
  }

  veluxYoutubeLinkElement(){
    return this.element(this.velux_youtube_link_footer);
  }

  veluxFacebookLinkElement(){
    return this.element(this.velux_facebook_link_footer);
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