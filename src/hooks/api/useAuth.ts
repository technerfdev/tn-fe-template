import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '@/api';
import { useStore } from '@/store';
import { storage } from '@/utils';
import { ROUTES } from '@/config';
import type { LoginCredentials, RegisterCredentials } from '@/types/auth.types';

/**
 * Authentication hook
 * This hook manages authentication state and provides auth methods
 * Modify this to change authentication behavior across the app
 * Related files:
 * - src/api/rest/services/auth.service.ts (API calls)
 * - src/store/slices/auth.slice.ts (state management)
 */
export function useAuth() {
  const navigate = useNavigate();
  const { setUser, setAccessToken, clearAuth } = useStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Login user with email and password
   * @param credentials - User credentials
   */
  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.login(credentials);

      // Update store
      setUser(response.user);
      setAccessToken(response.accessToken);

      // Persist tokens
      storage.setAccessToken(response.accessToken);
      storage.setRefreshToken(response.refreshToken);
      storage.setUser(response.user);

      // Navigate to dashboard
      navigate(ROUTES.DASHBOARD);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Login failed';
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Register new user
   * @param credentials - Registration data
   */
  const register = async (credentials: RegisterCredentials) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.register(credentials);

      // Update store
      setUser(response.user);
      setAccessToken(response.accessToken);

      // Persist tokens
      storage.setAccessToken(response.accessToken);
      storage.setRefreshToken(response.refreshToken);
      storage.setUser(response.user);

      // Navigate to dashboard
      navigate(ROUTES.DASHBOARD);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Registration failed';
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Logout current user
   */
  const logout = async () => {
    setIsLoading(true);

    try {
      await authService.logout();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      // Clear state and storage regardless of API call success
      clearAuth();
      storage.clearAuth();
      setIsLoading(false);
      navigate(ROUTES.LOGIN);
    }
  };

  return {
    login,
    register,
    logout,
    isLoading,
    error,
  };
}
