"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class mufgPageObject {
    constructor() {
        this.usernameTextBox = protractor_1.$("input[name='username']");
        this.passwordTextBox = protractor_1.$("input[name='password']");
        this.loginButton = protractor_1.$("input[value='Log In']");
        this.loginLink = protractor_1.element(protractor_1.by.linkText('Login'));
    }
}
exports.mufgPageObject = mufgPageObject;
