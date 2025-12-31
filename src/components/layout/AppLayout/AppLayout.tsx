import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/config/theme/ThemeProvider';

export function AppLayout() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden">
      <Header />
      <main className="flex-1 flex justify-center overflow-y-auto">
        <Outlet />
      </main>
      <div className="fixed bottom-1 right-1">
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark');
          }}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </Button>
      </div>
    </div>
  );
}
