import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    return this.page.goto('/', { waitUntil: 'load' });
  }
}
