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

    protected async setCheckbox(locator: string, checked: boolean): Promise<void> {
        await this._page.locator(locator).setChecked(checked);
    }

    protected async doubleClickElement(locator: string): Promise<void> {
        await this._page.locator(locator).dblclick();
    }

    protected async rightClickElement(locator: string): Promise<void> {
        await this._page.locator(locator).click({ button: "right" });
    }

    protected async hoverElement(locator: string): Promise<void> {
        await this._page.locator(locator).hover();
    }

    protected async focusElement(locator: string): Promise<void> {
        await this._page.locator(locator).focus();
    }

    protected async clearElement(locator: string): Promise<void> {
        await this._page.locator(locator).clear();
    }

    protected async typeText(locator: string, text: string): Promise<void> {
        await this._page.locator(locator).pressSequentially(text);
    }

    protected async pressKey(locator: string, key: string): Promise<void> {
        await this._page.locator(locator).press(key);
    }

    protected async selectDropdownWithValue(locator: string, value: string): Promise<void> {
        await this._page.locator(locator).selectOption({ value });
    }

    protected async selectDropdownWithIndex(locator: string, index: number): Promise<void> {
        await this._page.locator(locator).selectOption({ index });
    }

    protected async uploadFile(locator: string, filePath: string | string[]): Promise<void> {
        await this._page.locator(locator).setInputFiles(filePath);
    }

    protected async dragAndDrop(sourceLocator: string, targetLocator: string): Promise<void> {
        await this._page.locator(sourceLocator).dragTo(this._page.locator(targetLocator));
    }

    protected async scrollIntoView(locator: string): Promise<void> {
        await this._page.locator(locator).scrollIntoViewIfNeeded();
    }

    protected async getText(locator: string): Promise<string> {
        return await this._page.locator(locator).innerText();
    }

    protected async getInputValue(locator: string): Promise<string> {
        return await this._page.locator(locator).inputValue();
    }

    protected async getAttribute(locator: string, attributeName: string): Promise<string | null> {
        return await this._page.locator(locator).getAttribute(attributeName);
    }

    protected async getElementCount(locator: string): Promise<number> {
        return await this._page.locator(locator).count();
    }

    protected async isElementVisible(locator: string): Promise<boolean> {
        return await this._page.locator(locator).isVisible();
    }

    protected async isElementEnabled(locator: string): Promise<boolean> {
        return await this._page.locator(locator).isEnabled();
    }

    protected async isElementChecked(locator: string): Promise<boolean> {
        return await this._page.locator(locator).isChecked();
    }

    protected async waitForElement(locator: string, state: "visible" | "hidden" | "attached" | "detached" = "visible"): Promise<void> {
        await this._page.locator(locator).waitFor({ state });
    }

    protected async assertVisible(locator: string): Promise<void> {
        await expect(this._page.locator(locator)).toBeVisible();
    }

    protected async assertHidden(locator: string): Promise<void> {
        await expect(this._page.locator(locator)).toBeHidden();
    }

    protected async assertEnabled(locator: string): Promise<void> {
        await expect(this._page.locator(locator)).toBeEnabled();
    }

    protected async assertDisabled(locator: string): Promise<void> {
        await expect(this._page.locator(locator)).toBeDisabled();
    }

    protected async assertChecked(locator: string): Promise<void> {
        await expect(this._page.locator(locator)).toBeChecked();
    }

    protected async assertContainsText(locator: string, expectedText: string): Promise<void> {
        await expect(this._page.locator(locator)).toContainText(expectedText);
    }

    protected async assertValue(locator: string, expectedValue: string): Promise<void> {
        await expect(this._page.locator(locator)).toHaveValue(expectedValue);
    }

    protected async assertCount(locator: string, expectedCount: number): Promise<void> {
        await expect(this._page.locator(locator)).toHaveCount(expectedCount);
    }

    protected async navigateTo(url: string): Promise<void> {
        await this._page.goto(url);
    }

    protected async reloadPage(): Promise<void> {
        await this._page.reload();
    }

    protected async goBack(): Promise<void> {
        await this._page.goBack();
    }

    protected async goForward(): Promise<void> {
        await this._page.goForward();
    }

    protected async getPageTitle(): Promise<string> {
        return await this._page.title();
    }

    protected async getPageUrl(): Promise<string> {
        return this._page.url();
    }

    protected async waitForNavigation(url: string | RegExp): Promise<void> {
        await this._page.waitForURL(url);
    }

    protected async takeScreenshot(path: string): Promise<void> {
        await this._page.screenshot({ path });
    }

    protected async acceptDialog(): Promise<void> {
        this._page.once("dialog", dialog => dialog.accept());
    }

    protected async dismissDialog(): Promise<void> {
        this._page.once("dialog", dialog => dialog.dismiss());
    }
}