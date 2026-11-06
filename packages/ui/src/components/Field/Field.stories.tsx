import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '@/components/Input';
import { Field, FieldDescription, FieldLabel } from './Field';

const meta = {
  title: 'Forms/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: 'name',
    children: (
      <>
        <FieldLabel htmlFor="name">Name</FieldLabel>

        <Input id="name" placeholder="John Doe" />
      </>
    ),
  },
};

export const WithDescription: Story = {
  args: {
    htmlFor: 'name',
    children: (
      <>
        <FieldLabel htmlFor="name">Name</FieldLabel>

        <Input id="name" placeholder="John Doe" />

        <FieldDescription>Enter your full legal name.</FieldDescription>
      </>
    ),
  },
};

export const WithError: Story = {
  args: {
    htmlFor: 'email',
    error: 'Please enter a valid email address.',
    children: (
      <>
        <FieldLabel htmlFor="email">Email</FieldLabel>

        <Input
          id="email"
          type="email"
          aria-invalid="true"
          value="invalid"
          readOnly
        />
      </>
    ),
  },
};

export const Required: Story = {
  args: {
    htmlFor: 'name',
    required: true,
    children: (
      <>
        <FieldLabel htmlFor="name" required>
          Name
        </FieldLabel>

        <Input id="name" required placeholder="John Doe" />
      </>
    ),
  },
};
