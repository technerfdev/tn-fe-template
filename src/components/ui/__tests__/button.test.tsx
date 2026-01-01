import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from '../button';

describe('Button', () => {
  it('renders children and has default styling', () => {
    render(<Button>Click me</Button>);

    const btn = screen.getByRole('button', { name: /click me/i });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass('inline-flex');
  });

  it('accepts variant and size props', () => {
    render(
      <Button variant="outline" size="sm">
        Small Outlined
      </Button>
    );

    const btn = screen.getByRole('button', { name: /small outlined/i });
    expect(btn).toBeInTheDocument();
    expect(btn.className).toContain('border');
  });
});
