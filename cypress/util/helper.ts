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
  
  static currentDate(): string[] {
    const date = new Date();
    const dateString = date.toLocaleDateString("en-GB", {
      timeZone: 'Europe/London',
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const [month, day, year] = dateString.split('/');
    const formattedDate = `${day}-${month}-${year}`;
    const formattedDate2 = `${month}-${day}-${year}`;
    return [formattedDate,formattedDate2];
  }

}    