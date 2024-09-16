import BasePage from "../BasePage";

export default class LoginPage extends BasePage {

  private email_field = '#loginEmail';
  private password_field = '#loginPassword';
  private login_btn = '#submit';
  private url = '/login';
  private header_links_section = '#top-menu';
  private footer_links_section = '//footer//h6[text()="Linker"]/parent::div';
  private home_btn_header = '//ul[@id="top-menu"]//span[text()="Hjem"]/parent::a';
  private home_btn_footer = '//footer//h6[text()="Linker"]/parent::div//span[text()="Hjem"]/parent::a';
  private terms_btn_header = '//ul[@id="top-menu"]//span[text()="Vilkår og betingelser"]/parent::a';
  private terms_btn_footer = '//footer//h6[text()="Linker"]/parent::div//span[text()="Vilkår og betingelser"]/parent::a';
  private velux_privacy_btn_header = '//ul[@id="top-menu"]//span[text()="Personvernerklæring"]/parent::a';
  private velux_privacy_btn_footer = '//footer//h6[text()="Linker"]/parent::div//span[text()="Personvernerklæring"]/parent::a';
  private contact_btn_header = '//div[@id="top"]//ul[@id="top-menu"]/li/a[span[text()="Kontakt oss"]]';
  private contact_btn_footer = '//footer//h6[text()="Linker"]/parent::div//span[text()="Kontakt oss"]/parent::a';
  private create_account_btn = '//a[text()="Opprett konto"]';
  private forgot_pass_btn = '//a[text()="Glemt din pinkode?"]';
  private banner_div = '//div[@id="banner"]';
  private banner_images = '//div[@id="banner"]//img';
  private contact_email_footer_text = '(//footer//div[@class="grid_3"])[1]//a[text()="velux-no@velux.com"]';
  private contact_number_footer_text = '(//footer//div[@class="grid_3"])[1]//p[text()="Tlf: 22 51 06 00"]';
  private address_footer_text = '(//footer//div[@class="grid_3"])[1]//p[1]';
  private footer_social_link_section = '(//footer//div[@class="grid_3"])[3]';
  private velux_youtube_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"www.youtube.com/channel/UC777mfTScqf5YVsAM722Xyg")]';
  private velux_facebook_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"www.facebook.com/VELUXNorge")]';
  private velux_pinterest_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"www.pinterest.com/veluxnorgeas/")]';
  private signIn_tab = '//legend[text()="Logg inn"]';
  private not_already_member_text = '//p/strong[text()="Ny i VELUX Bonus?"]';
  private create_account_today_text = '//p[contains(text(),"Opprett en konto i dag det passer perfekt!")]'
  private toast_message = '//div[@class="toast-message"]';
  private email_error = '#loginEmailStatus';
  private password_error = '#loginPasswordStatus';

  login(email: string, password: string, remember?: boolean){
    this.clear(this.email_field);
    this.clear(this.password_field);
    if(email==undefined) email = " ";
    if(password==undefined) password = " ";
    if(email!="") this.type(this.email_field,email);
    if(password!="") this.type(this.password_field, password);
    //if(remember==true) this.check(this.remember_me_checkbox);
    this.click(this.login_btn);
  }

  getPasswordFieldErrorMsg(){
    return this.inner_text(this.password_error);
  }

  getPasswordFieldValidationMsg(){
    return this.validationMessage(this.password_field);
  }

  getToastMessagText(){
    return this.inner_text(this.toast_message);
  }

  getEmailFieldValidationMsg(){
    return this.validationMessage(this.email_field);
  }

  getEmailFieldErrorMsg(){
    return this.inner_text(this.email_error);
  }

  createAccountTodayTextElement(){
    return this.element(this.create_account_today_text);
  }

  passwordFieldElement(){
    return this.element(this.password_field);
  }

  pressEnter(){
    this.type(this.password_field, '{enter}');
  }

  notAlreadyMemberTextElement(){
    return this.element(this.not_already_member_text);
  }

  emailFieldElement(){
    return this.element(this.email_field);
  }

  signInTabElement(){
    return this.element(this.signIn_tab);
  }

  loginBtnElement(){
    return this.element(this.login_btn);
  }

  veluxFacebookLinkElement(){
    return this.element(this.velux_facebook_link_footer);
  }

  veluxPinterestLinkElement(){
    return this.element(this.velux_pinterest_link_footer);
  }

  contactNumberFooterTextElement(){
    return this.element(this.contact_number_footer_text);
  }

  getAddressFooterText(){
    return this.inner_text(this.address_footer_text);
  }

  viewFooterSocialLinkSection(){
    this.inView(this.footer_social_link_section);
  }

  bannerImagesElement(){
    return this.element(this.banner_images);
  }

  footerSocialLinkSectionElement(){
    return this.element(this.footer_social_link_section);
  }

  veluxYoutubeLinkElement(){
    return this.element(this.velux_youtube_link_footer);
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

  clickPrivacyBtnHeader(){
    this.forceClick(this.velux_privacy_btn_header);
  }

  clickPrivacyBtnFooter(){
    this.forceClick(this.velux_privacy_btn_footer);
  }

  clickContactUsBtnHeader(){
    this.click(this.contact_btn_header);
  }

  clickTermsBtnFooter(){
    this.click(this.terms_btn_footer);
  }

  clickContactBtnHeader(){
    this.click(this.contact_btn_header);
  }

  contactEmailFooterTextElement(){
    return this.element(this.contact_email_footer_text);
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

  bannerDivElement(){
    return this.element(this.banner_div);
  }

}
