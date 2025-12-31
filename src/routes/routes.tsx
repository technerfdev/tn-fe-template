import type { RouteObject } from 'react-router-dom';
import { ROUTES } from '@/config';
import { ProtectedRoute } from './ProtectedRoute';
import { AppLayout } from '@/components/layout';

// Lazy load pages for better performance
import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Login = lazy(() => import('@/pages/auth/Login'));
const Register = lazy(() => import('@/pages/auth/Register'));
const Dashboard = lazy(() => import('@/pages/dashboard/Dashboard'));
const NotFound = lazy(() => import('@/pages/NotFound'));

/**
 * Application routes
 * Add new routes here. Use ProtectedRoute for authenticated routes.
 * Public routes: accessible without authentication
 * Protected routes: require authentication, wrapped in ProtectedRoute
 */
export const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.REGISTER,
        element: <Register />,
      },

      {
        element: <ProtectedRoute />,
        children: [
          {
            path: ROUTES.DASHBOARD,
            element: <Dashboard />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
