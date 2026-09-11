import { test, expect } from "@playwright/test"
import { validLoginData, invalidLoginData } from "../utils/data-source.js"
import { LoginPage } from "../pages/login-page.js"
import { CalendarPage } from "../pages/calendar-page.js"
import { log } from "node:console"

test.describe("login functionality check", async () => {

    for (const { username, password, language, expectedValue } of validLoginData) {

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


    for (const { username, password, language, expectedValue } of invalidLoginData) {

        test(`verify invalid login ${username} and ${password}`, async ({ page }) => {
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