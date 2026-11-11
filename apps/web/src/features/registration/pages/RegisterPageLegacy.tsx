import { useState } from 'react';
import './register-page-legacy.css';

type RegistrationStep =
  | 'email'
  | 'verification'
  | 'password'
  | 'complete';

const steps = [
  { id: 'email', label: 'Email' },
  { id: 'verification', label: 'Verify' },
  { id: 'password', label: 'Password' },
  { id: 'complete', label: 'Complete' },
] as const;

export function RegisterPageLegacy() {
  const [step, setStep] =
    useState<RegistrationStep>('email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const currentStep = steps.findIndex(
    (item) => item.id === step,
  );

  async function submitEmail() {
    setError('');
    setLoading(true);

    try {
      // TODO:
      // await registrationApi.start(email);

      await new Promise((resolve) =>
        setTimeout(resolve, 500),
      );

      setStep('verification');
    } catch {
      setError("We couldn't start your registration.");
    } finally {
      setLoading(false);
    }
  }

  async function verifyEmail() {
    if (code.length !== 6) {
      setError('Enter the 6-digit verification code.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      // TODO:
      // await registrationApi.verifyEmail(code);

      await new Promise((resolve) =>
        setTimeout(resolve, 500),
      );

      setStep('password');
    } catch {
      setError(
        'That verification code is invalid or expired.',
      );
    } finally {
      setLoading(false);
    }
  }

  async function createAccount() {
    if (password.length < 12) {
      setError(
        'Your password must contain at least 12 characters.',
      );
      return;
    }

    if (password !== confirmation) {
      setError("Your passwords don't match.");
      return;
    }

    setError('');
    setLoading(true);

    try {
      // TODO:
      // await registrationApi.setPassword(password);

      await new Promise((resolve) =>
        setTimeout(resolve, 600),
      );

      setStep('complete');
    } catch {
      setError("We couldn't create your account.");
    } finally {
      setLoading(false);
    }
  }

  function goBack() {
    setError('');

    if (step === 'verification') {
      setStep('email');
    } else if (step === 'password') {
      setStep('verification');
    }
  }

  return (
    <main className="register">
      <section className="register-shell">
        {/* ─────────────────────────────────────────────
            Brand panel
        ───────────────────────────────────────────── */}

        <aside className="register-brand">
          <div className="brand-content">
            <a href="/" className="brand">
              <span className="brand-mark">
                <span />
                <span />
              </span>

              <span>Nova</span>
            </a>

            <div className="brand-message">
              <span className="eyebrow">GET STARTED</span>

              <h2>
                Build something
                <br />
                great together.
              </h2>

              <p>
                Create your account and get started with
                everything you need to turn your ideas into
                reality.
              </p>
            </div>
          </div>

          <div className="brand-art" aria-hidden="true">
            <div className="mountain mountain-back" />
            <div className="mountain mountain-middle" />
            <div className="mountain mountain-front" />
            <div className="lake" />
          </div>

          <div className="brand-footer">
            <span>© 2026 Nova</span>
            <span>Simple things, well made.</span>
          </div>
        </aside>

        {/* ─────────────────────────────────────────────
            Form panel
        ───────────────────────────────────────────── */}

        <section className="register-form-panel">
          <div className="register-form-container">
            {step !== 'complete' && (
              <div className="progress">
                {steps.map((item, index) => {
                  const completed = index < currentStep;
                  const active = index === currentStep;

                  return (
                    <div
                      className="progress-step-wrapper"
                      key={item.id}
                    >
                      <div
                        className={[
                          'progress-step',
                          active && 'is-active',
                          completed && 'is-complete',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                      >
                        <span className="progress-number">
                          {completed ? '✓' : index + 1}
                        </span>

                        <span className="progress-label">
                          {item.label}
                        </span>
                      </div>

                      {index < steps.length - 1 && (
                        <div
                          className={[
                            'progress-line',
                            index < currentStep &&
                              'is-complete',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Email */}

            {step === 'email' && (
              <form
                className="register-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  void submitEmail();
                }}
              >
                <div className="form-heading">
                  <h1>Create your account</h1>

                  <p>
                    Enter your email address and we'll send
                    you a verification code.
                  </p>
                </div>

                {error && <ErrorMessage message={error} />}

                <div className="field">
                  <label htmlFor="email">
                    Email address
                  </label>

                  <div className="input-wrapper">
                    <EmailIcon />

                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(event) =>
                        setEmail(event.target.value)
                      }
                      placeholder="you@example.com"
                      autoComplete="email"
                      autoFocus
                      required
                    />
                  </div>
                </div>

                <button
                  className="button button-primary"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Continue'}
                  {!loading && <ArrowRight />}
                </button>

                <FormFooter />
              </form>
            )}

            {/* Verification */}

            {step === 'verification' && (
              <form
                className="register-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  void verifyEmail();
                }}
              >
                <div className="form-heading">
                  <h1>Verify your email</h1>

                  <p>
                    We sent a 6-digit verification code to{' '}
                    <strong>{email}</strong>.
                  </p>
                </div>

                {error && <ErrorMessage message={error} />}

                <div className="field">
                  <label htmlFor="code">
                    Verification code
                  </label>

                  <input
                    id="code"
                    className="code-input"
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    maxLength={6}
                    value={code}
                    onChange={(event) =>
                      setCode(
                        event.target.value
                          .replace(/\D/g, '')
                          .slice(0, 6),
                      )
                    }
                    placeholder="000000"
                    autoFocus
                    required
                  />
                </div>

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

                <button
                  className="button button-primary"
                  type="submit"
                  disabled={loading || code.length !== 6}
                >
                  {loading
                    ? 'Verifying...'
                    : 'Verify email'}
                  {!loading && <ArrowRight />}
                </button>

                <button
                  type="button"
                  className="button button-secondary"
                  onClick={goBack}
                >
                  <ArrowLeft />
                  Back
                </button>
              </form>
            )}

            {/* Password */}

            {step === 'password' && (
              <form
                className="register-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  void createAccount();
                }}
              >
                <div className="form-heading">
                  <h1>Set your password</h1>

                  <p>
                    Choose a strong password to keep your
                    account safe and secure.
                  </p>
                </div>

                {error && <ErrorMessage message={error} />}

                <div className="field">
                  <label htmlFor="password">Password</label>

                  <div className="input-wrapper">
                    <LockIcon />

                    <input
                      id="password"
                      type={
                        showPassword ? 'text' : 'password'
                      }
                      value={password}
                      onChange={(event) =>
                        setPassword(event.target.value)
                      }
                      placeholder="Create a password"
                      autoComplete="new-password"
                      autoFocus
                      required
                    />

                    <button
                      type="button"
                      className="input-action"
                      onClick={() =>
                        setShowPassword(
                          (visible) => !visible,
                        )
                      }
                      aria-label={
                        showPassword
                          ? 'Hide password'
                          : 'Show password'
                      }
                    >
                      {showPassword ? (
                        <EyeOffIcon />
                      ) : (
                        <EyeIcon />
                      )}
                    </button>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="confirmation">
                    Confirm password
                  </label>

                  <div className="input-wrapper">
                    <LockIcon />

                    <input
                      id="confirmation"
                      type={
                        showPassword ? 'text' : 'password'
                      }
                      value={confirmation}
                      onChange={(event) =>
                        setConfirmation(event.target.value)
                      }
                      placeholder="Repeat your password"
                      autoComplete="new-password"
                      required
                    />
                  </div>
                </div>

                <PasswordRequirements password={password} />

                <button
                  className="button button-primary"
                  type="submit"
                  disabled={loading}
                >
                  {loading
                    ? 'Creating account...'
                    : 'Create account'}
                  {!loading && <ArrowRight />}
                </button>

                <button
                  type="button"
                  className="button button-secondary"
                  onClick={goBack}
                >
                  <ArrowLeft />
                  Back
                </button>
              </form>
            )}

            {/* Complete */}

            {step === 'complete' && (
              <div className="completion">
                <div className="success-icon">
                  <CheckIcon />
                </div>

                <div className="form-heading">
                  <h1>You're all set!</h1>

                  <p>
                    Your account has been created
                    successfully. You can now sign in and
                    start using Nova.
                  </p>
                </div>

                <a
                  className="button button-primary"
                  href="/login"
                >
                  Continue to sign in
                  <ArrowRight />
                </a>

                <a className="back-home" href="/">
                  Back to home
                </a>
              </div>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}

/* ----------------------------------------------------------------
   Small components
   ---------------------------------------------------------------- */

function FormFooter() {
  return (
    <div className="form-footer">
      <span>Already have an account?</span>
      <a href="/login">Sign in</a>
    </div>
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

function PasswordRequirements({
  password,
}: {
  password: string;
}) {
  const requirements = [
    {
      label: 'At least 12 characters',
      valid: password.length >= 12,
    },
    {
      label: 'One uppercase letter',
      valid: /[A-Z]/.test(password),
    },
    {
      label: 'One lowercase letter',
      valid: /[a-z]/.test(password),
    },
    {
      label: 'One number or symbol',
      valid: /[\d\W]/.test(password),
    },
  ];

  return (
    <div className="password-requirements">
      {requirements.map((requirement) => (
        <div
          className={[
            'password-requirement',
            requirement.valid && 'is-valid',
          ]
            .filter(Boolean)
            .join(' ')}
          key={requirement.label}
        >
          <span className="requirement-icon">
            {requirement.valid ? '✓' : '○'}
          </span>

          {requirement.label}
        </div>
      ))}
    </div>
  );
}

/* ----------------------------------------------------------------
   Icons
   ---------------------------------------------------------------- */

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8H13M9 4L13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowLeft() {
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

function EmailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M3 7L12 13L21 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="10"
        width="16"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 10V7C8 4.79 9.79 3 12 3C14.21 3 16 4.79 16 7V10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 12C4.2 8.7 7.6 6.5 12 6.5C16.4 6.5 19.8 8.7 21.5 12C19.8 15.3 16.4 17.5 12 17.5C7.6 17.5 4.2 15.3 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="12"
        cy="12"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 3L21 21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M10.6 6.7C11.05 6.57 11.52 6.5 12 6.5C16.4 6.5 19.8 8.7 21.5 12C20.78 13.4 19.72 14.65 18.43 15.55"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6.15 8.1C4.55 9.02 3.3 10.35 2.5 12C4.2 15.3 7.6 17.5 12 17.5C13.05 17.5 14.05 17.37 14.98 17.13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 14.5L11.5 19L21 9"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
