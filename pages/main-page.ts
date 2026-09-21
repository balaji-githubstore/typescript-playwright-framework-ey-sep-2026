import { type Page } from "@playwright/test"
import { PlaywrightKeywords } from "../base/automation-wrapper.js";
//all common element like menu, profile details 

const PATIENT_LOCATOR = "xpath=//div[text()='Patient']"

export class MainPage extends PlaywrightKeywords {

    constructor(page: Page) {
        super(page)
    }

    public async clickOnPaitentMenu(): Promise<void> {
        await super.clickElement(PATIENT_LOCATOR);
    }
}