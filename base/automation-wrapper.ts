import { type Page, expect } from "@playwright/test"

export class PlaywrightKeywords {
    protected _page: Page;

    constructor(page: Page) {
        this._page = page;
    }

    protected async sendTextToElement(locator: string, text: string): Promise<void> {
        await this._page.locator(locator).fill(text);
    }

    protected async clickElement(locator: string): Promise<void> {
        await this._page.locator(locator).click();
    }

    protected async selectDropdownWithLabel(locator: string, labelDetail: string): Promise<void> {
        await this._page.locator(locator).selectOption({ label: labelDetail });
    }

    protected async assertText(locator: string, expectedText: string): Promise<void> {
        await expect(this._page.locator(locator)).toHaveText(expectedText);
    }
}