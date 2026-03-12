import { test, expect } from '@playwright/test';

test('login works correctly', async ({ page }) => {

  await page.goto('/login');

  await page.fill('[data-testid="login-email"]', 'demo@example.com');
  await page.fill('[data-testid="login-password"]', 'password123');

  await page.click('[data-testid="login-button"]');

  // After successful login, app redirects to /products
  await expect(page).toHaveURL('/products');

});