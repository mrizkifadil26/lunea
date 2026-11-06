import type { Meta, StoryObj } from '@storybook/react-vite';

import { PasswordField } from '@/composites/PasswordField';

const meta = {
  title: 'Forms/PasswordField',
  component: PasswordField,
  parameters: {
    layout: 'centered',
  },
  args: {
    id: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
  },
  argTypes: {
    onChange: {
      action: 'changed',
    },
    onBlur: {
      action: 'blurred',
    },
  },
} satisfies Meta<typeof PasswordField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const WithDescription: Story = {
  args: {
    description: 'Use at least 8 characters with a mix of letters and numbers.',
  },
};

export const WithError: Story = {
  args: {
    value: 'password',
    error: 'Password must be at least 8 characters.',
  },
};

export const WithValue: Story = {
  args: {
    value: 'correct-horse-battery-staple',
  },
};

export const Disabled: Story = {
  args: {
    value: 'password',
    disabled: true,
  },
};
