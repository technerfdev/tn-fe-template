import type { JwtPayload } from '@/types/auth.types';

/**
 * Authentication utility functions
 * Use these for JWT token handling and validation
 */

/**
 * Decode JWT token without verification
 * @param token - JWT token to decode
 * @returns Decoded payload or null if invalid
 */
export function decodeToken(token: string): JwtPayload | null {
  try {
    const base64Url = token.split('.')[1];
    if (!base64Url) return null;

    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );

    return JSON.parse(jsonPayload) as JwtPayload;
  } catch {
    return null;
  }
}

/**
 * Check if JWT token is expired
 * @param token - JWT token to check
 * @returns True if token is expired
 */
export function isTokenExpired(token: string): boolean {
  const decoded = decodeToken(token);
  if (!decoded || !decoded.exp) return true;

  // Convert exp to milliseconds and compare with current time
  return decoded.exp * 1000 < Date.now();
}

/**
 * Get token expiration date
 * @param token - JWT token
 * @returns Expiration date or null
 */
export function getTokenExpirationDate(token: string): Date | null {
  const decoded = decodeToken(token);
  if (!decoded || !decoded.exp) return null;

  return new Date(decoded.exp * 1000);
}

/**
 * Check if token will expire soon (within specified minutes)
 * @param token - JWT token
 * @param minutesThreshold - Minutes threshold (default: 5)
 * @returns True if token expires soon
 */
export function isTokenExpiringSoon(token: string, minutesThreshold: number = 5): boolean {
  const expirationDate = getTokenExpirationDate(token);
  if (!expirationDate) return true;

  const now = Date.now();
  const expiresAt = expirationDate.getTime();
  const thresholdMs = minutesThreshold * 60 * 1000;

  return expiresAt - now < thresholdMs;
}

/**
 * Validate basic token format
 * @param token - Token to validate
 * @returns True if token format is valid
 */
export function isValidTokenFormat(token: string): boolean {
  if (!token || typeof token !== 'string') return false;

  const parts = token.split('.');
  return parts.length === 3;
}
