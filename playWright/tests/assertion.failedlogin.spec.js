import { test, expect } from '@playwright/test';

test.describe('Failed Login Tests', () => {

  test('should show error for invalid email', async ({ page }) => {
    await page.goto('/login');

    await page.fill('[data-testid="login-email"]', 'invalid@example.com');
    await page.fill('[data-testid="login-password"]', 'password123');

    await page.click('[data-testid="login-button"]');

    // Wait for the loading to complete and error to appear
    await page.waitForSelector('[data-testid="login-error"]', { state: 'visible' });
    
    // Check that we stay on login page
    await expect(page).toHaveURL('/login');
    
    // Look for error message with correct selector
    await expect(page.locator('[data-testid="login-error"]')).toBeVisible();
    await expect(page.locator('[data-testid="login-error"]')).toContainText('Invalid email or password');
  });

  test('should show error for invalid password', async ({ page }) => {
    await page.goto('/login');

    await page.fill('[data-testid="login-email"]', 'demo@example.com');
    await page.fill('[data-testid="login-password"]', 'wrongpassword');

    await page.click('[data-testid="login-button"]');

    // Wait for the loading to complete and error to appear
    await page.waitForSelector('[data-testid="login-error"]', { state: 'visible' });
    
    // Check that we stay on login page
    await expect(page).toHaveURL('/login');
    
    // Look for error message with correct selector
    await expect(page.locator('[data-testid="login-error"]')).toBeVisible();
    await expect(page.locator('[data-testid="login-error"]')).toContainText('Invalid email or password');
  });

  test('should show error for completely invalid credentials', async ({ page }) => {
    await page.goto('/login');

    await page.fill('[data-testid="login-email"]', 'wrong@wrong.com');
    await page.fill('[data-testid="login-password"]', 'wrongpassword');

    await page.click('[data-testid="login-button"]');

    // Wait for the loading to complete and error to appear
    await page.waitForSelector('[data-testid="login-error"]', { state: 'visible' });
    
    // Check that we stay on login page
    await expect(page).toHaveURL('/login');
    
    // Look for error message
    await expect(page.locator('[data-testid="login-error"]')).toBeVisible();
    await expect(page.locator('[data-testid="login-error"]')).toContainText('Invalid email or password');
  });

  test('should prevent submission with empty email (browser validation)', async ({ page }) => {
    await page.goto('/login');

    // Leave email empty
    await page.fill('[data-testid="login-email"]', '');
    await page.fill('[data-testid="login-password"]', 'password123');

    await page.click('[data-testid="login-button"]');

    // Should stay on login page due to browser validation
    await expect(page).toHaveURL('/login');
    
    // Should not show custom error message since browser validation prevents submission
    await expect(page.locator('[data-testid="login-error"]')).not.toBeVisible();
  });

  test('should prevent submission with empty password (browser validation)', async ({ page }) => {
    await page.goto('/login');

    await page.fill('[data-testid="login-email"]', 'demo@example.com');
    // Leave password empty
    await page.fill('[data-testid="login-password"]', '');

    await page.click('[data-testid="login-button"]');

    // Should stay on login page due to browser validation
    await expect(page).toHaveURL('/login');
    
    // Should not show custom error message since browser validation prevents submission
    await expect(page.locator('[data-testid="login-error"]')).not.toBeVisible();
  });

});

