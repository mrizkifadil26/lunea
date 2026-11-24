import type { Meta, StoryObj } from '@storybook/react-vite';

import { PasswordRequirements } from './PasswordRequirements';

const requirements = [
  {
    id: 'length',
    label: 'At least 8 characters',
    check: (value: string) => value.length >= 8,
  },
  {
    id: 'uppercase',
    label: 'One uppercase letter',
    check: (value: string) => /[A-Z]/.test(value),
  },
  {
    id: 'lowercase',
    label: 'One lowercase letter',
    check: (value: string) => /[a-z]/.test(value),
  },
  {
    id: 'number',
    label: 'One number',
    check: (value: string) => /\d/.test(value),
  },
];

const meta = {
  title: 'Components/PasswordRequirements',
  component: PasswordRequirements,
  parameters: {
    layout: 'centered',
  },
  args: {
    requirements,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['list', 'progress', 'meter'],
    },
    password: {
      control: 'text',
    },
    requirements: {
      control: false,
    },
  },
} satisfies Meta<typeof PasswordRequirements>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    password: '',
    variant: 'list',
  },
};

export const Partial: Story = {
  args: {
    password: 'Password',
    variant: 'list',
  },
};

export const Complete: Story = {
  args: {
    password: 'Password1',
    variant: 'list',
  },
};

export const Progress: Story = {
  args: {
    password: 'Password1',
    variant: 'progress',
  },
};

export const Meter: Story = {
  args: {
    password: 'Password1',
    variant: 'meter',
  },
};

export const CustomRequirements: Story = {
  args: {
    password: 'Lunea2026!',
    variant: 'list',
    requirements: [
      {
        id: 'length',
        label: 'At least 12 characters',
        check: (value: string) => value.length >= 12,
      },
      {
        id: 'uppercase',
        label: 'One uppercase letter',
        check: (value: string) => /[A-Z]/.test(value),
      },
      {
        id: 'number',
        label: 'One number',
        check: (value: string) => /\d/.test(value),
      },
      {
        id: 'special',
        label: 'One special character',
        check: (value: string) =>
          /[^A-Za-z0-9]/.test(value),
      },
    ],
  },
};
