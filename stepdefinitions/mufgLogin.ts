import {$$, browser, by, element, protractor} from "protractor";
import {SearchPageObject} from "../pages/searchPage";
import {mufgPageObject} from "../pages/mufgPage";
import {Given} from "cucumber";

const {When, Then} = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const search: SearchPageObject = new SearchPageObject();
const mufg: mufgPageObject = new mufgPageObject();
const expect = chai.expect;



Given(/^I open the mufg home page$/, async () => {


    // await browser.navigate().to("https://dev.apidev.mufg-oip.xlabs.one/marketplace/landing");
    await expect(browser.getTitle()).to.eventually.contains("MUFG");

});


When(/^I navigate to the login page$/, async () => {


    await browser.navigate().to("https://sso-alpha.apidev.mufg-oip.xlabs.one/auth/realms/MUFG-Realm/protocol/openid-connect/auth?client_id=mufg-platform-frontend&redirect_uri=https%3A%2F%2Fdev.apidev.mufg-oip.xlabs.one%2Fmarketplace%2Fhome&state=7fecb8da-7d4a-486f-8c8f-4273de7649a3&response_mode=fragment&response_type=code&scope=openid&nonce=978d8a96-059c-49e4-8914-2dd02e5d6e3d");


});


Then(/^I enter Username$/, async () => {
    await mufg.usernameTextBox.sendKeys("yyy");
});

Then(/^I enter Password$/, async () => {
    await mufg.passwordTextBox.sendKeys("ccc@WSX");
});

Then(/^I click Log in$/, async () => {
    await mufg.loginButton.click();
});

Then(/^I am on "(.*?)" page$/, async (text) => {

    if (text === "home") {
        await expect(browser.getTitle()).to.eventually.contains("platform");

    }
});