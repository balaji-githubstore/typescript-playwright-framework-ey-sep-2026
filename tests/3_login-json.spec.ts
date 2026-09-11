import { test, expect } from "@playwright/test"

import { JsonUtils } from "../utils/json-utils.js"
import { LoginPage } from "../pages/login-page.js"
import { CalendarPage } from "../pages/calendar-page.js"

test.describe("login functionality check", async () => {

    //try using data driven from json key - validLoginData
    const jsonValidData = JsonUtils.getJsonValue("validLoginData")
    for (const { username, password, language, expectedValue } of jsonValidData) {

        test(`verify valid login ${username} and ${password}`, async ({ page }) => {
            await page.goto("");
            const loginPage = new LoginPage(page);
            loginPage.enterUsername(username);
            loginPage.enterPassword(password);
            loginPage.selectLanguage(language);
            loginPage.clickLogin();

            const calendarPage = new CalendarPage(page);
            calendarPage.validateCalendarHeader(expectedValue);
        })
    }

    //data driven using json - key - invalidLoginData
    const jsonInvalidData = JsonUtils.getJsonValue("invalidLoginData")
    for (const { username, password, language, expectedValue } of jsonInvalidData) {

        test(`verify invalid login1 ${username} and ${password}`, async ({ page }) => {
            await page.goto("");
            const loginPage = new LoginPage(page);
            loginPage.enterUsername(username);
            loginPage.enterPassword(password);
            loginPage.selectLanguage(language);
            loginPage.clickLogin();
            loginPage.validateInvalidLoginError(expectedValue);
        })
    }


})