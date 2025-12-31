import { useState, useEffect } from 'react';
import { userService } from '@/api';
import { useStore } from '@/store';
import { storage } from '@/utils';
import type { UpdateUserDto } from '@/types/api.types';

/**
 * User data hook
 * This hook manages user profile data
 * Example usage: const { user, isLoading, updateProfile } = useUser();
 */
export function useUser() {
  const { user, setUser } = useStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetch current user data
   */
  const fetchUser = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const userData = await userService.getCurrentUser();
      setUser(userData);
      storage.setUser(userData);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch user';
      setError(message);
      console.error('Fetch user error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Update user profile
   */
  const updateProfile = async (data: UpdateUserDto) => {
    setIsLoading(true);
    setError(null);

    try {
      const updatedUser = await userService.updateUser(data);
      setUser(updatedUser);
      storage.setUser(updatedUser);
      return updatedUser;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update profile';
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Load user from storage on mount if not in store
   */
  useEffect(() => {
    if (!user) {
      const storedUser = storage.getUser();
      if (storedUser) {
        setUser(storedUser);
      }
    }
  }, [user, setUser]);

  return {
    user,
    isLoading,
    error,
    fetchUser,
    updateProfile,
  };
}
