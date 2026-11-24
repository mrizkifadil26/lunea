import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders its content', () => {
    render(<Button>Continue</Button>);

    expect(
      screen.getByRole('button', {
        name: 'Continue',
      }),
    ).toBeInTheDocument();
  });

  it('can be disabled', () => {
    render(<Button disabled>Continue</Button>);

    expect(
      screen.getByRole('button', {
        name: 'Continue',
      }),
    ).toBeDisabled();
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Continue</Button>);

    await user.click(
      screen.getByRole('button', { name: 'Continue' }),
    );

    expect(onClick).toHaveBeenCalledOnce();
  });
});
