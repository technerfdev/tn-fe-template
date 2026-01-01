import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LoginForm } from './LoginForm';

// Mock useAuth hook
vi.mock('@/hooks', () => ({
  useAuth: () => ({
    login: vi.fn(),
    isLoading: false,
    error: null,
  }),
}));

describe('LoginForm', () => {
  it('renders all form fields', () => {
    render(<LoginForm />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/remember me/i)).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<LoginForm />);

    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  it('has correct input types', () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    expect(emailInput).toHaveAttribute('type', 'email');
    expect(passwordInput).toHaveAttribute('type', 'password');
  });
});
