import { gql } from '@apollo/client';

/**
 * GraphQL User Queries
 * Add user-related queries here
 * Example usage:
 * const { data, loading, error } = useQuery(GET_CURRENT_USER);
 */

/**
 * Get current authenticated user
 */
export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    me {
      id
      email
      name
      role
      avatar
      createdAt
      updatedAt
    }
  }
`;

/**
 * Get user by ID
 */
export const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    user(id: $id) {
      id
      email
      name
      role
      avatar
      createdAt
      updatedAt
    }
  }
`;

/**
 * Get list of users (with pagination)
 */
export const GET_USERS = gql`
  query GetUsers($page: Int, $pageSize: Int) {
    users(page: $page, pageSize: $pageSize) {
      data {
        id
        email
        name
        role
        avatar
        createdAt
      }
      meta {
        page
        pageSize
        total
        totalPages
      }
    }
  }
`;
