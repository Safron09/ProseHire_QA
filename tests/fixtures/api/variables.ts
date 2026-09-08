function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}. Check your .env file.`);
  }
  return value;
}

export const API_BASE_URL = requireEnv('API_BASE_URL');

// Not used by any API test yet - wired up here so the first authenticated
// endpoint test pulls from one place instead of touching process.env directly.
export const API_TOKEN = process.env.API_TOKEN;
