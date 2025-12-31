import axios, { AxiosError } from 'axios';
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { API_CONFIG, APP_CONFIG } from '@/config';

/**
 * Storage utilities for token management
 * These are minimal inline helpers. For production, use utils/storage.utils.ts
 */
const getAccessToken = () => localStorage.getItem(APP_CONFIG.STORAGE_KEYS.ACCESS_TOKEN);
const clearTokens = () => {
  localStorage.removeItem(APP_CONFIG.STORAGE_KEYS.ACCESS_TOKEN);
  localStorage.removeItem(APP_CONFIG.STORAGE_KEYS.REFRESH_TOKEN);
};

/**
 * Axios instance with pre-configured defaults
 * Use this instance for all REST API calls instead of plain axios
 */
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request interceptor - adds auth token to requests
 * Modify this to change auth header format or add custom headers
 */
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAccessToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

/**
 * Response interceptor - handles token refresh and errors
 * Add custom error handling logic here
 */
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // Handle 401 - Unauthorized (token expired)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // TODO: Implement token refresh logic
        // Example:
        // const refreshToken = localStorage.getItem(APP_CONFIG.STORAGE_KEYS.REFRESH_TOKEN);
        // const response = await axios.post(API_CONFIG.ENDPOINTS.AUTH.REFRESH, { refreshToken });
        // const { accessToken } = response.data;
        // setAccessToken(accessToken);
        // return apiClient(originalRequest);

        // For now, just clear tokens and redirect to login
        clearTokens();
        window.location.href = '/login';
      } catch (refreshError) {
        clearTokens();
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    // Handle other errors
    return Promise.reject(error);
  }
);
