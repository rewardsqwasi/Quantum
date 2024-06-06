import BasePage from "../BasePage";

export default class LoginPage extends BasePage {

  private email_field = '#loginEmail';
  private password_field = '#loginPassword';
  private remember_me_checkbox = '#remember';
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
  private contact_email_footer_text = '(//footer//div[@class="grid_3"])[1]//a[text()="myrewards@velux.co.uk"]';
  private contact_number_footer_text = '(//footer//div[@class="grid_3"])[1]//p[text()="Tel: 01592 778293"]';
  private address_footer_text = '(//footer//div[@class="grid_3"])[1]//p[1]';
  private altaterra_email_footer_text = '(//footer//div[@class="grid_3"])[4]//a[text()="cs@altaterra.eu"]';
  private altaterra_footer_text = '(//footer//div[@class="grid_3"])[4]//p[1]';
  private footer_social_link_section = '(//footer//div[@class="grid_3"])[3]';
  private velux_facebook_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"facebook.com/VELUXGBI")]';
  private velux_twitter_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"twitter.com/veluxgbi") or contains(@href,"twitter.com/VELUXGBI")]';
  private velux_pinterest_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"pinterest.com/VELUXGroup") or contains(@href,"pinterest.com/veluxgbi")]';
  private velux_youtube_link_footer = '(//footer//div[@class="grid_3"])[3]//a[contains(@href,"www.youtube.com/channel/UC57bJX1nvVM94JR66LoXhJQ") or contains(@href,"www.youtube.com/user/VeluxGBI")]';
  private dakea_facebook_link_footer = '(//footer//div[@class="grid_3"])[6]//a[contains(@href,"facebook.com/HelloDakea")]';
  private dakea_linkedin_link_footer = '(//footer//div[@class="grid_3"])[6]//a[contains(@href,"linkedin.com/company/dakeauk/")]';
  private dakea_youtube_link_footer = '(//footer//div[@class="grid_3"])[6]//a[contains(@href,"youtube.com/user/DakeaChannel")]';
  private banner_div = '//div[@id="banner"]';
  private banner_images = '//div[@id="banner"]//img';
  private toast_message = '//div[@class="toast-message"]';
  private signIn_tab = '//legend[text()="Sign In"]';
  private remember_me_label = '//label[text()="Remember me"]';
  private not_already_member_text = '//p/strong[text()="Not already a member?"]';
  private create_account_today_text = '//p[contains(text(),"Create an account today")]';

  createAccountTodayTextElement(){
    return this.element(this.create_account_today_text);
  }

  notAlreadyMemberTextElement(){
    return this.element(this.not_already_member_text);
  }
  
  rememberMeLabelElement(){
    return this.element(this.remember_me_label);
  }

  signInTabElement(){
    return this.element(this.signIn_tab);
  }

  getEmailFieldValidationMsg(){
    return this.validationMessage(this.email_field);
  }

  getPasswordFieldValidationMsg(){
    return this.validationMessage(this.password_field);
  }

  getToastMessagText(){
    return this.inner_text(this.toast_message);
  }

  getTypeOfPasswordField(){
    return this.getAttributeValue
  }

  bannerDivElement(){
    return this.element(this.banner_div);
  }

  bannerImagesElement(){
    return this.element(this.banner_images);
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

  footerSocialLinkSectionElement(){
    return this.element(this.footer_social_link_section);
  }

  viewFooterSocialLinkSection(){
    this.inView(this.footer_social_link_section);
  }

  altaterraEmailFooterTextElement(){
    return this.element(this.altaterra_email_footer_text);
  }

  altaterraFooterText(){
    return this.inner_text(this.altaterra_footer_text);
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

  login(email: string, password: string, remember?: boolean){
    this.clear(this.email_field);
    this.clear(this.password_field);
    if(email==undefined) email = " ";
    if(password==undefined) password = " ";
    if(email!="") this.type(this.email_field,email);
    if(password!="") this.type(this.password_field, password);
    if(remember==true) this.check(this.remember_me_checkbox);
    this.click(this.login_btn);
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

  loginBtnlement(){
    return this.element(this.email_field);
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
    //this.click2(this.cookie_show_detail);
    //this.click2(this.allow_cookie_btn2);
    const cookieName = 'CookieConsent';
    const val = '{stamp:%27QhzfsrxRQtq2/WIouKTtnXTlD1ngiqm0VXvYOouaHnqUZvnYaGc4OQ==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1717504517172%2Cregion:%27pk%27}';
    this.setCookies(cookieName, val);
  }

}
