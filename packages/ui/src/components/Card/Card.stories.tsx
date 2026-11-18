import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  MoreHorizontal,
  Settings,
  UserPlus,
} from 'lucide-react';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Field } from '@/components/Field';
import { Form as FormCmp } from '@/components/Form';
import { IconButton } from '@/components/IconButton';

import styles from './CardStories.module.css';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated', 'flat'],
    },
  },
  args: {
    variant: 'default',
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} style={{ width: 420 }}>
      <Card.Header>
        <Card.Title>Account settings</Card.Title>
        <Card.Description>
          Manage your account information and preferences.
        </Card.Description>
      </Card.Header>

      <Card.Content>
        <div className={styles.settings}>
          <div className={styles.setting}>
            <div className={styles.settingInfo}>
              <span className={styles.settingLabel}>
                Email address
              </span>

              <span className={styles.settingValue}>
                rizki@example.com
              </span>
            </div>
          </div>

          <div className={styles.setting}>
            <div className={styles.settingInfo}>
              <span className={styles.settingLabel}>
                Password
              </span>

              <span className={styles.settingValue}>
                Last changed 2 months ago
              </span>
            </div>
          </div>

          <div className={styles.setting}>
            <div className={styles.settingInfo}>
              <span className={styles.settingLabel}>
                Two-factor authentication
              </span>

              <span className={styles.settingValue}>
                Not enabled
              </span>
            </div>
          </div>
        </div>
      </Card.Content>
    </Card>
  ),
};

export const WithActions: Story = {
  render: (args) => {
    interface MemberProps {
      name: string;
      email: string;
      role: string;
    }

    function Member({ name, email, role }: MemberProps) {
      return (
        <div className={styles.member}>
          <div className={styles.avatar}>
            {name
              .split(' ')
              .map((part) => part[0])
              .join('')}
          </div>

          <div className={styles.info}>
            <span className={styles.name}>{name}</span>
            <span className={styles.email}>{email}</span>
          </div>

          <span className={styles.role}>{role}</span>
        </div>
      );
    }

    return (
      <Card {...args} style={{ width: 420 }}>
        <Card.Header>
          <Card.Title>Team members</Card.Title>
          <Card.Description>
            Manage people who have access to your workspace.
          </Card.Description>

          <Card.Actions>
            <IconButton
              aria-label="More options"
              variant="ghost"
            >
              <MoreHorizontal />
            </IconButton>
          </Card.Actions>
        </Card.Header>

        <Card.Content>
          <div className={styles.members}>
            <Member
              name="Sarah Chen"
              email="sarah@example.com"
              role="Admin"
            />

            <Member
              name="Alex Morgan"
              email="alex@example.com"
              role="Member"
            />

            <Member
              name="Daniel Kim"
              email="daniel@example.com"
              role="Member"
            />
          </div>
        </Card.Content>

        <Card.Divider />

        <Card.Footer>
          <Button size="sm">
            <Button.Icon>
              <UserPlus />
            </Button.Icon>
            Add member
          </Button>

          <Button variant="ghost" size="sm">
            View all
          </Button>
        </Card.Footer>
      </Card>
    );
  },
};

export const WithDivider: Story = {
  render: (args) => (
    <Card {...args} style={{ width: 420 }}>
      <Card.Header>
        <Card.Title>API access</Card.Title>
        <Card.Description>
          Manage your API credentials.
        </Card.Description>
      </Card.Header>

      <Card.Divider />

      <Card.Content>
        <p>
          Your API key is used to authenticate requests to
          the Lunea API.
        </p>
      </Card.Content>

      <Card.Divider />

      <Card.Footer>
        <span>Last rotated 3 days ago</span>

        <Button size="sm" variant="outline">
          Rotate key
        </Button>
      </Card.Footer>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: (args) => (
    <Card {...args} style={{ width: 420 }}>
      <Card.Header>
        <Card.Title>Plan & billing</Card.Title>
        <Card.Description>
          Your current subscription.
        </Card.Description>
      </Card.Header>

      <Card.Content>
        <strong>Pro</strong>
        <p>$49 / month</p>
      </Card.Content>

      <Card.Footer>
        <span>Renews on Dec 12</span>

        <Button size="sm" variant="outline">
          Manage
        </Button>
      </Card.Footer>
    </Card>
  ),
};

export const Form: Story = {
  render: (args) => (
    <Card {...args} style={{ width: 420 }}>
      <Card.Header>
        <Card.Title>Welcome back</Card.Title>
        <Card.Description>
          Sign in to continue to your account.
        </Card.Description>
      </Card.Header>

      <Card.Content>
        <FormCmp
          style={{
            display: 'grid',
            gap: '1rem',
          }}
        >
          <Field>
            <Field.Label>Email</Field.Label>

            <Field.Input
              id="email"
              type="email"
              placeholder="you@example.com"
              style={{ width: '100%' }}
            />
          </Field>

          <Field>
            <Field.Label htmlFor="password">
              Password
            </Field.Label>
            <Field.Input
              id="password"
              type="password"
              placeholder="••••••••"
              style={{ width: '100%' }}
            />
          </Field>
        </FormCmp>
      </Card.Content>

      <Card.Footer>
        <Button variant="ghost">Forgot password?</Button>

        <Button>Sign in</Button>
      </Card.Footer>
    </Card>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(2, minmax(280px, 1fr))',
        gap: '1rem',
        width: 640,
      }}
    >
      <Card {...args} variant="default">
        <Card.Header>
          <Card.Title>Default</Card.Title>
          <Card.Description>
            Subtle border and shadow.
          </Card.Description>
        </Card.Header>

        <Card.Content>Card content.</Card.Content>
      </Card>

      <Card {...args} variant="outlined">
        <Card.Header>
          <Card.Title>Outlined</Card.Title>
          <Card.Description>
            Border without elevation.
          </Card.Description>
        </Card.Header>

        <Card.Content>Card content.</Card.Content>
      </Card>

      <Card {...args} variant="elevated">
        <Card.Header>
          <Card.Title>Elevated</Card.Title>
          <Card.Description>
            Stronger visual separation.
          </Card.Description>
        </Card.Header>

        <Card.Content>Card content.</Card.Content>
      </Card>

      <Card {...args} variant="flat">
        <Card.Header>
          <Card.Title>Flat</Card.Title>
          <Card.Description>
            Soft background with no border.
          </Card.Description>
        </Card.Header>

        <Card.Content>Card content.</Card.Content>
      </Card>
    </div>
  ),
};

export const Dashboard: Story = {
  render: (args) => (
    <Card {...args} style={{ width: 480 }}>
      <Card.Header>
        <Card.Title>API usage</Card.Title>
        <Card.Description>
          Requests made this month.
        </Card.Description>

        <Card.Actions>
          <IconButton aria-label="Settings" variant="ghost">
            <Settings />
          </IconButton>
        </Card.Actions>
      </Card.Header>

      <Card.Content>
        <div
          style={{
            fontSize: '2rem',
            fontWeight: 600,
          }}
        >
          84,291
        </div>

        <div
          style={{
            marginTop: '0.25rem',
            color: 'var(--color-gray-500)',
          }}
        >
          16% more than last month
        </div>
      </Card.Content>

      <Card.Footer>
        <span>Usage resets in 12 days</span>

        <Button size="sm" variant="ghost">
          View usage
        </Button>
      </Card.Footer>
    </Card>
  ),
};
