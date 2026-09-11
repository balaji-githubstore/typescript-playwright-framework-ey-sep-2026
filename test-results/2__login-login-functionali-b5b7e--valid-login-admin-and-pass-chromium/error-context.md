# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 2__login.spec.ts >> login functionality check >> verify valid login admin and pass
- Location: tests\2__login.spec.ts:8:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('//div[text()=\'Calendar\']')
Expected: "Calendar"
Error: strict mode violation: locator('//div[text()=\'Calendar\']') resolved to 2 elements:
    1) <div class="menuLabel px-1" data-bind="text:label,click: menuActionClick,css: {menuDisabled: ! enabled()}">Calendar</div> aka getByText('Calendar').first()
    2) <div class="menuLabel px-1" data-bind="text:label,click: menuActionClick,css: {menuDisabled: ! enabled()}">Calendar</div> aka getByText('Calendar').nth(1)

Call log:
  - Expect "toHaveText" locator('//div[text()=\'Calendar\']') with timeout 30000ms
  - waiting for locator('//div[text()=\'Calendar\']')

```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - generic [ref=f1e2]:
    - navigation [ref=f1e3]:
      - link [ref=f1e4] [cursor=pointer]:
        - /url: https://www.open-emr.org/
        - img "Main Menu Logo" [ref=f1e5]
      - generic [ref=f1e7]:
        - generic [ref=f1e8]: Calendar
        - generic [ref=f1e10]: Finder
        - generic [ref=f1e12]: Flow
        - generic [ref=f1e14]: Recalls
        - generic [ref=f1e16]: Messages
        - generic [ref=f1e19]:
          - button "Patient" [ref=f1e20] [cursor=pointer]
          - text:  
        - button "Fees" [ref=f1e23] [cursor=pointer]
        - button "Modules" [ref=f1e26] [cursor=pointer]
        - button "Procedures" [ref=f1e29] [cursor=pointer]
        - generic [ref=f1e31]:
          - button "Admin" [ref=f1e32] [cursor=pointer]
          - text:       
        - generic [ref=f1e34]:
          - button "Reports" [ref=f1e35] [cursor=pointer]
          - text:         
        - generic [ref=f1e37]:
          - button "Miscellaneous" [ref=f1e38] [cursor=pointer]
          - text: 
        - button "Popups" [ref=f1e41] [cursor=pointer]
      - generic [ref=f1e43]:
        - textbox "Search by any demographics" [ref=f1e44]
        - button "" [ref=f1e46] [cursor=pointer]
      - generic [ref=f1e49]:
        - button "" [ref=f1e50] [cursor=pointer]:
          - generic [ref=f1e51]:
            - generic [ref=f1e52]: 
            - generic [aria-hidden] [ref=f1e53]: 
        - text:     
    - navigation [ref=f1e59]:
      - button "Portal" [expanded] [ref=f1e60] [cursor=pointer]
      - text:   
    - generic [ref=f1e62]:
      - generic [aria-hidden] [ref=f1e64]: 
      - generic [ref=f1e65] [cursor=pointer]:
        - text: Loading Calendar
        - generic [ref=f1e66]: 
        - generic [ref=f1e67]: 
        - generic [ref=f1e68]: 
      - generic [ref=f1e69] [cursor=pointer]:
        - text: Loading Message Inbox
        - generic [ref=f1e70]: 
        - generic [ref=f1e71]: 
        - generic [ref=f1e72]: 
    - generic [ref=f1e76]:
      - heading "Loading..." [level=5] [ref=f1e77]
      - iframe [ref=f1e78]
    - text: 
  - generic: 8.3.0
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test"
  2  | import { validLoginData, invalidLoginData } from "../utils/data-source.js"
  3  | 
  4  | test.describe("login functionality check", async () => {
  5  | 
  6  |     for (const { username, password, language, expectedValue } of validLoginData) {
  7  | 
  8  |         test(`verify valid login ${username} and ${password}`, async ({ page }) => {
  9  |             await page.goto("");
  10 |             await page.locator("xpath=//input[@id='authUser']").fill(username);
  11 |             await page.locator("xpath=//input[@id='clearPass']").fill(password);
  12 |             await page.locator("xpath=//select[@name='languageChoice']").selectOption({ label: language });
  13 |             await page.locator("xpath=//button[@id='login-button']").click();
  14 |             // Assert the Calendar text 
> 15 |             await expect(page.locator("xpath=//div[text()='Calendar']")).toHaveText(expectedValue);
     |                                                                          ^ Error: expect(locator).toHaveText(expected) failed
  16 |         })
  17 |     }
  18 | 
  19 | 
  20 |     for (const { username, password, language, expectedValue } of invalidLoginData) {
  21 | 
  22 |         test(`verify invalid login ${username} and ${password}`, async ({ page }) => {
  23 |             await page.goto("");
  24 |             await page.locator("xpath=//input[@id='authUser']").fill(username);
  25 |             await page.locator("xpath=//input[@id='clearPass']").fill(password);
  26 |             await page.locator("xpath=//select[@name='languageChoice']").selectOption({ label: language });
  27 |             await page.locator("xpath=//button[@id='login-button']").click();
  28 |             // Assert the text - Invalid username or password
  29 |             await expect(page.locator("xpath=//p[contains(text(),'Invalid')]")).toHaveText(expectedValue);
  30 |         })
  31 | 
  32 |     }
  33 | 
  34 | 
  35 | })
```