import { test, expect } from "@playwright/test"

import { JsonUtils } from "../utils/json-utils.js"

test.describe("login functionality check", async () => {


    const jsonInvalidData=JsonUtils.getJsonValue("invalidLoginData")


    for (const { username, password, language, expectedValue } of jsonInvalidData) {

        test(`verify invalid login1 ${username} and ${password}`, async ({ page }) => {
            await page.goto("");
            await page.locator("xpath=//input[@id='authUser']").fill(username);
            await page.locator("xpath=//input[@id='clearPass']").fill(password);
            await page.locator("xpath=//select[@name='languageChoice']").selectOption({ label: language });
            await page.locator("xpath=//button[@id='login-button']").click();
            // Assert the text - Invalid username or password
            await expect(page.locator("xpath=//p[contains(text(),'Invalid')]")).toHaveText(expectedValue);
        })

    }


})