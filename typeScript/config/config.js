"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter_1 = require("../support/reporter");
const jsonReports = process.cwd() + "/reports/json";
exports.config = {
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    // baseUrl: "https://www.google.com",
    baseUrl: "https://dev.apidev.mufg-oip.xlabs.one/marketplace/landing",
    capabilities: {
        browserName: "chrome",
        chromeOptions: { args: ["window-size=#{DEFAULT_X_RES},#{DEFAULT_Y_RES}"], w3c: false },
    },
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: [
        "../../features/*.feature",
    ],
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().window().maximize();
        reporter_1.Reporter.createDirectory(jsonReports);
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        strict: true,
        tags: "@mufg",
    },
    onComplete: () => {
        reporter_1.Reporter.createHTMLReport();
    },
};
