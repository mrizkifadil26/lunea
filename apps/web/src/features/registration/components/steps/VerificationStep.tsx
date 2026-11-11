import {
  ArrowRightIcon,
  Button,
  Form,
  OtpField,
} from '@lunea/ui';

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

      {error && <ErrorMessage message={error} />}

      <OtpField
        id="code"
        label="Verification Code"
        value={code}
        onChange={onCodeChange}
      />

      <div className="verification-help">
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

function ArrowLeftIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13 8H3M7 4L3 8L7 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
