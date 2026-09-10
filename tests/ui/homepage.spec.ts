import { test, expect } from '@playwright/test';
import { HomePage } from '../fixtures/ui/HomePage';
import { BASE_URL } from '../fixtures/ui/variables';

test.describe('Homepage UI', () => {
  test('homepage loads', { tag: ['@ui', '@smoke'] }, async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    await expect(page).toHaveURL(BASE_URL);
  });
});

