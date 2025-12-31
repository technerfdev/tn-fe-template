import { Navigate, Outlet } from 'react-router-dom';
import { useStore } from '@/store';
import { ROUTES } from '@/config';

/**
 * Protected route component
 * Wraps routes that require authentication
 * Redirects to login if user is not authenticated
 * Usage: Wrap protected routes with this component in routes.tsx
 */
export function ProtectedRoute() {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  // Render child routes if authenticated
  return <Outlet />;
}
