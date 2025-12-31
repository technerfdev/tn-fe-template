import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/config';

/**
 * 404 Not Found Page
 * Displayed when user navigates to an invalid route
 */
export default function NotFound() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="text-3xl font-bold">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to={ROUTES.HOME}>
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
