import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { API_CONFIG, APP_CONFIG } from '@/config';

/**
 * Storage utilities for token management
 * These are minimal inline helpers. For production, use utils/storage.utils.ts
 */
const getAccessToken = () => localStorage.getItem(APP_CONFIG.STORAGE_KEYS.ACCESS_TOKEN);

/**
 * HTTP link for GraphQL endpoint
 * This connects to the GraphQL server
 */
const httpLink = createHttpLink({
  uri: API_CONFIG.GRAPHQL_ENDPOINT,
});

/**
 * Auth link - attaches JWT token to GraphQL requests
 * Modify this to change auth header format
 */
const authLink = setContext((_, { headers }) => {
  const token = getAccessToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

/**
 * Error link - handles GraphQL errors globally
 * Add custom error handling logic here
 */
const errorLink = onError((error) => {
  // Type assertion for error response
  const { graphQLErrors, networkError } = error as any;

  if (graphQLErrors) {
    graphQLErrors.forEach((err: any) => {
      console.error(`[GraphQL error]: Message: ${err.message}, Path: ${err.path}`);

      // Handle authentication errors
      if (err.extensions?.code === 'UNAUTHENTICATED') {
        // Clear tokens and redirect to login
        localStorage.removeItem(APP_CONFIG.STORAGE_KEYS.ACCESS_TOKEN);
        localStorage.removeItem(APP_CONFIG.STORAGE_KEYS.REFRESH_TOKEN);
        window.location.href = '/login';
      }
    });
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

/**
 * Apollo Client instance
 * Use this for all GraphQL operations
 * Import from this file: import { apolloClient } from '@/lib/apollo';
 */
export const apolloClient = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});
