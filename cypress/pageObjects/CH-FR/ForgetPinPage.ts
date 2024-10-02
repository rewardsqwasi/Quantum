import BasePage from "../BasePage";

export default class ForgetPinPage extends BasePage {

  private url = '/forget-pin';
  private captcha_div = '.g-recaptcha';
  private captcha_error_div = '#g-recaptcha-error';
  private reset_password_heading = '//h1[text()="Demander un nouveau mot de passe"]';
  private email_field = '#email';
  private info_text_one = '//p[text()="Vous aviez un login pour l\'outil pour installateurs et vous vous connectez désormais pour la première fois au nouveau portail VELUX PRIMA? Pour cela, veuillez demander un nouveau mot de passe pour votre adresse e-mail habituelle. Dès que vous l\'aurez fait, vous pourrez vous connecter aisément au portail VELUX PRIMA. Ou peut-être avez-vous oublié votre mot de passe? Vous pouvez là encore en demander un nouveau à cet endroit."]';
  private request_new_pass_btn = '#submit';
  private toastMessage = '.toast-message';
  private enter_email_error = '//span[@id="emailStatus" and text()="Votre adresse e-mail"]';
  private enter_email_error_2 = '//span[@id="emailStatus" and text()="S\'il vous plaît, mettez une adresse email valide"]';
  private re_captcha_error = '//div[@id="g-recaptcha-error" and ./span[contains(text(),"reCaptcha est requis")]]';

  enterEmailErrorElement(){
    return this.element(this.enter_email_error);
  }

  enterEmailError2Element(){
    return this.element(this.enter_email_error_2);
  }

  reCaptchaErrorElement(){
    return this.element(this.re_captcha_error);
  }

  removeCaptchaDiv(){
    this.removeFromDom(this.captcha_div);
    this.removeFromDom(this.captcha_error_div);
  }

  captchaDivElement(){
    return this.element(this.captcha_div);
  }

  resetPasswordHeadingElement(){
    return this.element(this.reset_password_heading);
  }

  infoTextOneElement(){
    return this.element(this.info_text_one);
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
  
  reqNewPassword(email: string){
    this.removeCaptchaDiv();
    this.type(this.email_field, email);
    this.click(this.request_new_pass_btn);
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
