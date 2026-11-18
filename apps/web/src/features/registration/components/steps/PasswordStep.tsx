import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Button,
  Field,
  Form,
  ButtonGroup,
  PasswordRequirements,
} from '@lunea/ui';

import styles from './PasswordStep.module.css';
import { useState } from 'react';

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
  const [passwordInteracted, setPasswordInteracted] =
    useState(false);

  const [passwordValidated, setPasswordValidated] =
    useState(false);

  const handlePasswordChange = (value: string) => {
    setPasswordInteracted(true);
    onPasswordChange(value);
  };

  const handleSubmit = () => {
    setPasswordValidated(true);
    void onSubmit();
  };

  return (
    <Form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <Form.Header
        title="Set your password"
        description="Choose a strong password to keep your account safe
          and secure."
      />

      {error && <Form.Error>{error}</Form.Error>}

      <Field>
        <Field.Label>Password</Field.Label>
        <Field.Password
          value={password}
          onChange={(event) =>
            handlePasswordChange(event.target.value)
          }
          autoComplete="new-password"
        />

        <PasswordRequirements
          password={password}
          variant="progress"
          visible={passwordInteracted}
          validated={passwordValidated}
          compromiseStatus="unknown"
        />

        <Field.Description>
          Use at least 8 characters with a mix of uppercase,
          lowercase, and numbers.
        </Field.Description>
      </Field>

      <Field>
        <Field.Label>Confirm Password</Field.Label>
        <Field.Password
          value={confirmation}
          onChange={(event) =>
            onConfirmationChange(event.target.value)
          }
          autoComplete="new-password"
        />
      </Field>

      <ButtonGroup orientation="vertical">
        <Button
          variant="primary"
          type="submit"
          disabled={loading}
        >
          {loading
            ? 'Creating account...'
            : 'Create account'}
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
      </ButtonGroup>
    </Form>
  );
}
