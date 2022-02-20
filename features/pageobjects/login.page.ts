import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }
    get menuBar () { return $('#menu_button') }
    get logoutbutton () { return $('//*[@id="username"]/a') }
    get campaignManagementLink () { return $('//*[@id="menu"]/ul/li[1]/a') }
    get menuDisplay () { return $('#menu') }
    get newCampignButton () { return $('/html/body/div[7]/div[2]/span/a') }
    get backToCampaignsLink () { return $('/html/body/div[7]/a') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
