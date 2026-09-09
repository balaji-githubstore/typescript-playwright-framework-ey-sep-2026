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

    test("verify acknowledgments license link",async({page})=>{
        await page.goto("");

        // Expect element text should be.
        await expect(page.locator("xpath=//a[contains(text(),'Licensing')]"))
            .toHaveText("Acknowledgments, Licensing and Certification");

        // Expect a href attribute "to contain" a substring.
        await expect(page.locator("xpath=//a[contains(text(),'Licensing')]"))
        .toHaveAttribute("href",/acknowledge_license_cert.html/);
    })

})