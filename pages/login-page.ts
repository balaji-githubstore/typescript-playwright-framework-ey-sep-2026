import { type Page, expect } from "@playwright/test"
import { PlaywrightKeywords } from "../base/automation-wrapper.js"


const USERNAME_LOCATOR = "xpath=//input[@id='authUser']"
const PASSWORD_LOCATOR = "xpath=//input[@id='clearPass']"
const LANGUAGE_LOCATOR = "xpath=//select[@name='languageChoice']"
const LOGIN_LOCATOR = "xpath=//button[@id='login-button']"
const ERROR_LOCATOR = "xpath=//p[contains(text(),'Invalid')]"

export class LoginPage extends PlaywrightKeywords {

    constructor(page: Page) {
        super(page);
        
    }

    public async enterUsername(username: string): Promise<void> {
        // await this._page.locator(USERNAME_LOCATOR).fill(username);
        await super.sendTextToElement(USERNAME_LOCATOR, username);
    }

    public async enterPassword(password: string): Promise<void> {
        // await this._page.locator(PASSWORD_LOCATOR).fill(password);
        await super.sendTextToElement(PASSWORD_LOCATOR, password);
    }

    public async selectLanguage(languageLabel: string): Promise<void> {
        // await this._page.locator(LANGUAGE_LOCATOR).selectOption({ label: languageLabel });
        await super.selectDropdownWithLabel(LANGUAGE_LOCATOR,languageLabel);
    }

    public async clickLogin(): Promise<void> {
        // await this._page.locator(LOGIN_LOCATOR).click();
       await super.clickElement(LOGIN_LOCATOR);
    }

    public async validateInvalidLoginError(expectedError: string): Promise<void> {
        // await expect(this._page.locator(ERROR_LOCATOR)).toHaveText(expectedError);
        await super.assertText(ERROR_LOCATOR,expectedError);
    }

}