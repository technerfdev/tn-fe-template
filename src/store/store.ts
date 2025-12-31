import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { AuthSlice } from './slices/auth.slice';
import type { ThemeSlice } from './slices/theme.slice';
import { createAuthSlice } from './slices/auth.slice';
import { createThemeSlice } from './slices/theme.slice';

/**
 * Root store type - combination of all slices
 * When adding a new slice:
 * 1. Import the slice type and creator
 * 2. Add the slice type to StoreState
 * 3. Spread the slice creator in the store creation below
 */
export type StoreState = AuthSlice & ThemeSlice;

/**
 * Root Zustand store
 * This combines all state slices into a single store
 * Usage: const user = useStore((state) => state.user);
 */
export const useStore = create<StoreState>()(
  devtools(
    (...args) => ({
      ...createAuthSlice(...args),
      ...createThemeSlice(...args),
    }),
    { name: 'tn-fe-template-store' }
  )
);
