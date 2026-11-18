import {
  useId,
  useState,
  type SubmitEventHandler,
} from 'react';

import {
  Button,
  Field,
  Form,
  TextButton,
} from '@/components';
import { ButtonGroup } from '@/components/Button/ButtonGroup';
import { OAuthButton } from '@/components/Button/OAuthButton';
import { Divider } from '@/components/Divider/Divider';

import styles from './LoginForm.module.css';

export interface LoginFormValues {
  email: string;
  password: string;
  remember: boolean;
}

export type LoginProvider =
  | 'google'
  | 'microsoft'
  | 'github';

export interface LoginFormProps {
  loading?: boolean;
  error?: string;
  providers?: LoginProvider[];
  onSubmit?: (
    values: LoginFormValues,
  ) => void | Promise<void>;
  onProvider?: (
    provider: LoginProvider,
  ) => void | Promise<void>;
  onForgotPassword?: () => void;
  onRegister?: () => void;
}

const defaultProviders: LoginProvider[] = [
  'google',
  'microsoft',
  'github',
];

export function LoginForm({
  loading = false,
  error,
  providers = defaultProviders,
  onSubmit,
  onProvider,
  onForgotPassword,
  onRegister,
}: LoginFormProps) {
  const errorId = useId();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit: SubmitEventHandler<
    HTMLFormElement
  > = (event) => {
    event.preventDefault();

    onSubmit?.({
      email,
      password,
      remember,
    });
  };

  const handleProvider = (provider: LoginProvider) => {
    void onProvider?.(provider);
  };

  return (
    <Form
      className={styles.form}
      onSubmit={handleSubmit}
      aria-describedby={error ? errorId : undefined}
    >
      <Form.Header
        title="Sign in"
        description="Enter your details to access your account."
      />

      {error && (
        <Form.Feedback intent="error" id={errorId}>
          {error}
        </Form.Feedback>
      )}

      <Field>
        <Field.Label>Email</Field.Label>

        <Field.Email
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={loading}
          autoFocus
        />
      </Field>

      <Field>
        <Field.Label>Password</Field.Label>

        <Field.Password
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
          disabled={loading}
        />
      </Field>

      <div className={styles.options}>
        <Field.Checkbox
          label="Remember me"
          checked={remember}
          onChange={(event) =>
            setRemember(event.target.checked)
          }
          disabled={loading}
        />

        <TextButton
          type="button"
          onClick={onForgotPassword}
          disabled={loading}
        >
          Forgot password?
        </TextButton>
      </div>

      <Button
        type="submit"
        className={styles.submit}
        loading={loading}
        disabled={loading}
      >
        Sign in
      </Button>

      {providers.length > 0 && (
        <>
          <Divider>or</Divider>

          <ButtonGroup orientation="vertical" gap="sm">
            {providers.map((provider) => (
              <OAuthButton
                key={provider}
                provider={provider}
                className={styles.oauth}
                disabled={loading}
                onClick={() => handleProvider(provider)}
              />
            ))}
          </ButtonGroup>
        </>
      )}

      <p className={styles.register}>
        Don't have an account?{' '}
        <TextButton
          type="button"
          onClick={onRegister}
          disabled={loading}
        >
          Create one
        </TextButton>
      </p>
    </Form>
  );
}
