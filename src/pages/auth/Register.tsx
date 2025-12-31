import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RegisterForm } from '@/components/forms/RegisterForm';
import { useAuth } from '@/hooks';
import { ROUTES } from '@/config';

/**
 * Register Page
 * Production-ready user registration page with comprehensive validation
 */
export default function Register() {
  const { register, isLoading, error } = useAuth();

  return (
    <div className="container flex-1 flex flex-col items-center justify-center py-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>Enter your information to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm onSubmit={register} isLoading={isLoading} error={error || undefined} />
          <div className="mt-6 text-center text-sm">
            Already have an account?{' '}
            <Link to={ROUTES.LOGIN} className="text-primary underline-offset-4 hover:underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
