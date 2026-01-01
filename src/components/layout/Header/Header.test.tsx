import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

// Mock dependencies
vi.mock('@/hooks', () => ({
  useAuth: () => ({
    logout: vi.fn(),
  }),
}));

vi.mock('@/store', () => ({
  useStore: (selector: any) => {
    const state = {
      user: null,
    };
    return selector(state);
  },
}));

const renderHeader = () => {
  return render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

describe('Header', () => {
  it('renders app name', () => {
    renderHeader();
    expect(screen.getByText(/tn-fe-template/i)).toBeInTheDocument();
  });

  it('shows login and sign up buttons when not authenticated', () => {
    renderHeader();

    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
  });

  it('has correct navigation links', () => {
    renderHeader();

    const homeLink = screen.getByRole('link', { name: /tn-fe-template/i });
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('is sticky and has backdrop blur', () => {
    const { container } = renderHeader();
    const header = container.querySelector('header');

    expect(header).toHaveClass('sticky');
    expect(header).toHaveClass('backdrop-blur');
  });
});
