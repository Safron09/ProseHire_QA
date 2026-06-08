import { test, expect } from '@playwright/test';
import { HomePage } from '../fixtures/ui/HomePage';
import { RegistrationPage } from '../fixtures/ui/RegistrationPage';

test('get started registration @ui @smoke @regression', async ({ page }) => {
  const homePage = new HomePage(page);
  const registrationPage = new RegistrationPage(page);

  await homePage.goto();
  await homePage.clickGetStarted();

  await expect(registrationPage.createAccountButton).toBeVisible();
});
