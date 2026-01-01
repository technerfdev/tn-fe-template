import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Page', () => {
  it('renders welcome message with app name', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /tn-fe-template/i })).toBeInTheDocument();
  });

  it('renders GitHub repository section', () => {
    render(<Home />);
    expect(screen.getByText(/open source template/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view on github/i })).toBeInTheDocument();
  });

  it('has GitHub link pointing to correct repository', () => {
    render(<Home />);

    const githubLink = screen.getByRole('link', { name: /view on github/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/technerfdev/tn-fe-template');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('displays feature cards with hover effects', () => {
    const { container } = render(<Home />);

    const featureCards = container.querySelectorAll('.group');
    expect(featureCards.length).toBeGreaterThan(0);

    // Check for hover classes
    featureCards.forEach((card) => {
      expect(card).toHaveClass('hover:shadow-lg');
      expect(card).toHaveClass('transition-all');
    });
  });

  it('shows MIT license information', () => {
    render(<Home />);
    expect(screen.getByText(/mit license/i)).toBeInTheDocument();
  });

  it('displays Lucide icons for features', () => {
    const { container } = render(<Home />);

    // Check for SVG icons (Lucide icons)
    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBeGreaterThan(0);
  });

  it('has responsive layout classes', () => {
    const { container } = render(<Home />);

    const mainContainer = container.querySelector('.container');
    expect(mainContainer).toBeInTheDocument();

    const gridContainers = container.querySelectorAll('[class*="grid"]');
    expect(gridContainers.length).toBeGreaterThan(0);
  });
});
