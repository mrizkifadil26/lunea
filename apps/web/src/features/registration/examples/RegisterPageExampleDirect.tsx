import './register-page-example-direct.css';

export function RegisterPageExampleDirect() {
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
          <header className="auth-header">
            <h2>Create your account</h2>

            <p>Get started with your free Lunea account.</p>
          </header>

          <form className="auth-form">
            <div className="field">
              <label htmlFor="email">Email address</label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="Create a password"
              />
            </div>

            <div className="password-requirements">
              <span className="requirement">
                <span className="requirement-icon">✓</span>
                At least 8 characters
              </span>

              <span className="requirement">
                <span className="requirement-icon">✓</span>
                One uppercase letter
              </span>

              <span className="requirement">
                <span className="requirement-icon">✓</span>
                One number
              </span>
            </div>

            <button
              className="button button-primary"
              type="submit"
            >
              Create account
            </button>

            <div className="divider">
              <span>or</span>
            </div>

            <button
              className="button button-secondary"
              type="button"
            >
              <span className="google-icon">G</span>
              <span>Continue with Google</span>
            </button>
          </form>

          <footer className="auth-footer">
            <span>Already have an account?</span>

            <a href="#">Sign in</a>
          </footer>

          <p className="legal">
            By creating an account, you agree to our
            <a href="#">Terms</a>
            and
            <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </main>
    </div>
  );
}
