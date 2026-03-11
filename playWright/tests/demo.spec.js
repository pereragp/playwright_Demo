import { test, expect } from './fixtures';

test('products page heading is visible', async ({ productsPage }) => {
  await expect(productsPage.locator('h1')).toBeVisible();
});

test('add to cart button is visible', async ({ productsPage }) => {
  await expect(productsPage.locator('button')).toBeVisible();
});
