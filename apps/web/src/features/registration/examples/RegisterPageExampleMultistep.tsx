import './register-page-example-multistep.css';

export function RegisterPageExampleMultistep() {
  return (
    <div className="auth-shell">
      <aside className="brand-panel">
        <a className="brand" href="/">
          <img
            className="brand-logo"
            src="/assets/brand/logo.svg"
            alt="Lunea"
          />

          <span className="brand-name">Lunea</span>
        </a>

        <div className="brand-content">
          <span className="eyebrow">
            Create your account
          </span>

          <h1>
            Start.
            <br />
            Build.
            <br />
            Grow.
          </h1>

          <p>
            Create your Lunea account and start building
            your workspace.
          </p>
        </div>

        <div
          className="brand-decoration"
          aria-hidden="true"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </aside>

      <main className="auth-panel">
        <div className="auth-content">
          <nav
            className="registration-progress"
            aria-label="Registration progress"
          >
            <div className="progress-step is-complete">
              <span className="progress-number">1</span>
              <span className="progress-label">
                Account
              </span>
            </div>

            <div className="progress-line is-complete"></div>

            <div className="progress-step is-active">
              <span className="progress-number">2</span>
              <span className="progress-label">Verify</span>
            </div>

            <div className="progress-line"></div>

            <div className="progress-step">
              <span className="progress-number">3</span>
              <span className="progress-label">
                Password
              </span>
            </div>
          </nav>

          <header className="auth-header">
            <h2>Verify your email</h2>

            <p>
              We sent a 6-digit verification code to
              <strong>r***@example.com</strong>.
            </p>
          </header>

          <form className="auth-form">
            <div className="otp-field">
              <label htmlFor="otp-1">
                Verification code
              </label>

              <div
                className="otp-inputs"
                role="group"
                aria-label="Verification code"
              >
                <input
                  id="otp-1"
                  name="otp-1"
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={Number('1')}
                  aria-label="Digit 1"
                />

                <input
                  name="otp-2"
                  type="text"
                  inputMode="numeric"
                  maxLength={Number('1')}
                  aria-label="Digit 2"
                />

                <input
                  name="otp-3"
                  type="text"
                  inputMode="numeric"
                  maxLength={Number('1')}

                  aria-label="Digit 3"
                />

                <input
                  name="otp-4"
                  type="text"
                  inputMode="numeric"
                  maxLength={Number('1')}
                  aria-label="Digit 4"
                />

                <input
                  name="otp-5"
                  type="text"
                  inputMode="numeric"
                  maxLength={Number('1')}
                  aria-label="Digit 5"
                />

                <input
                  name="otp-6"
                  type="text"
                  inputMode="numeric"
                  maxLength={Number('1')}
                  aria-label="Digit 6"
                />
              </div>
            </div>

            <div className="otp-help">
              <span>Didn't receive the code?</span>

              <button className="text-button" type="button">
                Resend code
              </button>
            </div>

            <button
              className="button button-primary"
              type="submit"
            >
              Verify email
            </button>

            <button className="back-button" type="button">
              ← Change email
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
