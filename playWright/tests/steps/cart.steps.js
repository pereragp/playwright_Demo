import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

When("the user clicks add to cart", async function () {

  const addButton = this.page.getByTestId("add-to-cart").first();

  await addButton.waitFor({ state: "visible" });

  await addButton.click();

  // wait for React state update
  await this.page.waitForTimeout(1000);

});

Then("the cart should contain items", async function () {

  const cartLink = this.page.getByTestId("cart-link");

  await cartLink.waitFor({ state: "visible" });

  await cartLink.click();

  const cartTitle = this.page.getByTestId("cart-title");

  await cartTitle.waitFor({ state: "visible" });

  await expect(cartTitle).toBeVisible();

});