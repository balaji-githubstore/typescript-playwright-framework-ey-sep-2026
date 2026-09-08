# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 1__login-ui.spec.ts >> login ui component check >> verify title
- Location: tests\1__login-ui.spec.ts:6:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://demo.openemr.io/b/openemr/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test"
  2  | 
  3  | 
  4  | test.describe("login ui component check", async () => {
  5  | 
  6  |     test("verify title", async ({ page }) => {
> 7  |         await page.goto("https://demo.openemr.io/b/openemr/");
     |                    ^ Error: page.goto: Target page, context or browser has been closed
  8  |         await expect(page).toHaveTitle("OpenEMR Login");
  9  |     })
  10 | 
  11 |     test("verify header", async ({ page }) => {
  12 | 
  13 |         //assert the header - The most popular open-source Electronic Health Record and Medical Practice Management solution.
  14 |     })
  15 | 
  16 | 
  17 | 
  18 | })
```