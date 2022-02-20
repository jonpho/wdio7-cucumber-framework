import { Given, When, Then } from '@wdio/cucumber-framework';
import loginPage from '../pageobjects/login.page';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import CampaignsPage from '../pageobjects/campaigns.page';

const pages : { [key: string] : any } = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Given(/^I navigate to admin page$/, async () => {
    return browser.url("https://jonathan-phos-macbook-pro.junlabs.com/admin/campaigns")
})

Given(/^I click on the new campaigns$/, async () => {
    await CampaignsPage.newCampignButton.click()
})

Given(/^I click on the back campaign link$/, async () => {
    await CampaignsPage.backToCampaignsLink.click()
})

Given(/^I click on the logout link$/, async () => {
    await CampaignsPage.logoutButton.click()
})

Given(/^Select (\w+) in the Content Catagory DropDown$/, async (value) => {
    await CampaignsPage.selectContentCategoryDropDownValue(value)
})
