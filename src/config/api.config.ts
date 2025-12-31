import { env } from './env';

/**
 * API Configuration
 * Add new API endpoints here for easy discovery and maintenance
 */
export const API_CONFIG = {
  /**
   * Base URL for REST API
   */
  BASE_URL: env.VITE_API_BASE_URL,

  /**
   * GraphQL endpoint
   */
  GRAPHQL_ENDPOINT: env.VITE_GRAPHQL_ENDPOINT,

  /**
   * Request timeout in milliseconds
   * Increase this for slow networks or heavy operations
   */
  TIMEOUT: 10000,

  /**
   * Number of retry attempts for failed requests
   * Set to 0 to disable retries
   */
  RETRY_ATTEMPTS: 3,

  /**
   * API endpoints
   * Define REST API endpoints here
   */
  ENDPOINTS: {
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
      LOGOUT: '/auth/logout',
      REFRESH: '/auth/refresh',
    },
    USER: {
      ME: '/users/me',
      UPDATE: '/users/me',
    },
  },
} as const;
