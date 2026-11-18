import {
  ArrowRightIcon,
  Button,
  Field,
  Form,
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
      <Form.Header
        title="Create your account"
        description="Enter your email address and we'll send you a
          verification code."
      />

      {error && (
        <Form.Error
          style={{
            marginBlockEnd: '1rem',
          }}
        >
          {error}
        </Form.Error>
      )}

      <Field>
        <Field.Label>Email address</Field.Label>

        <Field.Email
          placeholder="you@example.com"
          value={email}
          onChange={(event) =>
            onEmailChange(event.target.value)
          }
        />
      </Field>

      <Button
        type="submit"
        variant="primary"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Continue'}
        {!loading && <ArrowRightIcon />}
      </Button>

      <Form.Footer>
        <div className="form-footer">
          <span>Already have an account?</span>
          <a href="/login">Sign in</a>
        </div>
      </Form.Footer>
    </Form>
  );
}
