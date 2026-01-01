import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RegisterForm } from './RegisterForm';

describe('RegisterForm', () => {
  const mockOnSubmit = vi.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  it('renders registration form with all fields', () => {
    render(<RegisterForm onSubmit={mockOnSubmit} />);

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/accept the terms/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument();
  });

  it('shows validation errors for empty fields', async () => {
    render(<RegisterForm onSubmit={mockOnSubmit} />);

    const submitButton = screen.getByRole('button', { name: /create account/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    });
  });

  it('shows validation error for invalid name format', async () => {
    render(<RegisterForm onSubmit={mockOnSubmit} />);

    const nameInput = screen.getByLabelText(/full name/i);
    const submitButton = screen.getByRole('button', { name: /create account/i });

    fireEvent.change(nameInput, { target: { value: 'Test123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/name can only contain letters/i)).toBeInTheDocument();
    });
  });

  it('shows validation error for weak password', async () => {
    render(<RegisterForm onSubmit={mockOnSubmit} />);

    const passwordInput = screen.getByLabelText(/^password/i);
    const submitButton = screen.getByRole('button', { name: /create account/i });

    fireEvent.change(passwordInput, { target: { value: 'weakpass' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/password must contain at least one uppercase letter/i)).toBeInTheDocument();
    });
  });

  it('shows error when passwords do not match', async () => {
    render(<RegisterForm onSubmit={mockOnSubmit} />);

    const passwordInput = screen.getByLabelText(/^password/i);
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
    const submitButton = screen.getByRole('button', { name: /create account/i });

    fireEvent.change(passwordInput, { target: { value: 'ValidPass123!' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'DifferentPass123!' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
    });
  });

  it('shows error when terms are not accepted', async () => {
    render(<RegisterForm onSubmit={mockOnSubmit} />);

    const nameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/^email/i);
    const passwordInput = screen.getByLabelText(/^password/i);
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
    const submitButton = screen.getByRole('button', { name: /create account/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'ValidPass123!' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'ValidPass123!' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/you must accept the terms and conditions/i)).toBeInTheDocument();
    });
  });

  it('toggles password visibility', async () => {
    const user = userEvent.setup();
    render(<RegisterForm onSubmit={mockOnSubmit} />);

    const passwordInput = screen.getByLabelText(/^password/i) as HTMLInputElement;
    expect(passwordInput.type).toBe('password');

    const toggleButtons = screen.getAllByRole('button', { name: '' });
    await user.click(toggleButtons[0]);

    expect(passwordInput.type).toBe('text');
  });

  it('submits form with valid data', async () => {
    render(<RegisterForm onSubmit={mockOnSubmit} />);

    const nameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/^email/i);
    const passwordInput = screen.getByLabelText(/^password/i);
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
    const termsCheckbox = screen.getByLabelText(/accept the terms/i);
    const submitButton = screen.getByRole('button', { name: /create account/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'ValidPass123!' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'ValidPass123!' } });
    fireEvent.click(termsCheckbox);
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'ValidPass123!',
      });
    });
  });

  it('shows password strength hint', () => {
    render(<RegisterForm onSubmit={mockOnSubmit} />);

    expect(
      screen.getByText(/must contain 8\+ characters, including uppercase, lowercase, number/i)
    ).toBeInTheDocument();
  });

  it('disables form when loading', () => {
    render(<RegisterForm onSubmit={mockOnSubmit} isLoading={true} />);

    const nameInput = screen.getByLabelText(/full name/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/^email/i) as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: /creating account/i }) as HTMLButtonElement;

    expect(nameInput.disabled).toBe(true);
    expect(emailInput.disabled).toBe(true);
    expect(submitButton.disabled).toBe(true);
  });

  it('displays server error message', () => {
    const errorMessage = 'Email already exists';
    render(<RegisterForm onSubmit={mockOnSubmit} error={errorMessage} />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
