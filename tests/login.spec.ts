import { test, expect } from "@playwright/test"
import { validLoginData } from "../utils/data-source.js"

test.describe("login functionality check", async () => {

    for (const { username, password, language, expectedValue } of validLoginData) {

        test(`verify valid login ${username} and ${password}`, async ({ page }) => {
            await page.goto("");
            await page.locator("xpath=//input[@id='authUser']").fill(username);
            await page.locator("xpath=//input[@id='clearPass']").fill(password);
            await page.locator("xpath=//select[@name='languageChoice']").selectOption({ label: language });
            await page.locator("xpath=//button[@id='login-button']").click();
            // Assert the Calendar text 
            await expect(page.locator("xpath=//span[text()='Calendar']")).toHaveText(expectedValue);
        })

    }


    /*
    john,john123,English (Indian),Invalid username or password
    saul,saul123,English (Indian),Invalid username or password
    */

    test("verify invalid login", async ({ page }) => {
        await page.goto("");
        await page.locator("xpath=//input[@id='authUser']").fill("john");
        await page.locator("xpath=//input[@id='clearPass']").fill("john123");
        await page.locator("xpath=//select[@name='languageChoice']").selectOption({ label: "English (Indian)" });
        await page.locator("xpath=//button[@id='login-button']").click();
        // Assert the text - Invalid username or password
        await expect(page.locator("xpath=//p[contains(text(),'Invalid')]")).toHaveText("Invalid username or password");
    })


})