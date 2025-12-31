import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes';
import { ThemeProvider } from './config/theme/ThemeProvider';

/**
 * Root App Component
 * Main app component with providers and router
 * Providers wrap the application to provide context:
 * - BrowserRouter: React Router navigation
 * - ThemeProvider: Dark mode theme context
 */
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="system">
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
