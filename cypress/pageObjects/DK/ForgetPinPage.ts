import BasePage from "../BasePage";

export default class ForgetPinPage extends BasePage {

  private url = '/forget-pin';
  private captcha_div = '.g-recaptcha';
  private captcha_error_div = '#g-recaptcha-error';
  private reset_password_heading = '//h1[text()="Nulstil PIN kode?"]';
  private email_field = '//input[@id="email"]';
  private info_text_one = '//p[text()="Dine login detaljer sendes til din email. Husk evt. at tjekke dit spam folder, hvis ikke du modtager mailen i din inbox."]';
  private info_text_two = '//p[text()="The SMS will also contain a verification code."]';
  private request_new_pass_btn = '//button[@id="submit"]';
  private toastMessage = '.toast-message';
  private enter_email_error = '//span[@id="emailStatus" and text()="Indtast din virksomhedsemail"]';
  private re_captcha_error = '//div[@id="g-recaptcha-error" and ./span[text()="reCaptcha er påkrævet."]]';

  reqNewPassword(email: string){
    this.removeCaptchaDiv();
    this.type(this.email_field, email);
    this.click(this.request_new_pass_btn);
  }


  removeCaptchaDiv(){
    this.removeFromDom(this.captcha_div);
    this.removeFromDom(this.captcha_error_div);
  }
  captchaDivElement(){
    return this.element(this.captcha_div);
  }

  reCaptchaErrorElement(){
    return this.element(this.re_captcha_error);
  }

  enterEmailErrorElement(){
    return this.element(this.enter_email_error);
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
