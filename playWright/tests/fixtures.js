import { test as base } from '@playwright/test';

export const test = base.extend({
  //this is a fixture that will run before each test
  loggedInPage: async ({ page }, use) => {
    await page.goto('http://localhost:5173/login');

    await page.fill('#email', 'test@email.com');
    await page.fill('#password', '123456');

    await page.click('button[type="submit"]');

    await use(page);
  },
  productsPage: async ({ page }, use) => {
    // Setup step (fixture)
    await page.goto('http://localhost:5173/products');

    // Give the page to the test
    await use(page);
  },
});

export { expect } from '@playwright/test';
