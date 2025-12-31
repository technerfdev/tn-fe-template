/**
 * API Layer Exports
 * Unified API exports for easy importing
 */

// REST API
export * from './rest/services';
export { apiClient } from './rest/client';

// GraphQL API
export * from './graphql/queries';
export * from './graphql/mutations';
export { apolloClient } from './graphql/client';
