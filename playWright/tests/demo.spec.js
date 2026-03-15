import { test, expect } from './fixtures';

test('products page heading is visible', async ({ productsPage }) => {
  await expect(productsPage.locator('h1')).toBeVisible();
});

test('add to cart button is visible', async ({ productsPage }) => {
  await expect(productsPage.locator('button')).toBeVisible();
});

test('logged in user can see products page', async ({ loggedInPage }) => {
  await loggedInPage.goto('http://localhost:5173/products');
  await expect(loggedInPage.locator('h1')).toBeVisible();
});

test('login fails when fields are empty', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/login/);
});

test('login fails with invalid credentials', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await page.fill('#email', 'wrong@email.com');
  await page.fill('#password', 'wrongpassword');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/login/);
});
