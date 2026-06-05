import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 4 : undefined,
  timeout: 30_000,

  reporter: [['html', { open: 'on-failure' }]],

  use: {
    baseURL: process.env.BASE_URL ?? 'https://prosehire.com',
    trace:      'on-first-retry',
    screenshot: 'only-on-failure',
    video:      'retain-on-failure',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
  ],
});