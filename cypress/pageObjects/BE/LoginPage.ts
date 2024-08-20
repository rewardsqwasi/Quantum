import BasePage from "../BasePage";

export default class LoginPage extends BasePage {

  private email_field = '#loginEmail';
  private password_field = '#loginPassword';
  private login_btn = '#submit';
  private url = '/login';
  private header_links_section = '#top-menu';
  private footer_links_section = '//footer//h6[text()="Liens"]/parent::div';
  private home_btn_header = '//ul[@id="top-menu"]//span[text()="Accueil"]/parent::a';
  private home_btn_footer = '//footer//h6[text()="Liens"]/parent::div//span[text()="Accueil"]/parent::a';
  private velux_privacy_btn_footer = '//footer//h6[text()="Liens"]/parent::div//span[contains(text(),"Politique de Confidentialité")]/parent::a';
  private terms_btn_footer = '//footer//h6[text()="Liens"]/parent::div//span[text()="Conditions Générales"]/parent::a';
  private contact_btn_header = '//ul[@id="top-menu"]//span[text()="Contactez-nous"]/parent::a';
  private contact_btn_footer = '//footer//h6[text()="Liens"]/parent::div//span[text()="Contactez-nous"]/parent::a';
  private create_account_btn = '//a[text()="Demandez l\'accès"]';
  private forgot_pass_btn = '//a[text()="Mot de passe oublié?"]';
  private terms_btn_header = '//ul[@id="top-menu"]//span[contains(text(),"Terms") and contains(text(),"conditions")]/parent::a';
  private privacy_btn_header = '//ul[@id="top-menu"]//span[text()="Politique de Confidentialité"]/parent::a';
  private faq_btn_header = '//ul[@id="top-menu"]//span[text()="Questions fréquentes"]/parent::a';
  private banner_div = '//div[@id="banner"]';
  private banner_images = '//div[@id="banner"]//img';
  private contact_email_footer_text = '(//footer//div[@class="grid_3"])[1]//a[text()="professionals-be@velux.com"]';
  private contact_number_footer_text = '(//footer//div[@class="grid_3"])[1]//p[text()="Tel: +32 (0)10 42 09 09"]';
  private address_footer_text = '(//footer//div[@class="grid_3"])[1]//p[1]';
  private footer_social_link_section = '(//footer//div[@class="grid_3"])[3]';
  private velux_twitter_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"twitter.com/VELUXBelgium")]';
  private velux_pinterest_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"pinterest.com/VELUXBe/")]';
  private velux_youtube_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"www.youtube.com/user/VELUXBelgium")]';
  private velux_facebook_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"facebook.com/velux.be")]';
  private signIn_tab = '//legend[text()="Connexion"]';
  private password_error = '#loginPasswordStatus';
  private email_error = '#loginEmailStatus';
  private toast_message = '//div[@class="toast-message"]';
  private french_lang_btn = '//span[text()="FR"]/parent::a';
  private dutch_lang_btn = '//span[text()="NL"]/parent::a';

  switchToFR(){
    this.click(this.french_lang_btn);
  }

  switchToNL(){
    this.click(this.dutch_lang_btn);
  }

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

  clickTermsBtnHeader(){
    this.click(this.terms_btn_header);
  }

  clickPrivacyBtnHeader(){
    this.click(this.privacy_btn_header);
  }

  clickFAQBtnHeader(){
    this.click(this.faq_btn_header);
  }

}
