import type { StateCreator } from 'zustand';
import { APP_CONFIG } from '@/config';

export type Theme = 'light' | 'dark' | 'system';

/**
 * Theme slice state interface
 * Manages application theme (light/dark mode)
 */
export interface ThemeSlice {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

/**
 * Get initial theme from localStorage or default to system
 */
const getInitialTheme = (): Theme => {
  const stored = localStorage.getItem(APP_CONFIG.STORAGE_KEYS.THEME);
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored;
  }
  return 'system';
};

/**
 * Theme slice creator
 * This slice manages theme state and syncs with localStorage
 * The theme is applied via the ThemeProvider component
 */
export const createThemeSlice: StateCreator<ThemeSlice> = (set) => ({
  theme: getInitialTheme(),

  setTheme: (theme) => {
    localStorage.setItem(APP_CONFIG.STORAGE_KEYS.THEME, theme);
    set({ theme });
  },
});
