import { Locator, Page } from '@playwright/test';

export class HomePage {
  // --- Locators ---
  readonly getStartedNavLink: Locator;

  constructor(private page: Page) {
    this.getStartedNavLink = page.getByRole('link', { name: 'Get Started Free' }).first();
  }

  // --- Actions ---
  async goto() {
    await this.page.goto('/');
  }

  async clickGetStarted() {
    await this.getStartedNavLink.click();
  }
}
