import { apiClient } from '../client';
import { API_CONFIG } from '@/config';
import type {
  LoginCredentials,
  RegisterCredentials,
  LoginResponse,
} from '@/types/auth.types';
import type { ApiResponse } from '@/types/common.types';

/**
 * Authentication API Service
 * All authentication-related API calls go here
 * This is an example service demonstrating the pattern for REST API calls
 */
export const authService = {
  /**
   * Login user with email and password
   * @param credentials - User login credentials
   * @returns Login response with user data and tokens
   * @throws {AxiosError} If request fails or credentials are invalid
   */
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response = await apiClient.post<ApiResponse<LoginResponse>>(
      API_CONFIG.ENDPOINTS.AUTH.LOGIN,
      credentials
    );
    return response.data.data;
  },

  /**
   * Register new user
   * @param credentials - User registration data
   * @returns Registered user data and tokens
   * @throws {AxiosError} If request fails or email already exists
   */
  register: async (credentials: RegisterCredentials): Promise<LoginResponse> => {
    const response = await apiClient.post<ApiResponse<LoginResponse>>(
      API_CONFIG.ENDPOINTS.AUTH.REGISTER,
      credentials
    );
    return response.data.data;
  },

  /**
   * Logout current user
   * @returns Success confirmation
   * @throws {AxiosError} If request fails
   */
  logout: async (): Promise<void> => {
    await apiClient.post(API_CONFIG.ENDPOINTS.AUTH.LOGOUT);
  },

  /**
   * Refresh access token
   * @param refreshToken - Refresh token
   * @returns New access token
   * @throws {AxiosError} If refresh token is invalid
   */
  refreshToken: async (refreshToken: string): Promise<{ accessToken: string }> => {
    const response = await apiClient.post<ApiResponse<{ accessToken: string }>>(
      API_CONFIG.ENDPOINTS.AUTH.REFRESH,
      { refreshToken }
    );
    return response.data.data;
  },
};
