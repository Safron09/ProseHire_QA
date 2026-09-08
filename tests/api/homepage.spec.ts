import { test, expect } from '@playwright/test';
import { API_BASE_URL } from '../fixtures/api/variables';

test('homepage responds with 200', { tag: ['@api', '@smoke'] }, async ({ request }) => {
  const response = await request.get(API_BASE_URL);

  expect(response.status()).toBe(200);
});
