import {
  ArrowRightIcon,
  Button,
  EmailField,
  Form,
  FormHeader,
} from '@lunea/ui';

type EmailStepProps = {
  email: string;
  loading: boolean;
  error: string | null;

  onEmailChange: (value: string) => void;
  onSubmit: () => void;
};

export function EmailStep({
  email,
  loading,
  error,
  onEmailChange,
  onSubmit,
}: EmailStepProps) {
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        void onSubmit();
      }}
    >
      <FormHeader
        title="Create your account"
        description="Enter your email address and we'll send you a
          verification code."
      />

      {error && <ErrorMessage message={error} />}

      <EmailField
        id="email"
        label="Email address"
        placeholder="you@example.com"
        value={email}
        onChange={(event) =>
          onEmailChange(event.target.value)
        }
      />

      <Button variant="primary" disabled={loading}>
        {loading ? 'Sending...' : 'Continue'}
        {!loading && <ArrowRightIcon />}
      </Button>

      <FormFooter />
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

function FormFooter() {
  return (
    <div className="form-footer">
      <span>Already have an account?</span>
      <a href="/login">Sign in</a>
    </div>
  );
}
