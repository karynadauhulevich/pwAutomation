import { test } from "@playwright/test";


it.describe("FORM Layouts TYPE", () => {
    it("Fill all fields", async ({ page }) => {
      //   const browser: Browser = await chromium.launch({ headless: false });
      // const context = await browser.newContext();
      // const page: Page = await context.newPage();
  
     await page.goto(
        "https://demoqa.com/automation-practice-form",
      );
      await page.locator("#firstname").fill("Karyna");
      await page.locator("[class="mr-sm-2 form-control"]")
      .presSequentilay('vfuvj@gmail.com').{ delay: 100 }
      await page.locator("#userNumber").fill("2136930997")
      await page.locator([class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"]).fill('LLC Pass')
      await page.getByPlaceholder('Current Address').fill('Los Angeles')

    })
})
