# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 2__login.spec.ts >> login functionality check >> verify invalid login john and john123
- Location: tests\2__login.spec.ts:27:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('//p[contains(text(),\'Invalid\')]')
Expected: "Invalid username or password"
Received: ""

Call log:
  - Expect "toHaveText" locator('//p[contains(text(),\'Invalid\')]') with timeout 30000ms
  - waiting for locator('//p[contains(text(),\'Invalid\')]')
  - Protocol error (Runtime.evaluate): Internal server error, session closed.

```

# Test source

```ts
  1  | import { type Page, expect } from "@playwright/test"
  2  | 
  3  | 
  4  | const USERNAME_LOCATOR = "xpath=//input[@id='authUser']"
  5  | const PASSWORD_LOCATOR = "xpath=//input[@id='clearPass']"
  6  | const LANGUAGE_LOCATOR = "xpath=//select[@name='languageChoice']"
  7  | const LOGIN_LOCATOR = "xpath=//button[@id='login-button']"
  8  | const ERROR_LOCATOR = "xpath=//p[contains(text(),'Invalid')]"
  9  | 
  10 | export class LoginPage {
  11 | 
  12 |     private _page: Page;
  13 | 
  14 |     constructor(page: Page) {
  15 |         this._page = page;
  16 |     }
  17 | 
  18 |     public async enterUsername(username: string): Promise<void> {
  19 |         await this._page.locator(USERNAME_LOCATOR).fill(username);
  20 |     }
  21 | 
  22 |     public async enterPassword(password: string): Promise<void> {
  23 |         await this._page.locator(PASSWORD_LOCATOR).fill(password);
  24 |     }
  25 | 
  26 |     public async selectLanguage(languageLabel: string): Promise<void> {
  27 |         await this._page.locator(LANGUAGE_LOCATOR).selectOption({ label: languageLabel });
  28 |     }
  29 | 
  30 |     public async clickLogin(): Promise<void> {
  31 |         await this._page.locator(LOGIN_LOCATOR).click();
  32 |     }
  33 | 
  34 |     public async validateInvalidLoginError(expectedError: string): Promise<void> {
> 35 |         await expect(this._page.locator(ERROR_LOCATOR)).toHaveText(expectedError);
     |                                                         ^ Error: expect(locator).toHaveText(expected) failed
  36 |     }
  37 | 
  38 | }
```