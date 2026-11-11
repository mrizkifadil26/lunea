import type { Meta, StoryObj } from '@storybook/react-vite';

import { EyeIcon } from '@/icons';
import { Button } from '../Button';
import { ButtonIcon } from '../Button/ButtonIcon';
import { Field, FieldLabel } from './Field';

const meta = {
  title: 'Forms/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: 'email',
    children: (
      <>
        <FieldLabel htmlFor="email">
          Email address
        </FieldLabel>

        <Field.Input
          id="email"
          type="email"
          placeholder="you@example.com"
        />
      </>
    ),
  },
};

export const Required: Story = {
  args: {
    htmlFor: 'name',
    required: true,
    children: (
      <>
        <FieldLabel htmlFor="name" required>
          Name
        </FieldLabel>

        <Field.Input
          id="name"
          required
          placeholder="John Doe"
        />
      </>
    ),
  },
};

export const WithDescription: Story = {
  args: {
    htmlFor: 'email-description',
    description:
      "We'll use this address for account notifications.",
    children: (
      <>
        <FieldLabel htmlFor="email-description">
          Email address
        </FieldLabel>

        <Field.Input
          id="email-description"
          type="email"
          placeholder="you@example.com"
        />
      </>
    ),
  },
};

export const WithError: Story = {
  args: {
    htmlFor: 'email-error',
    error: 'Please enter a valid email address.',
    children: (
      <>
        <FieldLabel htmlFor="email-error">
          Email address
        </FieldLabel>

        <Field.Input
          id="email-error"
          type="email"
          aria-invalid="true"
          value="invalid"
          readOnly
        />
      </>
    ),
  },
};

export const WithLeadingIcon: Story = {
  args: {
    htmlFor: 'email-icon',
    children: (
      <>
        <FieldLabel htmlFor="email-icon">Email</FieldLabel>

        <Field.Control>
          <Field.Adornment placement="start">
            @
          </Field.Adornment>

          <Field.Input
            id="email-icon"
            type="email"
            placeholder="you@example.com"
          />
        </Field.Control>
      </>
    ),
  },
};

export const WithTrailingAction: Story = {
  args: {
    htmlFor: 'password',
    children: (
      <>
        <FieldLabel htmlFor="password">Password</FieldLabel>

        <Field.Control>
          <Field.Input
            id="password"
            type="password"
            placeholder="Enter your password"
          />

          <Field.Adornment placement="end" interactive>
            <ButtonIcon
              aria-label="Show password"
              onClick={() => {}}
              icon={<EyeIcon />}
            />
          </Field.Adornment>
        </Field.Control>
      </>
    ),
  },
};

export const WithLeadingAndTrailing: Story = {
  args: {
    htmlFor: 'password-both',
    description: 'Use at least 8 characters.',
    children: (
      <>
        <FieldLabel htmlFor="password-both">
          Password
        </FieldLabel>

        <Field.Control>
          <Field.Adornment placement="start">
            ●
          </Field.Adornment>

          <Field.Input
            id="password-both"
            type="password"
            placeholder="Enter your password"
          />

          <Field.Adornment placement="end">
            <Button
              aria-label="Show password"
              onClick={() => {}}
            >
              ◉
            </Button>
          </Field.Adornment>
        </Field.Control>
      </>
    ),
  },
};

export const Complete: Story = {
  args: {
    htmlFor: 'work-email',
    description:
      "We'll use this address for account notifications.",
    required: true,
    children: (
      <>
        <FieldLabel htmlFor="work-email" required>
          Work email
        </FieldLabel>

        <Field.Control>
          <Field.Adornment placement="start">
            @
          </Field.Adornment>

          <Field.Input
            id="work-email"
            type="email"
            placeholder="you@company.com"
            required
          />
        </Field.Control>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    htmlFor: 'email-disabled',
    children: (
      <>
        <FieldLabel htmlFor="email-disabled">
          Email address
        </FieldLabel>

        <Field.Input
          id="email-disabled"
          type="email"
          placeholder="you@example.com"
          disabled
        />
      </>
    ),
  },
};
