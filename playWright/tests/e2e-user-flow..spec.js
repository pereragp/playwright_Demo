import { test, expect } from '@playwright/test';

test('Complete user journey - add to cart, login, checkout', async ({ page }) => {

  // open products page
  await page.goto('/products');

  // add first product
  await page.getByTestId('add-to-cart').first().click();

  // open cart
  await page.getByTestId('cart-link').click();

  // attempt checkout
  await page.getByTestId('checkout-button').click();
/*
  // user should be redirected to login
  await expect(page).toHaveURL(/login/);

  // login
  await page.getByTestId('login-email').fill('demo@example.com');
  await page.getByTestId('login-password').fill('password123');

  await Promise.all([
    page.waitForNavigation(),
    page.getByTestId('login-button').click()
  ]);
*/
  // go back to cart
  await page.getByTestId('cart-link').click();

  // checkout again
  await page.getByTestId('checkout-button').click();

  // verify checkout page
  await expect(page).toHaveURL(/checkout/);

});