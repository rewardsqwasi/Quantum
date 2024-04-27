export class Helper {

    static generateRandomString(length: number, numeric?: boolean): string {
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      if(numeric) characters = '0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters.charAt(randomIndex);
      }
      return result;
  }
  
}    