import { apiClient } from '../client';
import { API_CONFIG } from '@/config';
import type { User } from '@/types/auth.types';
import type { ApiResponse } from '@/types/common.types';
import type { UpdateUserDto } from '@/types/api.types';

/**
 * User API Service
 * All user-related API calls go here
 * This is an example service demonstrating CRUD operations
 */
export const userService = {
  /**
   * Get current authenticated user profile
   * @returns Current user data
   * @throws {AxiosError} If request fails or user is not authenticated
   */
  getCurrentUser: async (): Promise<User> => {
    const response = await apiClient.get<ApiResponse<User>>(API_CONFIG.ENDPOINTS.USER.ME);
    return response.data.data;
  },

  /**
   * Update current user profile
   * @param data - Partial user data to update
   * @returns Updated user data
   * @throws {AxiosError} If request fails or validation errors occur
   */
  updateUser: async (data: UpdateUserDto): Promise<User> => {
    const response = await apiClient.patch<ApiResponse<User>>(
      API_CONFIG.ENDPOINTS.USER.UPDATE,
      data
    );
    return response.data.data;
  },
};
