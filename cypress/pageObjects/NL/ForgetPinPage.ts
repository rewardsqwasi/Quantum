import BasePage from "../BasePage";

export default class ForgetPinPage extends BasePage {

  private url = '/forget-pin';
  private captcha_div = '.g-recaptcha';
  private captcha_error_div = '#g-recaptcha-error';
  private reset_password_heading = '//h1[text()="Gebruikersnaam of wachtwoord vergeten"]';
  private email_field = '#email';
  private info_text_one = '//p[text()="You will shortly receive an email and SMS detailing instructions on how to reset your password."]';
  private info_text_two = '//p[text()="The SMS will also contain a verification code."]';
  private request_new_pass_btn = '#submit';
  private toastMessage = '.toast-message';
  private enter_email_error = '//span[@id="emailStatus" and text()="Voer uw e-maildres in"]';
  private re_captcha_error = '//div[@id="g-recaptcha-error" and ./span[text()="reCaptcha is vereist"]]';

  reqNewPassword(email: string){
    this.removeCaptchaDiv();
    this.type(this.email_field, email);
    this.click(this.request_new_pass_btn);
  }
  
  reCaptchaErrorElement(){
    return this.element(this.re_captcha_error);
  }

  enterEmailErrorElement(){
    return this.element(this.enter_email_error);
  }

  captchaDivElement(){
    return this.element(this.captcha_div);
  }

  removeCaptchaDiv(){
    this.removeFromDom(this.captcha_div);
    this.removeFromDom(this.captcha_error_div);
  }

  resetPasswordHeadingElement(){
    return this.element(this.reset_password_heading);
  }

  infoTextOneElement(){
    return this.element(this.info_text_one);
  }

  infoTextTwoElement(){
    return this.element(this.info_text_two);
  }

  viewResetPasswordHeading(){
    this.inView(this.reset_password_heading);
  }

  emailFieldElement(){
    return this.element(this.email_field);
  }

  requestPassBtnElement(){
    return this.element(this.request_new_pass_btn);
  }

  enterEmail(email: string){
    this.type(this.email_field, email);
  }

  clickReqPassBtn(){
    this.click(this.request_new_pass_btn);
  }

  getToastMessageText(){
    return this.inner_text(this.toastMessage);
  }

  open(region: string){
    this.url = '/'+region+this.url;
    this.goToUrl(this.url);
  }

}