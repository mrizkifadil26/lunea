import type { Meta, StoryObj } from '@storybook/react-vite';

import { AtSign, Eye, EyeOff, Lock } from 'lucide-react';
import { useState } from 'react';

import { Field } from './Field';

const meta = {
  title: 'Forms/Field/Generic',
  component: Field,

  decorators: [
    (Story) => (
      <div style={{ inlineSize: '24rem' }}>
        <Story />
      </div>
    ),
  ],

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Basic field composition.
 */
export const Default: Story = {
  render: (args) => (
    <Field {...args}>
      <Field.Label>Email address</Field.Label>

      <Field.Input
        type="email"
        placeholder="you@example.com"
        autoComplete="email"
      />
    </Field>
  ),
};

/**
 * Field with the required state.
 */
export const Required: Story = {
  args: {
    required: true,
  },

  render: (args) => (
    <Field {...args}>
      <Field.Label>Name</Field.Label>

      <Field.Input placeholder="John Doe" />
    </Field>
  ),
};

/**
 * Field with supporting descriptive text.
 */
export const WithDescription: Story = {
  render: (args) => (
    <Field {...args}>
      <Field.Label>Email address</Field.Label>

      <Field.Input
        type="email"
        placeholder="you@example.com"
        autoComplete="email"
      />

      <Field.Description>
        We'll use this address for account notifications.
      </Field.Description>
    </Field>
  ),
};

/**
 * Field displaying a validation error.
 */
export const WithError: Story = {
  args: {
    invalid: true,
  },

  render: (args) => (
    <Field {...args}>
      <Field.Label>Email address</Field.Label>

      <Field.Input type="email" value="invalid" readOnly />

      <Field.Error>
        Please enter a valid email address.
      </Field.Error>
    </Field>
  ),
};

/**
 * Field with a leading adornment.
 */
export const WithLeadingAdornment: Story = {
  render: (args) => (
    <Field {...args}>
      <Field.Label>Email</Field.Label>

      <Field.Control>
        <Field.Adornment placement="start">
          <AtSign />
        </Field.Adornment>

        <Field.Input
          type="email"
          placeholder="you@example.com"
        />
      </Field.Control>
    </Field>
  ),
};

/**
 * Field with an interactive trailing adornment.
 */
export const WithTrailingAction: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <Field {...args}>
        <Field.Label>Password</Field.Label>

        <Field.Control>
          <Field.Input
            type={visible ? 'text' : 'password'}
            placeholder="Enter your password"
          />

          <Field.Adornment placement="end">
            <button
              type="button"
              aria-label={
                visible ? 'Hide password' : 'Show password'
              }
              aria-pressed={visible}
              onClick={() => setVisible((value) => !value)}
            >
              <span>{visible ? <EyeOff /> : <Eye />}</span>
            </button>
          </Field.Adornment>
        </Field.Control>
      </Field>
    );
  },
};

/**
 * Field with both leading and trailing adornments.
 */
export const WithLeadingAndTrailing: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <Field {...args}>
        <Field.Label>Password</Field.Label>

        <Field.Control>
          <Field.Adornment placement="start">
            <Lock />
          </Field.Adornment>

          <Field.Input
            type="password"
            placeholder="Enter your password"
          />

          <Field.Adornment placement="end">
            <button
              type="button"
              aria-label={
                visible ? 'Hide password' : 'Show password'
              }
              aria-pressed={visible}
              onClick={() => setVisible((value) => !value)}
            >
              <span>{visible ? <EyeOff /> : <Eye />}</span>
            </button>
          </Field.Adornment>
        </Field.Control>

        <Field.Description>
          Use at least 8 characters.
        </Field.Description>
      </Field>
    );
  },
};

/**
 * Complete example demonstrating the common Field composition.
 */
export const Complete: Story = {
  args: {
    required: true,
  },

  render: (args) => (
    <Field {...args}>
      <Field.Label>Work email</Field.Label>

      <Field.Control>
        <Field.Adornment placement="start">
          <AtSign />
        </Field.Adornment>

        <Field.Input
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
        />
      </Field.Control>

      <Field.Description>
        We'll use this address for account notifications.
      </Field.Description>
    </Field>
  ),
};

/**
 * Disabled field.
 */
export const Disabled: Story = {
  render: (args) => (
    <Field {...args}>
      <Field.Label>Email address</Field.Label>

      <Field.Input
        type="email"
        placeholder="you@example.com"
        disabled
      />
    </Field>
  ),
};
