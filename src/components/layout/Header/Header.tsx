import { Button } from '@/components/ui/button';
import { APP_CONFIG, ROUTES } from '@/config';
import { useAuth } from '@/hooks';
import { useStore } from '@/store';
import { Link } from 'react-router-dom';

export function Header() {
  const user = useStore((state) => state.user);
  const { logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to={ROUTES.HOME} className="mr-6 flex items-center space-x-2">
            <span className="font-bold">{APP_CONFIG.APP_NAME}</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center space-x-2 justify-end">
          <nav className="flex items-center space-x-2">
            {user ? (
              <>
                <Link to={ROUTES.DASHBOARD}>
                  <Button variant="ghost" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <span className="text-sm text-muted-foreground">{user.name}</span>
                <Button variant="outline" size="sm" onClick={() => logout()}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link to={ROUTES.REGISTER}>
                  <Button variant="default" size="sm">
                    Sign up
                  </Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
