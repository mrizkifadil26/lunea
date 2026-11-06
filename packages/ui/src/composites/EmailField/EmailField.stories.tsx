import type { Meta, StoryObj } from '@storybook/react-vite';

import { EmailField } from '@/composites/EmailField';

const meta = {
  title: 'Forms/EmailField',
  component: EmailField,
  parameters: {
    layout: 'centered',
  },
  args: {
    id: 'email',
    label: 'Email',
    placeholder: 'you@example.com',
  },
  argTypes: {
    onChange: {
      action: 'changed',
    },
    onBlur: {
      action: 'blurred',
    },
  },
} satisfies Meta<typeof EmailField>;

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
    description: "We'll use this email to sign you in.",
  },
};

export const WithError: Story = {
  args: {
    error: 'Please enter a valid email address.',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'user@example.com',
  },
};

export const WithValue: Story = {
  args: {
    value: 'user@example.com',
  },
};
