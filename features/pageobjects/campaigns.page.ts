import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CampaignsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get menuBar () { return $('#menu_button') }
    get logoutButton () { return $('//*[@id="username"]/a') }
    get campaignManagementLink () { return $('//*[@id="menu"]/ul/li[1]/a') }
    get menuDisplay () { return $('#menu') }
    get newCampignButton () { return $('/html/body/div[7]/div[2]/span/a') }
    get backToCampaignsLink () { return $('/html/body/div[7]/a') }

    // Update Campaigns Form
    get nameField () { return $('#campaign_name') }
    get saleForceOpportunityIdField () { return $('#campaign_salesforce_opportunity_id') }
    get selfServiceAccountIdField () { return $('#campaign_self_service_account_id') }
    get descriptionField () { return $('#campaign_description') }
    get contentCategoryDropDown () { return $('#campaign_content_category_id') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
   async selectContentCategoryDropDownValue (content: string) {
       await this.contentCategoryDropDown.selectByVisibleText(content)
   }

    /**
     * overwrite specifc options to adapt it to page object
     */

}

export default new CampaignsPage();