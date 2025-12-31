import { useStore } from '@/store';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Dashboard Page
 * Protected dashboard page for authenticated users
 * This is an example page demonstrating protected routes
 */
export default function Dashboard() {
  const user = useStore((state) => state.user);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user?.name || 'User'}!</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Your account information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Name:</span>
                  <span className="text-sm text-muted-foreground">{user?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Email:</span>
                  <span className="text-sm text-muted-foreground">{user?.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Role:</span>
                  <span className="text-sm text-muted-foreground">{user?.role}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>Explore the template features</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>TypeScript configuration</li>
                <li>Zustand state management</li>
                <li>React Hook Form + Zod</li>
                <li>shadcn/ui components</li>
                <li>Dark mode support</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Integration</CardTitle>
              <CardDescription>REST and GraphQL ready</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Axios with interceptors</li>
                <li>Apollo Client setup</li>
                <li>JWT authentication</li>
                <li>Example queries/mutations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
