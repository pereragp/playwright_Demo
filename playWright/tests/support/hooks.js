import { Before, After } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";

let browser;
let page;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  this.page = await context.newPage();
});

After(async function () {
  await browser.close();
});