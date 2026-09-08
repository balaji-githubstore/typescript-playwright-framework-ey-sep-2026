import { test, expect } from "@playwright/test"


test.describe("login ui component check", async () => {

    test("verify title", async ({ page }) => {
        await page.goto("https://demo.openemr.io/b/openemr/");
        await expect(page).toHaveTitle("OpenEMR Login");
    })

    test("verify header", async ({ page }) => {
        await page.goto("https://demo.openemr.io/b/openemr/");
        await expect(page.locator("xpath=//p[contains(text(),'most popular')]"))
        .toHaveText("The most popular open-source Electronic Health Record and Medical Practice Management solution.");
    })



})