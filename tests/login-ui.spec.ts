import { test, expect } from "@playwright/test"


test.describe("login ui component check", () => {

    test("verify title", async ({ page }) => {
        await page.goto("https://demo.openemr.io/b/openemr/");
        await expect(page).toHaveTitle("OpenEMR Login");
    })

})