/**
 * Environment variable type declarations
 * Add new environment variables to ImportMetaEnv interface
 */

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_GRAPHQL_ENDPOINT: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_ENABLE_MOCK_API: 'true' | 'false';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
