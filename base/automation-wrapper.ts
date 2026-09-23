import { type Page, expect } from "@playwright/test"

export class PlaywrightKeywords {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    protected async sendTextToElement(locator: string, text: string): Promise<void> {
        await this.page.locator(locator).fill(text);
    }

    protected async clickElement(locator: string): Promise<void> {
        await this.page.locator(locator).click();
    }

    protected async selectDropdownWithLabel(locator: string, labelDetail: string): Promise<void> {
        await this.page.locator(locator).selectOption({ label: labelDetail });
    }

    protected async assertText(locator: string, expectedText: string): Promise<void> {
        await expect(this.page.locator(locator)).toHaveText(expectedText);
    }

    protected async clickUntilLocatorPresent(expectedLocator: string, clickableLocator: string): Promise<void> {
        while (await this.page.locator(expectedLocator).count() == 0) {
            if (await this.page.locator(clickableLocator).count() == 1) {
                await this.page.locator(clickableLocator).click()
            }
        }
    }
}