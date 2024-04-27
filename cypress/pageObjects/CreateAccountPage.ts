import BasePage from "./BasePage";

export default class CreateAccountPage extends BasePage {

  private url = '/uk/create-account';
  private profile_detail_heading = '//h2[text()=" Your profile details"]/parent::div';
  private first_name_field = '#firstName';
  private last_name_field = '#lastName';
  private company_name_field = '#companyName';
  private company_number_field = '#companyNumber';
  private address_1_field = '#address1';
  private address_2_field = '#address2';
  private postcode_field = '#postcode';
  private town_field = '#town';
  private mobile_field = '#mobile';
  private verify_mobile_field = '#mobile_verify';
  private your_company_heading = '//h2[text()=" A little bit about you and your company"]/parent::div';
  private how_many_people_ques = '//div[@id="q3CoreWrapper"]/select';
  private working_time_ques = '//div[@id="q9CoreWrapper"]/select';
  private how_many_roof_ques = '//div[@id="q5CoreWrapper"]/input';
  private how_many_velux_ques = '//div[@id="q6CoreWrapper"]/select';
  private how_many_dakea_ques = '//div[@id="q10CoreWrapper"]/select';
  private describe_yourself_ques = '//div[@id="q7CoreWrapper"]/select';
  private velux_rewards_ques = '//div[@id="q8CoreWrapper"]/select';
  private recommend_velux_ques = '//div[@id="q2CoreWrapper"]/select';
  private recommend_dakea_ques = '//div[@id="q11CoreWrapper"]/select';
  private social_media_info_heading = '//h2[text()=" Social media information"]/parent::div';
  private website_field = '#website';
  private facebook_field = '#facebook';
  private youtube_field = '#youtube';
  private instagram_field = '//input[@name="instagram"]';
  private create_account_login_heading = '//h2[text()=" Create account login"]/parent::div';
  private email_field = '#email';
  private verify_email_field = '#verifyEmail';
  private password_field = '#password';
  private terms_checkbox = '#terms';
  private email_promotion_checkbox = '#optinMarketing';
  private sms_promotion_checkbox = '#optinsms';
  private create_account_btn = '#register';

  profileDetailHeadingElement(){
    return this.element(this.profile_detail_heading);
  }

  viewProfileDetailHeading(){
    this.inView(this.profile_detail_heading);
  }

  firstNameFieldElement(){
    return this.element(this.first_name_field);
  }

  lastNameFieldElement(){
    return this.element(this.last_name_field);
  }

  companyNameFieldElement(){
    return this.element(this.company_name_field);
  }

  companyNumberFieldElement(){
    return this.element(this.company_number_field);
  }

  address1FieldElement(){
    return this.element(this.address_1_field);
  }

  address2FieldElement(){
    return this.element(this.address_2_field);
  }

  postcodeFieldElement(){
    return this.element(this.postcode_field);
  }

  townFieldElement(){
    return this.element(this.town_field);
  }

  mobileFieldElement(){
    return this.element(this.mobile_field);
  }

  verifyMobileFieldElement(){
    return this.element(this.verify_mobile_field);
  }

  yourCompanyHeadingElement(){
    return this.element(this.your_company_heading);
  }

  viewYourCompanyHeading(){
    this.inView(this.your_company_heading);
  }

  howManyPeopleQuesElement(){
    return this.element(this.how_many_people_ques);
  }

  workingTimeQuesElement(){
    return this.element(this.working_time_ques);
  }

  howManyRoofQuesElement(){
    return this.element(this.how_many_roof_ques);
  }

  howManyVeluxQuesElement(){
    return this.element(this.how_many_velux_ques);
  }

  howManyDakeaQuesElement(){
    return this.element(this.how_many_dakea_ques);
  }

  describeYourselfQuesElement(){
    return this.element(this.describe_yourself_ques);
  }

  veluxRewardsQuesElement(){
    return this.element(this.velux_rewards_ques);
  }

  recommendVeluxQuesElement(){
    return this.element(this.recommend_velux_ques);
  }

  recommendDakeaQuesElement(){
    return this.element(this.recommend_dakea_ques);
  }

  socialMediaInfoHeadingElement(){
    return this.element(this.social_media_info_heading);
  }

  viewSocialMediaInfoHeading(){
    this.inView(this.social_media_info_heading);
  }

  websiteFieldElement(){
    return this.element(this.website_field);
  }

  facebookFieldElement(){
    return this.element(this.facebook_field);
  }

  youtubeFieldElement(){
    return this.element(this.youtube_field);
  }

  instagramFieldElement(){
    return this.element(this.instagram_field);
  }

  createAccountLoginHeadingElement(){
    return this.element(this.create_account_login_heading);
  }

  viewCreateAccountLoginHeading(){
    this.inView(this.create_account_login_heading);
  }

  emailFieldElement(){
    return this.element(this.email_field);
  }

  verifyEmailFieldElement(){
    return this.element(this.verify_email_field);
  }

  passwordFieldElement(){
    return this.element(this.password_field);
  }

  termsCheckboxElement(){
    return this.element(this.terms_checkbox);
  }

  emailPromotionCheckboxElement(){
    return this.element(this.email_promotion_checkbox);
  }

  smsPromotionCheckboxElement(){
    return this.element(this.sms_promotion_checkbox);
  }

  createAccountBtnElement(){
    return this.element(this.create_account_btn);
  }

  open(){
    this.goToUrl(this.url);
  }

}