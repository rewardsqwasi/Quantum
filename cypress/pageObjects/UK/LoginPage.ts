import BasePage from "../BasePage";

export default class LoginPage extends BasePage {

  private email_field = '#loginEmail';
  private password_field = '#loginPassword';
  private login_btn = '#submit';
  private url = '/login';
  private header_links_section = '#top-menu';
  private footer_links_section = '//footer//h6[text()="Links"]/parent::div';
  private home_btn_header = '//ul[@id="top-menu"]//span[text()="Home"]/parent::a';
  private home_btn_footer = '//footer//h6[text()="Links"]/parent::div//span[text()="Home"]/parent::a';
  private terms_btn_header = '//ul[@id="top-menu"]//span[not(contains(text(),"General")) and contains(text(),"Terms") and contains(text(),"Conditions")]/parent::a';
  private terms_btn_footer = '//footer//h6[text()="Links"]/parent::div//span[text()="Terms & Conditions"]/parent::a';
  private privacy_btn_header = '//ul[@id="top-menu"]//span[text()="Privacy Policy"]/parent::a/parent::div';
  private velux_privacy_btn_header = '//ul[@id="top-menu"]//span[text()="VELUX Privacy Policy"]/parent::a';
  private velux_privacy_btn_footer = '//footer//h6[text()="Links"]/parent::div//span[contains(text(),"VELUX") and contains(text(),"Privacy Policy")]/parent::a';
  private altaterra_privacy_btn_header = '//ul[@id="top-menu"]//span[text()="Altaterra Privacy Policy"]/parent::a';
  private altaterra_privacy_btn_footer = '//footer//h6[text()="Links"]/parent::div//span[text()="Altaterra Privacy Policy"]/parent::a';
  private read_more_btn = '//span[text()="Read more"]';
  private contact_btn_header = '//ul[@id="top-menu"]//span[text()="Contact Us"]/parent::a';
  private contact_btn_footer = '//footer//h6[text()="Links"]/parent::div//span[text()="Contact Us"]/parent::a';
  private create_account_btn = '//a[text()="Create an account"]';
  private forgot_pass_btn = '//a[text()="Forgot your password?"]';
  private allow_cookie_btn = '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll';
  private allow_cookie_btn2 = '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll_2';
  private cookie_show_detail = '//div[@class="cookiebot__details"]/a';

  login(email: string, password: string){
    if(email==undefined) email = " ";
    if(password==undefined) password = " ";
    this.type(this.email_field,email);
    this.type(this.password_field, password);
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
    this.click2(this.cookie_show_detail);
    this.click2(this.allow_cookie_btn2);
  }

}