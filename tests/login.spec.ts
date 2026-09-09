import { test, expect } from "@playwright/test"


test.describe("login functionality check", async () => {

    test("verify valid login", async ({ page }) => {
        await page.goto("");
        await page.locator("xpath=//input[@id='authUser']").fill("admin");
        await page.locator("xpath=//input[@id='clearPass']").fill("pass");
        await page.locator("xpath=//select[@name='languageChoice']").selectOption({ label: "English (Indian)" });
        await page.locator("xpath=//button[@id='login-button']").click();
        // Assert the Calendar text 
        await expect(page.locator("xpath=//span[text()='Calendar']")).toHaveText("Calendar");
    })

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