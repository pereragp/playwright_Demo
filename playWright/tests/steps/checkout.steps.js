import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, expect } from "@playwright/test";

setDefaultTimeout(60 * 1000);

let browser;
let context;

Given("the user has added a product to the cart", async function () {

  browser = await chromium.launch({ headless: false });

  context = await browser.newContext();

  this.page = await context.newPage();

  await this.page.goto("http://localhost:5173/products");

  const addButton = this.page.getByTestId("add-to-cart").first();

  await addButton.waitFor({ state: "visible" });

  await addButton.click();

});

When("the user navigates to the cart and attempts to checkout", async function () {

  const cartLink = this.page.getByTestId("cart-link");

  await cartLink.waitFor({ state: "visible" });

  await cartLink.click();

  const checkoutButton = this.page.getByTestId("checkout-button");

  await checkoutButton.waitFor({ state: "visible" });

  await checkoutButton.click();

});

Then("the user should be redirected to the login page", async function () {

  await expect(this.page).toHaveURL(/login/);

});

When("the user logs in with valid credentials", async function () {

  await this.page.getByTestId("login-email").fill("demo@example.com");

  await this.page.getByTestId("login-password").fill("password123");

  await Promise.all([
    this.page.waitForNavigation(),
    this.page.getByTestId("login-button").click()
  ]);

});

When("the user returns to the cart and clicks checkout", async function () {

  const cartLink = this.page.getByTestId("cart-link");

  await cartLink.click();

  const checkoutButton = this.page.getByTestId("checkout-button");

  await checkoutButton.waitFor({ state: "visible" });

  await checkoutButton.click();

});

Then("the user should reach the checkout page successfully", async function () {

  await expect(this.page).toHaveURL(/checkout/);

  await browser.close();

});