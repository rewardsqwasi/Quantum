import BasePage from "../BasePage";
import { Email } from '../../util/types';

export default class EmailPage extends BasePage {

  private url = 'http://email';
  private finalizeYourLinkBtn = '//*[text()="FINALIZE YOUR LINK "]/parent::a';
  private connectBtn = '//*[contains(text(),"CONNECT")]/parent::a';
  private resetPasswordBtn = '//*[text()="RESET PASSWORD"]/parent::a';
  private visitGrouptBtn = '//*[contains(text(),"VISIT GROUP")]/parent::a';
  private restmailUrl = 'http://restmail.net';
  private loginCodeText = '//td[contains(text(),"Welcome back. Here is a one time login code.")]';
  private joinMeetingBtn = '//*[contains(text(),"JOIN MEETING")]/parent::a';
  private temporaryPassword = '//tr//p[text()="Temporary Password"]//following::tr[1]/td/p';
  private setPasswordBtn = '//strong[text()="SET PASSWORD"]/parent::a[@class="btn-link"]';

  renderEmail(content: string) {
    this.renderContent(this.url, content);
  }
  
   clickConnectBtn() {
     this.click(this.connectBtn);
     //this.waitUntilURL(/.*\/cp\//);
  }

   clickVisitGroupBtn() {
     this.click(this.visitGrouptBtn);
     //this.waitUntilURL(/.*\/cp\//);
  }

   clickFinalizeYourLinkBtn() {
     this.click(this.finalizeYourLinkBtn);
    // this.waitUntilURL(/.*claim-your-link/);
  }

   clickRestPasswordBtn() {
     this.click(this.resetPasswordBtn);
     //this.waitUntilURL(/.*reset/);
  }

   getLatestEmail(email: string): Email {
    let mailbox = (email.split('@')[0]).toLowerCase();
    let url = `${this.restmailUrl}/mail/${mailbox}`
    let triesLeft = 10
    do {
      const response = this.getRequest(url);
        console.log("GET RESPONSE FROM PAGE: "+response);
        if (response) {
          console.log("GET RESPONSE BODY FROM PAGE: "+response);
          const data = response;
          //if (response > 0) {
            console.log("INSIEDE"+response);
            this.deleteEmail(email);
            return {
              from: data[0].from[0].address,
              to: data[0].to[0].address,
              subject: data[0].subject,
              html: data[0].html,
            }
          //}
          
        } else {
          console.error(`[API] could not read emails ${email}`);
        }
        this.wait(1000);
        triesLeft--;
    } while (triesLeft){
        console.error(`[API] inbox is empty for ${email}`);
        return {
          from: email,
          to: email,
          subject: `Inbox is empty for ${email}`,
          html: `<div dir=\"ltr\">Inbox is empty for ${email}</div>\n`,
        }
    }
  }

  async getLatestEmail2(email: string): Promise<Email> {
    let mailbox = (email.split('@')[0]).toLowerCase();
    let url = `${this.restmailUrl}/mail/${mailbox}`
    let triesLeft = 10
    do {
      const response = await this.getRequest3(url);
        console.log("GET RESPONSE FROM PAGE: "+response);
        if (response) {
          console.log("GET RESPONSE BODY FROM PAGE: "+response);
          const data = response;
          //if (response > 0) {
            console.log("INSIEDE"+response);
            await this.deleteEmail(email);
            return {
              from: data[0].from[0].address,
              to: data[0].to[0].address,
              subject: data[0].subject,
              html: data[0].html,
            }
          //}
          
        } else {
          console.error(`[API] could not read emails ${email}`);
        }
        this.wait(1000);
        triesLeft--;
    } while (triesLeft){
        console.error(`[API] inbox is empty for ${email}`);
        return {
          from: email,
          to: email,
          subject: `Inbox is empty for ${email}`,
          html: `<div dir=\"ltr\">Inbox is empty for ${email}</div>\n`,
        }
    }
  } 

  deleteEmail(email: string) {
    let mailbox = (email.split('@')[0]).toLowerCase();
    let url = `${this.restmailUrl}/mail/${mailbox}`
    this.deleteRequest(url);
  }

  connectBtnElement(){
    return this.element(this.connectBtn);
  }

  visitGroupBtnElement(){
    return this.element(this.visitGrouptBtn);
  }

  loginCodeTextElement(){
    return this.element(this.loginCodeText);
  }

  joinMeetingBtnElement(){
    return this.element(this.joinMeetingBtn);
  }

   clickJoinMeetingBtn() {
     this.click(this.joinMeetingBtn);
  }

  temporaryPasswordElement(){
    return this.element(this.temporaryPassword);
  }

  clickSetPasswordBtn() {
     this.click(this.setPasswordBtn);
  }

}
