"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const searchPage_1 = require("../pages/searchPage");
const mufgPage_1 = require("../pages/mufgPage");
const cucumber_1 = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const search = new searchPage_1.SearchPageObject();
const mufg = new mufgPage_1.mufgPageObject();
const expect = chai.expect;
cucumber_1.Given(/^I open the mufg home page$/, () => __awaiter(this, void 0, void 0, function* () {
    // await browser.navigate().to("https://dev.apidev.mufg-oip.xlabs.one/marketplace/landing");
    yield expect(protractor_1.browser.getTitle()).to.eventually.contains("MUFG");
}));
When(/^I navigate to the login page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.navigate().to("https://sso-alpha.apidev.mufg-oip.xlabs.one/auth/realms/MUFG-Realm/protocol/openid-connect/auth?client_id=mufg-platform-frontend&redirect_uri=https%3A%2F%2Fdev.apidev.mufg-oip.xlabs.one%2Fmarketplace%2Fhome&state=7fecb8da-7d4a-486f-8c8f-4273de7649a3&response_mode=fragment&response_type=code&scope=openid&nonce=978d8a96-059c-49e4-8914-2dd02e5d6e3d");
}));
Then(/^I enter Username$/, () => __awaiter(this, void 0, void 0, function* () {
    yield mufg.usernameTextBox.sendKeys("yyy");
}));
Then(/^I enter Password$/, () => __awaiter(this, void 0, void 0, function* () {
    yield mufg.passwordTextBox.sendKeys("ccc@WSX");
}));
Then(/^I click Log in$/, () => __awaiter(this, void 0, void 0, function* () {
    yield mufg.loginButton.click();
}));
Then(/^I am on "(.*?)" page$/, (text) => __awaiter(this, void 0, void 0, function* () {
    if (text === "home") {
        yield expect(protractor_1.browser.getTitle()).to.eventually.contains("platform");
    }
}));
