# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: user-profile.spec.ts >> check adding valid user >> verify add valid user
- Location: tests\user-profile.spec.ts:6:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('//input[@id=\'authUser\']')

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test"
  2  | import { validLoginData } from "../utils/data-source.js"
  3  | 
  4  | test.describe("check adding valid user", async () => {
  5  | 
  6  |     test("verify add valid user", async ({ page }) => {
  7  |         await page.goto("");
> 8  |         await page.locator("xpath=//input[@id='authUser']").fill("john");
     |                                                             ^ Error: locator.fill: Target page, context or browser has been closed
  9  |         await page.locator("xpath=//input[@id='clearPass']").fill("john123");
  10 |         await page.locator("xpath=//select[@name='languageChoice']").selectOption({ label: "English (Indian)" });
  11 |         await page.locator("xpath=//button[@id='login-button']").click();
  12 | //        6. Navigate to Admin → Users.
  13 | // 7. Click Add User.
  14 | // 8. Enter the required user information:
  15 | // Username: Enter a unique username.
  16 | // Password: welcome123
  17 | // Your Password: pass
  18 | // First Name: Enter the user's first name.
  19 | // Last Name: Enter the user's last name.
  20 | // Select the required role, such as:
  21 | // Accounting
  22 | // Physician
  23 | // Click Save.
  24 | // Verify that the user is successfully created.
  25 | // Assert that the newly added username is displayed in the Users table.
  26 | // Expected Result
  27 | 
  28 |     })
  29 | 
  30 | 
  31 | 
  32 | })
```