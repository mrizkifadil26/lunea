import { Field } from '@lunea/ui';
import styles from './LoginPage.module.css';

export function LoginPage() {
  return (
    <div className={styles.page}>
      <header>
        <h2>Sign in</h2>

        <p>Enter your details to access your account.</p>
      </header>

      <form>
        {/* <div className={styles.field}>
          <label htmlFor="email">Email address</label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
          />
        </div> */}
        <Field>
          <Field.Label></Field.Label>

          <TextInput />
        </Field>

        <div className={styles.field}>
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

        <div className={styles.formOptions}>
          <label className={styles.checkbox}>
            <input type="checkbox" name="remember" />

            <span>Remember me</span>
          </label>

          <a href="#">Forgot password?</a>
        </div>

        <button data-variant="primary" type="submit">
          <span>Sign in</span>
          <span aria-hidden="true">→</span>
        </button>

        <div className={styles.divider}>
          <span>or</span>
        </div>

        <button data-variant="secondary" type="button">
          <span className="google-icon">G</span>
          <span>Continue with Google</span>
        </button>
      </form>

      <footer>
        <span>Don't have an account?</span>

        <a href="/register">Create account</a>
      </footer>
    </div>
  );
}
