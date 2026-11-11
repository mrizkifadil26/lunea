import type { Meta, StoryObj } from '@storybook/react-vite';

import { CircleInfoIcon } from '@/icons';
import { FormFeedback } from './FormFeedback';

const meta = {
  title: 'Components/FormFeedback',
  component: FormFeedback,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Something went wrong.',
  },
  argTypes: {
    intent: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success'],
    },
    icon: {
      control: false,
    },
    role: {
      control: 'select',
      options: ['alert', 'status'],
    },
  },
} satisfies Meta<typeof FormFeedback>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Error: Story = {
  args: {
    intent: 'error',
    children: 'Something went wrong. Please try again.',
  },
};

export const Warning: Story = {
  args: {
    intent: 'warning',
    children: 'Something may require your attention.',
  },
};

export const Info: Story = {
  args: {
    intent: 'info',
    children: 'Here is some additional information.',
  },
};

export const Success: Story = {
  args: {
    intent: 'success',
    children: 'Everything looks good.',
  },
};

export const WithIcon: Story = {
  args: {
    intent: 'info',
    icon: (
      <span aria-hidden="true">
        <CircleInfoIcon />
      </span>
    ),
    children: (
      <>
        <strong>Heads up.</strong> You can customize the
        content and presentation.
      </>
    ),
  },
};

export const CustomContent: Story = {
  args: {
    intent: 'warning',
    children: (
      <>
        Your password expires in <strong>3 days</strong>.
        Please update it before then.
      </>
    ),
  },
};

export const CustomRole: Story = {
  args: {
    intent: 'error',
    role: 'status',
    children: 'This feedback uses a custom ARIA role.',
  },
};

export const LongContent: Story = {
  args: {
    intent: 'info',
    children:
      'Your information will be securely stored and used only to provide the services associated with your account. Make sure everything is correct before continuing.',
  },
};
