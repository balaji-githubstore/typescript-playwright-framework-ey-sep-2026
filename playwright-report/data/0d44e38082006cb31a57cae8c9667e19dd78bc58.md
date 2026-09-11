# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 3_login-json.spec.ts >> login functionality check >> verify invalid login1 saul and saul123
- Location: tests\3_login-json.spec.ts:26:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('//p[contains(text(),\'Invalid\')]')
Error: expected value must be a string or regular expression
Expected has value: undefined

```

# Page snapshot

```yaml
- generic [ref=f3e3]:
  - paragraph [ref=f3e6]: The most popular open-source Electronic Health Record and Medical Practice Management solution.
  - paragraph [ref=f3e8]: Invalid username or password
  - generic [ref=f3e9]:
    - generic [ref=f3e10]:
      - generic [ref=f3e11]: Username
      - textbox "Username" [ref=f3e13]
    - generic [ref=f3e14]:
      - generic [ref=f3e15]: Password
      - generic [ref=f3e16]:
        - textbox "Password" [ref=f3e17]
        - generic [ref=f3e18]: 
    - generic [ref=f3e21]:
      - generic [ref=f3e22]: Language
      - combobox [ref=f3e24]:
        - option "Default - English (Standard)" [selected]
        - option "Albanian"
        - option "Amharic"
        - option "Arabic"
        - option "Armenian"
        - option "Bahasa Indonesia"
        - option "Bengali"
        - option "Bosnian"
        - option "Chinese (Simplified)"
        - option "Chinese (Traditional)"
        - option "Croatian"
        - option "Czech"
        - option "Danish"
        - option "Dutch"
        - option "English (Indian)"
        - option "English (Standard)"
        - option "Estonian"
        - option "Finnish"
        - option "French (Canadian)"
        - option "French (Standard)"
        - option "Georgian"
        - option "German"
        - option "Greek"
        - option "Hebrew"
        - option "Hindi"
        - option "Hungarian"
        - option "Italian"
        - option "Japanese"
        - option "Korean"
        - option "Lithuanian"
        - option "Marathi"
        - option "Mongolian"
        - option "Norwegian"
        - option "Persian"
        - option "Polish"
        - option "Portuguese (Brazilian)"
        - option "Portuguese (European)"
        - option "Romanian"
        - option "Russian"
        - option "Serbian"
        - option "Sinhala"
        - option "Slovak"
        - option "Somali"
        - option "Spanish (Latin American)"
        - option "Spanish (Spain)"
        - option "Swedish"
        - option "Tamil"
        - option "Thai"
        - option "Turkish"
        - option "Ukrainian"
        - option "Urdu"
        - option "Vietnamese"
    - button "Login" [ref=f3e26] [cursor=pointer]
  - paragraph [ref=f3e27]:
    - link "Acknowledgments, Licensing and Certification" [ref=f3e28] [cursor=pointer]:
      - /url: ../../acknowledge_license_cert.html
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test"
  2  | 
  3  | import { JsonUtils } from "../utils/json-utils.js"
  4  | 
  5  | test.describe("login functionality check", async () => {
  6  | 
  7  |     //try using data driven from json key - validLoginData
  8  |     const jsonValidData = JsonUtils.getJsonValue("validLoginData")
  9  |     for (const { username, password, language, expectedValue } of jsonValidData) {
  10 | 
  11 |         test(`verify valid login ${username} and ${password}`, async ({ page }) => {
  12 |             await page.goto("");
  13 |             await page.locator("xpath=//input[@id='authUser']").fill(username);
  14 |             await page.locator("xpath=//input[@id='clearPass']").fill(password);
  15 |             await page.locator("xpath=//select[@name='languageChoice']").selectOption({ label: language });
  16 |             await page.locator("xpath=//button[@id='login-button']").click();
  17 |             // Assert the Calendar text 
  18 |             await expect(page.locator("xpath=//span[text()='Calendar']")).toHaveText(expectedValue);
  19 |         })
  20 |     }
  21 | 
  22 |     //data driven using json - key - invalidLoginData
  23 |     const jsonInvalidData = JsonUtils.getJsonValue("invalidLoginData")
  24 |     for (const { username, password, language, expectedValue } of jsonInvalidData) {
  25 | 
  26 |         test(`verify invalid login1 ${username} and ${password}`, async ({ page }) => {
  27 |             await page.goto("");
  28 |             await page.locator("xpath=//input[@id='authUser']").fill(username);
  29 |             await page.locator("xpath=//input[@id='clearPass']").fill(password);
  30 |             await page.locator("xpath=//select[@name='languageChoice']").selectOption({ label: language });
  31 |             await page.locator("xpath=//button[@id='login-button']").click();
  32 |             // Assert the text - Invalid username or password
> 33 |             await expect(page.locator("xpath=//p[contains(text(),'Invalid')]")).toHaveText(expectedValue);
     |                                                                                 ^ Error: expect(locator).toHaveText(expected) failed
  34 |         })
  35 |     }
  36 | 
  37 | 
  38 | })
```