import { z } from 'zod';

/**
 * Environment variable schema
 * Add new environment variables here with validation
 */
const envSchema = z.object({
  VITE_API_BASE_URL: z.string().url('Must be a valid URL'),
  VITE_GRAPHQL_ENDPOINT: z.string().url('Must be a valid URL'),
  VITE_APP_NAME: z.string().default('tn-fe-template'),
  VITE_ENABLE_MOCK_API: z.enum(['true', 'false']).default('false'),
});

/**
 * Validated environment variables
 * Import and use this throughout the app instead of import.meta.env
 * This ensures type safety and runtime validation of environment variables
 */
export const env = envSchema.parse({
  VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  VITE_GRAPHQL_ENDPOINT: import.meta.env.VITE_GRAPHQL_ENDPOINT,
  VITE_APP_NAME: import.meta.env.VITE_APP_NAME,
  VITE_ENABLE_MOCK_API: import.meta.env.VITE_ENABLE_MOCK_API,
});

export type Env = z.infer<typeof envSchema>;
