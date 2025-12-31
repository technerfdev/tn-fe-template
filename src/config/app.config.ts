import { env } from './env';

/**
 * Application Configuration
 * Add app-level settings and feature flags here
 */
export const APP_CONFIG = {
  /**
   * Application name
   */
  APP_NAME: env.VITE_APP_NAME,

  /**
   * Application version
   */
  VERSION: '1.0.0',

  /**
   * Feature flags
   * Toggle features here for easy enable/disable
   */
  FEATURES: {
    ENABLE_MOCK_API: env.VITE_ENABLE_MOCK_API === 'true',
    ENABLE_ANALYTICS: false,
    ENABLE_ERROR_REPORTING: false,
  },

  /**
   * Pagination settings
   */
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 10,
    PAGE_SIZE_OPTIONS: [10, 25, 50, 100],
  },

  /**
   * Storage keys
   * Use these constants for localStorage/sessionStorage keys
   */
  STORAGE_KEYS: {
    ACCESS_TOKEN: 'access_token',
    REFRESH_TOKEN: 'refresh_token',
    THEME: 'theme',
    USER: 'user',
  },

  /**
   * Date format settings
   */
  DATE_FORMAT: {
    DISPLAY: 'MMM dd, yyyy',
    API: 'yyyy-MM-dd',
  },
} as const;
