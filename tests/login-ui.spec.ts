import { test,expect } from "@playwright/test"
import assert from 'node:assert';

test.describe("login ui component check",()=>{

    test("verify title", async ({ page }) =>{
        await page.goto("https://demo.openemr.io/b/openemr/");
        let actualTitle:string=await page.title();
        assert.deepStrictEqual(actualTitle,"OpenEMR");
    })

})