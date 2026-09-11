import { type Page, expect } from "@playwright/test"


const CALENDAR_HEADER_LOCATOR = "xpath=//span[text()='Calendar']"

export class CalendarPage {
    private _page: Page;

    constructor(page: Page) {
        this._page = page;
    }

    public async validateCalendarHeader(expectedValue: string): Promise<void> {
        await expect(this._page.locator(CALENDAR_HEADER_LOCATOR)).toHaveText(expectedValue);
    }
}