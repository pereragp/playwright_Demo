import { Given, Then } from "@cucumber/cucumber";
import { chromium, expect } from "@playwright/test";

let browser;

Given("the user is on the products page", async function () {

  browser = await chromium.launch({ headless: false });

  const context = await browser.newContext();

  this.page = await context.newPage();

  await this.page.goto("http://localhost:5173/products");

});

Then("product cards should be visible", async function () {

  const cards = this.page.getByTestId("product-card");

  await cards.first().waitFor({ state: "visible" });

  await expect(cards.first()).toBeVisible();

  await browser.close();

});