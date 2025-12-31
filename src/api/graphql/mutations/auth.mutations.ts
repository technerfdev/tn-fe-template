import { gql } from '@apollo/client';

/**
 * GraphQL Authentication Mutations
 * Add auth-related mutations here
 * Example usage:
 * const [loginMutation, { data, loading, error }] = useMutation(LOGIN_MUTATION);
 */

/**
 * Login mutation
 */
export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        email
        name
        role
        avatar
      }
      accessToken
      refreshToken
    }
  }
`;

/**
 * Register mutation
 */
export const REGISTER_MUTATION = gql`
  mutation Register($email: String!, $name: String!, $password: String!) {
    register(email: $email, name: $name, password: $password) {
      user {
        id
        email
        name
        role
        avatar
      }
      accessToken
      refreshToken
    }
  }
`;

/**
 * Logout mutation
 */
export const LOGOUT_MUTATION = gql`
  mutation Logout {
    logout {
      success
      message
    }
  }
`;

/**
 * Refresh token mutation
 */
export const REFRESH_TOKEN_MUTATION = gql`
  mutation RefreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      accessToken
    }
  }
`;
