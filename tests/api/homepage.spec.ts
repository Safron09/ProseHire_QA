import { test, expect } from '@playwright/test';
import { API_BASE_URL } from '../fixtures/api/variables';

test.describe('Homepage API 200', () => {
  test('homepage responds with 200', { tag: ['@api', '@smoke'] }, async ({ request }) => {
    const response = await request.get(API_BASE_URL);

    expect(response.status()).toBe(200);
  });
});

test.describe('Homepage API 404', () => {
  test('homepage responds with 404 for non-existent endpoint', { tag: ['@api', '@negative', '@smoke'] }, async ({ request }) => {
    const response = await request.get(`${API_BASE_URL}/non-existent-endpoint`);

    expect(response.status()).toBe(404);
  });
});