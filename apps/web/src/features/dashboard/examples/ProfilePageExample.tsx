import './ProfilePageExample.css';

function UserIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="profile-icon"
    >
      <circle
        cx="10"
        cy="6.5"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4.5 17c.7-3 2.5-4.5 5.5-4.5s4.8 1.5 5.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="profile-icon"
    >
      <rect
        x="4.5"
        y="8"
        width="11"
        height="8.5"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7 8V6a3 3 0 0 1 6 0v2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="profile-icon"
    >
      <path
        d="M10 3.5 15 5.5v4c0 3.1-2 5.7-5 7-3-1.3-5-3.9-5-7v-4l5-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m7.5 10 1.7 1.7 3.3-3.4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="camera-icon"
    >
      <path
        d="M4 6.5h2l1-1.5h6l1 1.5h2v9H4v-9Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle
        cx="10"
        cy="11"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="profile-chevron"
    >
      <path
        d="m6 3.5 4.5 4.5L6 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProfilePageExample() {
  return (
    <main className="profile-page">
      <div className="profile-container">
        <header className="profile-header">
          <div>
            <h1>Profile</h1>
            <p>
              Manage your personal information and account
              security.
            </p>
          </div>
        </header>

        {/* Personal information */}

        <section className="profile-section">
          <div className="profile-section-header">
            <div>
              <h2>Personal information</h2>
              <p>
                Information associated with your account.
              </p>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-avatar-row">
              <div className="profile-avatar">
                <span>RF</span>
              </div>

              <div className="avatar-details">
                <strong>Rizki Fadil</strong>
                <span>Profile photo</span>
              </div>

              <button className="profile-button profile-button-secondary">
                <CameraIcon />
                Change photo
              </button>
            </div>

            <div className="profile-divider" />

            <form className="profile-form">
              <div className="profile-form-grid">
                <label className="profile-field">
                  <span>First name</span>
                  <input
                    type="text"
                    defaultValue="Rizki"
                    autoComplete="given-name"
                  />
                </label>

                <label className="profile-field">
                  <span>Last name</span>
                  <input
                    type="text"
                    defaultValue="Fadil"
                    autoComplete="family-name"
                  />
                </label>

                <label className="profile-field profile-field-full">
                  <span>Email address</span>

                  <div className="profile-input-with-status">
                    <input
                      type="email"
                      defaultValue="rizki@example.com"
                      autoComplete="email"
                    />

                    <span className="verified-badge">
                      Verified
                    </span>
                  </div>

                  <small>
                    Your email is used for account
                    notifications and sign-in.
                  </small>
                </label>

                <label className="profile-field">
                  <span>Job title</span>
                  <input
                    type="text"
                    defaultValue="Software Engineer"
                    autoComplete="organization-title"
                  />
                </label>

                <label className="profile-field">
                  <span>Company</span>
                  <input
                    type="text"
                    defaultValue="Acme"
                    autoComplete="organization"
                  />
                </label>
              </div>

              <div className="profile-form-footer">
                <span>Last updated a few minutes ago</span>

                <button
                  type="submit"
                  className="profile-button profile-button-primary"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Security */}

        <section className="profile-section">
          <div className="profile-section-header">
            <div>
              <h2>Account security</h2>
              <p>
                Protect your account and manage your sign-in
                methods.
              </p>
            </div>
          </div>

          <div className="security-card">
            <div className="security-row">
              <div className="security-row-icon">
                <LockIcon />
              </div>

              <div className="security-row-content">
                <strong>Password</strong>
                <span>Last changed 3 months ago</span>
              </div>

              <button className="security-action">
                Change password
                <ChevronIcon />
              </button>
            </div>

            <div className="security-divider" />

            <div className="security-row">
              <div className="security-row-icon">
                <ShieldIcon />
              </div>

              <div className="security-row-content">
                <strong>Two-factor authentication</strong>
                <span>
                  Add an extra layer of protection to your
                  account.
                </span>
              </div>

              <div className="security-status">
                <span className="security-status-dot" />
                Not enabled
              </div>

              <button className="security-action">
                Enable
                <ChevronIcon />
              </button>
            </div>

            <div className="security-divider" />

            <div className="security-row">
              <div className="security-row-icon">
                <UserIcon />
              </div>

              <div className="security-row-content">
                <strong>Active sessions</strong>
                <span>
                  Manage devices currently signed in to your
                  account.
                </span>
              </div>

              <button className="security-action">
                Manage sessions
                <ChevronIcon />
              </button>
            </div>
          </div>
        </section>

        {/* Sign out */}

        <section className="profile-section">
          <div className="profile-section-header">
            <div>
              <h2>Sign out</h2>
              <p>
                Sign out of your account on all devices.
              </p>
            </div>
          </div>

          <div className="signout-card">
            <div>
              <strong>Sign out everywhere</strong>
              <span>
                This will sign you out from all active
                sessions, including this device.
              </span>
            </div>

            <button className="profile-button profile-button-secondary">
              Sign out everywhere
            </button>
          </div>
        </section>

        {/* Danger zone */}

        <section className="profile-section danger-section">
          <div className="profile-section-header">
            <div>
              <h2>Danger zone</h2>
              <p>
                Permanently remove your account and
                associated data.
              </p>
            </div>
          </div>

          <div className="danger-card">
            <div>
              <strong>Delete account</strong>
              <span>
                This action is permanent and cannot be
                undone.
              </span>
            </div>

            <button className="delete-button">
              Delete account
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
