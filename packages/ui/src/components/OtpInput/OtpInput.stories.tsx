import type { Meta, StoryObj } from '@storybook/react-vite';

import { OtpInput } from './OtpInput';

const meta = {
  title: 'Input/OtpInput',
  component: OtpInput,
  parameters: {
    layout: 'centered',
  },
  args: {
    length: 6,
  },
} satisfies Meta<typeof OtpInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: '123',
  },
};

export const Complete: Story = {
  args: {
    value: '123456',
  },
};

export const FourDigits: Story = {
  args: {
    length: 4,
    value: '1234',
  },
};

export const Disabled: Story = {
  args: {
    value: '123',
    disabled: true,
  },
};
