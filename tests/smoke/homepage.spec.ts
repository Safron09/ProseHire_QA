import { test, expect } from '@playwright/test';

test('homepage loads', { tag: '@smoke' }, async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/ProseHire/i);
});