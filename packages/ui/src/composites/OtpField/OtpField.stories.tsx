import type { Meta, StoryObj } from '@storybook/react-vite';

import { OtpField } from '@/composites/OtpField';

const meta = {
  title: 'Forms/OtpField',
  component: OtpField,
  parameters: {
    layout: 'centered',
  },
  args: {
    id: 'verification-code',
    label: 'Verification code',
    description: 'Enter the 6-digit code sent to your email.',
  },
} satisfies Meta<typeof OtpField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const WithValue: Story = {
  args: {
    value: '123',
  },
};

export const WithError: Story = {
  args: {
    value: '123456',
    error: 'The verification code is incorrect.',
  },
};

export const Disabled: Story = {
  args: {
    value: '123',
    disabled: true,
  },
};
