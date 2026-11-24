import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button';
import { Field } from '../Field';
import { Input } from '../Input';
import { Form } from './Form';

const meta = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onSubmit: {
      action: 'submitted',
    },
  },
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Form.Header
          title="Create your account"
          description="Enter your details to get started."
        />

        <Field>
          <Field.Label htmlFor="email">Email</Field.Label>

          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
          />
        </Field>

        <Form.Footer>
          <Button type="submit">Create account</Button>
        </Form.Footer>
      </>
    ),
  },
};

export const WithInfo: Story = {
  args: {
    children: (
      <>
        <Form.Header
          title="Create your account"
          description="Enter your details to get started."
        />

        <Form.Info>
          We’ll use your email to verify your account.
        </Form.Info>

        <Field>
          <Field.Label htmlFor="email">Email</Field.Label>
          <Input id="email" name="email" type="email" />
        </Field>

        <Form.Footer>
          <Button type="submit">Continue</Button>
        </Form.Footer>
      </>
    ),
  },
};

export const WithError: Story = {
  args: {
    children: (
      <>
        <Form.Header
          title="Create your account"
          description="Enter your details to get started."
        />

        <Form.Error>
          We couldn't create your account. Please try again.
        </Form.Error>

        <Field>
          <Field.Label htmlFor="email">Email</Field.Label>
          <Input
            id="email"
            name="email"
            type="email"
            aria-invalid="true"
            defaultValue="invalid-email"
          />
        </Field>

        <Form.Footer>
          <Button type="submit">Try again</Button>
        </Form.Footer>
      </>
    ),
  },
};

export const WithWarning: Story = {
  args: {
    children: (
      <>
        <Form.Header
          title="Account settings"
          description="Review your account configuration."
        />

        <Form.Warning>
          Your password expires in 3 days.
        </Form.Warning>

        <Form.Footer>
          <Button type="submit">Update password</Button>
        </Form.Footer>
      </>
    ),
  },
};

export const WithSuccess: Story = {
  args: {
    children: (
      <>
        <Form.Header
          title="Password updated"
          description="Your password has been changed successfully."
        />

        <Form.Success>
          Your password was updated successfully.
        </Form.Success>

        <Form.Footer>
          <Button type="submit">Continue</Button>
        </Form.Footer>
      </>
    ),
  },
};
