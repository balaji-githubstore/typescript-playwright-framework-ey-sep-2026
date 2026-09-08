import { test, expect } from "@playwright/test"


test.describe("login ui component check", async () => {

    test("verify title", async ({ page }) => {
        await page.goto("");
        await expect(page).toHaveTitle("OpenEMR Login");
    })

    test("verify header", async ({ page }) => {
        await page.goto("");
        await expect(page.locator("xpath=//p[contains(text(),'most popular')]"))
            .toHaveText("The most popular open-source Electronic Health Record and Medical Practice Management solution.");
    })

    test("verify placeholder for username and password", async ({ page }) => {
        await page.goto("");
        await expect(page.locator("xpath=//input[@id='authUser']")).toHaveAttribute("placeholder", "Username")
        await expect(page.locator("xpath=//input[@id='clearPass']")).toHaveAttribute("placeholder", "Password")
    })

})