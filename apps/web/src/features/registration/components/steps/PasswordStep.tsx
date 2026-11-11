import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Button,
  Form,
  PasswordField,
} from '@lunea/ui';

import { PasswordRequirements } from './PasswordRequirements';

type PasswordStepProps = {
  password: string;
  confirmation: string;
  loading: boolean;
  error: string | null;

  onPasswordChange: (value: string) => void;
  onConfirmationChange: (value: string) => void;
  onSubmit: () => void;
  onBack: () => void;
};

export function PasswordStep({
  password,
  confirmation,
  loading,
  error,
  onPasswordChange,
  onConfirmationChange,
  onSubmit,
  onBack,
}: PasswordStepProps) {
  return (
    <Form
      className="register-form"
      onSubmit={(event) => {
        event.preventDefault();
        void onSubmit();
      }}
    >
      <Form.Header
        title="Set your password"
        description="Choose a strong password to keep your account safe
          and secure."
      />

      {error && <ErrorMessage message={error} />}

      <PasswordField
        id="password"
        label="Password"
        value={password}
        onChange={(event) =>
          onPasswordChange(event.target.value)
        }
      />

      <PasswordField
        id="confirmation"
        label="Confirm Password"
        value={confirmation}
        onChange={(event) =>
          onConfirmationChange(event.target.value)
        }
      />

      <PasswordRequirements password={password} />

      <Button
        variant="primary"
        type="submit"
        disabled={loading}
      >
        {loading ? 'Creating account...' : 'Create account'}
        {!loading && <ArrowRightIcon />}
      </Button>

      <Button
        variant="secondary"
        onClick={onBack}
        style={{
          marginTop: '0.75em',
        }}
      >
        <ArrowLeftIcon />
        Back
      </Button>
    </Form>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="error-message" role="alert">
      <span className="error-icon">!</span>
      {message}
    </div>
  );
}
