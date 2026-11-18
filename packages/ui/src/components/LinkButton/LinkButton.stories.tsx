import type { Meta, StoryObj } from '@storybook/react-vite';

import { LinkButton } from './LinkButton';

const meta = {
  title: 'Components/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    href: '#',
    children: 'Already have an account?',
  },
} satisfies Meta<typeof LinkButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongText: Story = {
  args: {
    children: 'Already have an account? Sign in',
  },
};

export const External: Story = {
  args: {
    href: 'https://example.com',
    children: 'Learn more',
    target: '_blank',
    rel: 'noreferrer',
  },
};
