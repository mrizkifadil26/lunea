import type { Meta, StoryObj } from '@storybook/react-vite';

import { Field } from '@/components/Field';

import styles from './FieldOtpInputStories.module.css';

const meta = {
  title: 'Forms/Field/OTP',
  component: Field.OTP,
  parameters: {
    layout: 'centered',
  },
  render: (args) => (
    <div className={styles.container}>
      <Field required>
        <Field.Label>Verification code</Field.Label>

        <Field.OTP {...args} />

        <Field.Description>
          Enter the 6-digit code sent to your email.
        </Field.Description>
      </Field>
    </div>
  ),
} satisfies Meta<typeof Field.OTP>;

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

export const Disabled: Story = {
  args: {
    value: '123',
    disabled: true,
  },
};
