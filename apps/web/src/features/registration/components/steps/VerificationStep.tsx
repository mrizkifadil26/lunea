import { Button, Field, Form } from '@lunea/ui';

import styles from './VerificationStep.module.css';
import {
  ArrowRightIcon,
  ArrowLeftIcon,
} from 'lucide-react';

type VerificationStepProps = {
  email: string;
  code: string;
  loading: boolean;
  error: string | null;

  onCodeChange: (value: string) => void;
  onSubmit: () => void;
  onBack: () => void;
};

export function VerificationStep({
  email,
  code,
  loading,
  error,
  onCodeChange,
  onSubmit,
  onBack,
}: VerificationStepProps) {
  return (
    <Form
      className="register-form"
      onSubmit={(event) => {
        event.preventDefault();
        void onSubmit();
      }}
    >
      <Form.Header title="Verify your email">
        <p>
          We sent a 6-digit verification code to{' '}
          <strong>{email}</strong>.
        </p>
      </Form.Header>

      {error && (
        <Form.Error style={{ marginBlockEnd: '1rem' }}>
          {error}
        </Form.Error>
      )}

      <Field>
        <Field.Label>Verification Code</Field.Label>

        <Field.OTP value={code} onChange={onCodeChange} />
      </Field>

      <div className={styles.verificationHelp}>
        <span>Didn't receive the code?</span>

        <button
          type="button"
          className="text-button"
          onClick={() => {
            // TODO: resend verification
          }}
        >
          Resend code
        </button>
      </div>

      <Button
        type="submit"
        variant="primary"
        disabled={loading || code.length !== 6}
      >
        {loading ? 'Verifying...' : 'Verify email'}
        {!loading && <ArrowRightIcon size={16} />}
      </Button>

      <Button
        variant="secondary"
        onClick={onBack}
        style={{
          marginTop: '0.75em',
        }}
      >
        <ArrowLeftIcon size={16} />
        Back
      </Button>
    </Form>
  );
}
