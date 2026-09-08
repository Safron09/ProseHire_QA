function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}. Check your .env file.`);
  }
  return value;
}

export const BASE_URL = requireEnv('BASE_URL');

// Not used by any UI test yet - wired up here so login/signup flows (Phase 7)
// pull from one place instead of touching process.env directly.
export const TEST_USER_EMAIL = process.env.TEST_USER_EMAIL;
export const TEST_USER_PASSWORD = process.env.TEST_USER_PASSWORD;
