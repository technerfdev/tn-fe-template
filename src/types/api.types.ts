/**
 * API Types
 * Add API-specific types here
 */

/**
 * HTTP methods
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

/**
 * API request configuration
 */
export interface ApiRequestConfig {
  method: HttpMethod;
  url: string;
  data?: unknown;
  params?: Record<string, string | number | boolean>;
  headers?: Record<string, string>;
  timeout?: number;
}

/**
 * API error response
 */
export interface ApiErrorResponse {
  message: string;
  statusCode: number;
  error: string;
  details?: unknown;
}

/**
 * Query parameters
 */
export interface QueryParams {
  page?: number;
  pageSize?: number;
  sort?: string;
  order?: 'asc' | 'desc';
  search?: string;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Update user DTO (Data Transfer Object)
 * This is an example DTO type for API requests
 */
export interface UpdateUserDto {
  name?: string;
  avatar?: string;
}

/**
 * Loading states
 */
export type LoadingState = 'idle' | 'pending' | 'success' | 'error';

/**
 * Async data state
 */
export interface AsyncDataState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  status: LoadingState;
}
