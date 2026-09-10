import { test, expect } from "@playwright/test"
import { validLoginData } from "../utils/data-source.js"

test.describe("check adding valid user", async () => {

    test("verify add valid user", async ({ page }) => {
        await page.goto("");
        await page.locator("xpath=//input[@id='authUser']").fill("john");
        await page.locator("xpath=//input[@id='clearPass']").fill("john123");
        await page.locator("xpath=//select[@name='languageChoice']").selectOption({ label: "English (Indian)" });
        await page.locator("xpath=//button[@id='login-button']").click();
//        6. Navigate to Admin → Users.
// 7. Click Add User.
// 8. Enter the required user information:
// Username: Enter a unique username.
// Password: welcome123
// Your Password: pass
// First Name: Enter the user's first name.
// Last Name: Enter the user's last name.
// Select the required role, such as:
// Accounting
// Physician
// Click Save.
// Verify that the user is successfully created.
// Assert that the newly added username is displayed in the Users table.
// Expected Result

    })



})