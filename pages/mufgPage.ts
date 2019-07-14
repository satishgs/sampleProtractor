import {$, by, element, ElementFinder} from "protractor";

export class mufgPageObject {
    public usernameTextBox: ElementFinder;
    public passwordTextBox: ElementFinder;
    public loginButton: ElementFinder;
    public loginLink: ElementFinder;


    constructor() {
        this.usernameTextBox = $("input[name='username']");
        this.passwordTextBox = $("input[name='password']");
        this.loginButton = $("input[value='Log In']");
        this.loginLink = element(by.linkText('Login'));
    }
}
