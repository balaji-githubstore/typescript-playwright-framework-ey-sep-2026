import { type Page } from "@playwright/test"
//all common element like menu, profile details 

const PATIENT_LOCATOR = "xpath=//div[text()='Patient']"

export class MainPage {
    private _page: Page;

    constructor(page: Page) {
        this._page = page;
    }


    public async clickOnPaitentMenu(): Promise<void> {
        await this._page.locator(PATIENT_LOCATOR).click();
    }

}