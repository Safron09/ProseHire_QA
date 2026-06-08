import { Locator, Page } from '@playwright/test';

export class RegistrationPage {
  // --- Locators ---
  readonly createAccountButton: Locator;

  constructor(page: Page) {
    this.createAccountButton = page.getByRole('button', { name: 'Create account' });
  }
}
