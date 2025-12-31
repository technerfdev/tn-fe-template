import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

function LoadingFallback() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-lg">Loading...</div>
    </div>
  );
}

export function AppRouter() {
  const element = useRoutes(routes);

  return <Suspense fallback={<LoadingFallback />}>{element}</Suspense>;
}
