import type { StateCreator } from 'zustand';
import type { User } from '@/types/auth.types';

/**
 * Auth slice state interface
 * Add new auth-related state properties here
 */
export interface AuthSlice {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setAccessToken: (token: string | null) => void;
  clearAuth: () => void;
}

/**
 * Auth slice creator
 * This slice manages authentication state
 * Related files:
 * - src/hooks/api/useAuth.ts (uses this slice)
 * - src/utils/storage.utils.ts (persists tokens)
 */
export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  user: null,
  accessToken: null,
  isAuthenticated: false,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
    }),

  setAccessToken: (accessToken) =>
    set({
      accessToken,
    }),

  clearAuth: () =>
    set({
      user: null,
      accessToken: null,
      isAuthenticated: false,
    }),
});
