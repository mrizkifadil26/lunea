import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Accept the terms and conditions',
  },
  argTypes: {
    id: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
    invalid: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
    defaultChecked: {
      control: 'boolean',
    },
    onChange: {
      action: 'changed',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
    label: 'Enable notifications',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Marketing emails',
    description:
      'Receive product updates, announcements, and occasional news.',
  },
};

export const Required: Story = {
  args: {
    label: 'Accept the terms and conditions',
    required: true,
  },
};

export const Invalid: Story = {
  args: {
    label: 'Accept the terms and conditions',
    invalid: true,
    error: 'You must accept the terms before continuing.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Unavailable option',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Already enabled',
    defaultChecked: true,
    disabled: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Select all',
    indeterminate: true,
  },
};

export const IndeterminateDisabled: Story = {
  args: {
    label: 'Some items selected',
    indeterminate: true,
    disabled: true,
  },
};

export const WithDescriptionAndError: Story = {
  args: {
    label: 'Enable data sharing',
    description:
      'Allow anonymous usage data to be used to improve the product.',
    invalid: true,
    error: 'Please review this setting.',
  },
};

export const LongContent: Story = {
  args: {
    label:
      'I agree that my account data may be stored and processed according to the privacy policy',
    description:
      'This includes account information, usage data, and other information required to provide the service.',
  },
};
