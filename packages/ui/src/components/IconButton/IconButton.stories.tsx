import type { Meta, StoryObj } from '@storybook/react-vite';

import { PlusIcon, TrashIcon } from 'lucide-react';

import { IconButton } from './IconButton';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  args: {
    'aria-label': 'Add user',
    children: <PlusIcon />,
    variant: 'primary',
    size: 'md',
  },
  argTypes: {
    children: {
      control: false,
    },
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'outline',
        'ghost',
        'destructive',
        'link',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem' }}>
      <IconButton aria-label="Add" variant="primary">
        <PlusIcon />
      </IconButton>

      <IconButton aria-label="Add" variant="secondary">
        <PlusIcon />
      </IconButton>

      <IconButton aria-label="Add" variant="outline">
        <PlusIcon />
      </IconButton>

      <IconButton aria-label="Add" variant="ghost">
        <PlusIcon />
      </IconButton>

      <IconButton aria-label="Delete" variant="destructive">
        <TrashIcon />
      </IconButton>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
      <IconButton aria-label="Add" size="sm">
        <PlusIcon />
      </IconButton>

      <IconButton aria-label="Add" size="md">
        <PlusIcon />
      </IconButton>

      <IconButton aria-label="Add" size="lg">
        <PlusIcon />
      </IconButton>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    'aria-label': 'Saving',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    'aria-label': 'Add user',
    disabled: true,
  },
};
