import './auth-panel.css';

export function AuthPageExample() {
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
          <span className="eyebrow">Welcome back</span>

          <h1>
            Build.
            <br />
            Collect.
            <br />
            Grow.
          </h1>

          <p>
            Everything you need to build and grow your
            product in one place.
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
            <h2>Sign in</h2>

            <p>
              Enter your details to access your account.
            </p>
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
              <div className="field-header">
                <label htmlFor="password">Password</label>
              </div>

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
              />
            </div>

            <div className="form-options">
              <label className="checkbox">
                <input type="checkbox" name="remember" />

                <span>Remember me</span>
              </label>

              <a href="#">Forgot password?</a>
            </div>

            <button
              className="button button-primary"
              type="submit"
            >
              <span>Sign in</span>
              <span aria-hidden="true">→</span>
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
            <span>Don't have an account?</span>

            <a href="#">Create account</a>
          </footer>
        </div>
      </main>
    </div>
  );
}
