import { APP_CONFIG } from '@/config';
import type { User } from '@/types/auth.types';

/**
 * Storage utilities for localStorage/sessionStorage
 * Use these helpers for consistent storage access
 */

// Token management
export const storage = {
  /**
   * Get access token from localStorage
   */
  getAccessToken: (): string | null => {
    return localStorage.getItem(APP_CONFIG.STORAGE_KEYS.ACCESS_TOKEN);
  },

  /**
   * Set access token in localStorage
   */
  setAccessToken: (token: string): void => {
    localStorage.setItem(APP_CONFIG.STORAGE_KEYS.ACCESS_TOKEN, token);
  },

  /**
   * Get refresh token from localStorage
   */
  getRefreshToken: (): string | null => {
    return localStorage.getItem(APP_CONFIG.STORAGE_KEYS.REFRESH_TOKEN);
  },

  /**
   * Set refresh token in localStorage
   */
  setRefreshToken: (token: string): void => {
    localStorage.setItem(APP_CONFIG.STORAGE_KEYS.REFRESH_TOKEN, token);
  },

  /**
   * Clear all auth-related data from localStorage
   */
  clearAuth: (): void => {
    localStorage.removeItem(APP_CONFIG.STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(APP_CONFIG.STORAGE_KEYS.REFRESH_TOKEN);
    localStorage.removeItem(APP_CONFIG.STORAGE_KEYS.USER);
  },

  /**
   * Get user data from localStorage
   */
  getUser: (): User | null => {
    const userStr = localStorage.getItem(APP_CONFIG.STORAGE_KEYS.USER);
    if (!userStr) return null;
    try {
      return JSON.parse(userStr) as User;
    } catch {
      return null;
    }
  },

  /**
   * Set user data in localStorage
   */
  setUser: (user: User): void => {
    localStorage.setItem(APP_CONFIG.STORAGE_KEYS.USER, JSON.stringify(user));
  },

  /**
   * Get item from localStorage with JSON parsing
   */
  getItem: <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    if (!item) return null;
    try {
      return JSON.parse(item) as T;
    } catch {
      return null;
    }
  },

  /**
   * Set item in localStorage with JSON stringification
   */
  setItem: <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  },

  /**
   * Remove item from localStorage
   */
  removeItem: (key: string): void => {
    localStorage.removeItem(key);
  },

  /**
   * Clear all localStorage
   */
  clear: (): void => {
    localStorage.clear();
  },
};
