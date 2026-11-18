import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Card } from '@/components';

import { LoginForm } from './LoginForm';
import styles from './LoginForm.module.css';

const meta = {
  title: 'Patterns/LoginForm',
  component: LoginForm,

  decorators: [
    (Story) => (
      <div className={styles.canvas}>
        <Card className={styles.card} variant="elevated">
          <Card.Header>
            <Card.Title>Welcome back</Card.Title>
            <Card.Description>
              Sign in to your account to continue.
            </Card.Description>
          </Card.Header>

          <Card.Content>
            <Story />
          </Card.Content>
        </Card>
      </div>
    ),
  ],

  args: {
    onSubmit: fn(),
    onForgotPassword: fn(),
    onRegister: fn(),
  },
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Error: Story = {
  args: {
    error:
      'The email or password you entered is incorrect.',
  },
};
