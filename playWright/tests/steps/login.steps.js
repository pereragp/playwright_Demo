import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, expect } from "@playwright/test";

let browser;
let page;

Given("the user is on the login page", async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();

  await page.goto("http://localhost:5173/login", { waitUntil: "networkidle" });
});

When("the user enters valid credentials", async function () {
  await page.getByTestId("login-email").fill("demo@example.com");
  await page.getByTestId("login-password").fill("password123");
});

When("clicks the login button", async function () {
  await page.getByTestId("login-button").click();
});

Then("the user should be redirected to the products page", async function () {
  await expect(page).toHaveURL(/products/);
  await browser.close();
});