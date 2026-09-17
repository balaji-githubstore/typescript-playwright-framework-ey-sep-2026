import { type Page, expect } from "@playwright/test"
import { PlaywrightKeywords } from "../base/automation-wrapper.js";


const CALENDAR_HEADER_LOCATOR = "xpath=//span[text()='Calendar']"

export class CalendarPage extends PlaywrightKeywords {

    constructor(page: Page) {
        super(page);
    }

    public async validateCalendarHeader(expectedValue: string): Promise<void> {
        await super.assertText(CALENDAR_HEADER_LOCATOR, expectedValue);
    }
}