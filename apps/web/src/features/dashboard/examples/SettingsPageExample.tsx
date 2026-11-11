import './SettingsPageExample.css';

export function SettingsPageExample() {
  return (
    <main className="settings-page">
      <header className="settings-header">
        <div>
          <h1>Settings</h1>
          <p>
            Manage your workspace preferences and
            application behavior.
          </p>
        </div>
      </header>

      <div className="settings-layout">
        <aside
          className="settings-nav"
          aria-label="Settings navigation"
        >
          <a
            className="settings-nav-item active"
            href="#general"
          >
            General
          </a>
          <a
            className="settings-nav-item"
            href="#notifications"
          >
            Notifications
          </a>
          <a className="settings-nav-item" href="#security">
            Security
          </a>
          <a
            className="settings-nav-item"
            href="#preferences"
          >
            Preferences
          </a>
        </aside>

        <div className="settings-content">
          <section
            className="settings-section"
            id="general"
          >
            <div className="settings-section-header">
              <div>
                <h2>General</h2>
                <p>
                  Configure basic workspace preferences.
                </p>
              </div>
            </div>

            <div className="settings-card">
              <div className="settings-field">
                <label htmlFor="workspace-name">
                  Workspace name
                </label>
                <p className="settings-field-description">
                  The name used throughout your workspace.
                </p>

                <input
                  id="workspace-name"
                  className="settings-input"
                  type="text"
                  defaultValue="Acme Inc."
                />
              </div>

              <div className="settings-field">
                <label htmlFor="timezone">Timezone</label>
                <p className="settings-field-description">
                  Used when displaying usage, billing, and
                  activity timestamps.
                </p>

                <select
                  id="timezone"
                  className="settings-input"
                  defaultValue="Asia/Jakarta"
                >
                  <option value="Asia/Jakarta">
                    Asia/Jakarta (UTC+07:00)
                  </option>
                  <option value="Asia/Singapore">
                    Asia/Singapore (UTC+08:00)
                  </option>
                  <option value="UTC">UTC</option>
                </select>
              </div>

              <div className="settings-field">
                <label htmlFor="language">Language</label>
                <p className="settings-field-description">
                  Choose the language used throughout the
                  application.
                </p>

                <select
                  id="language"
                  className="settings-input"
                  defaultValue="en"
                >
                  <option value="en">English</option>
                </select>
              </div>

              <div className="settings-actions">
                <button
                  className="settings-button"
                  type="button"
                >
                  Save changes
                </button>
              </div>
            </div>
          </section>

          <section
            className="settings-section"
            id="notifications"
          >
            <div className="settings-section-header">
              <div>
                <h2>Notifications</h2>
                <p>
                  Choose which events you want to hear
                  about.
                </p>
              </div>
            </div>

            <div className="settings-card">
              <SettingToggle
                title="Product updates"
                description="News about features, improvements, and product changes."
                defaultChecked
              />

              <SettingToggle
                title="Usage alerts"
                description="Receive alerts when your credit or API usage approaches its limit."
                defaultChecked
              />

              <SettingToggle
                title="API alerts"
                description="Get notified about API errors, incidents, and important changes."
                defaultChecked
              />

              <SettingToggle
                title="Billing notifications"
                description="Receive invoices, payment updates, and billing reminders."
                defaultChecked
              />
            </div>
          </section>

          <section
            className="settings-section"
            id="security"
          >
            <div className="settings-section-header">
              <div>
                <h2>Security</h2>
                <p>
                  Control account security notifications and
                  behavior.
                </p>
              </div>
            </div>

            <div className="settings-card">
              <SettingToggle
                title="Login notifications"
                description="Receive an email whenever a new device signs into your account."
                defaultChecked
              />

              <SettingToggle
                title="Security event notifications"
                description="Receive notifications for important security-related changes."
                defaultChecked
              />

              <div className="settings-field">
                <label htmlFor="session-timeout">
                  Session timeout
                </label>
                <p className="settings-field-description">
                  Automatically sign out inactive sessions
                  after this period.
                </p>

                <select
                  id="session-timeout"
                  className="settings-input"
                  defaultValue="30"
                >
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="240">4 hours</option>
                  <option value="never">Never</option>
                </select>
              </div>

              <div className="settings-security-action">
                <div>
                  <strong>Review active sessions</strong>
                  <p>
                    See where your account is currently
                    signed in.
                  </p>
                </div>

                <button
                  className="settings-button secondary"
                  type="button"
                >
                  View sessions
                </button>
              </div>
            </div>
          </section>

          <section
            className="settings-section"
            id="preferences"
          >
            <div className="settings-section-header">
              <div>
                <h2>Preferences</h2>
                <p>
                  Customize how data is displayed and
                  returned.
                </p>
              </div>
            </div>

            <div className="settings-card">
              <div className="settings-field">
                <label htmlFor="theme">Theme</label>
                <p className="settings-field-description">
                  Choose how the application should appear.
                </p>

                <select
                  id="theme"
                  className="settings-input"
                  defaultValue="system"
                >
                  <option value="system">System</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>

              <div className="settings-field">
                <label htmlFor="date-format">
                  Date format
                </label>
                <p className="settings-field-description">
                  Choose how dates are displayed across the
                  application.
                </p>

                <select
                  id="date-format"
                  className="settings-input"
                  defaultValue="YYYY-MM-DD"
                >
                  <option value="YYYY-MM-DD">
                    2026-11-09
                  </option>
                  <option value="DD/MM/YYYY">
                    09/11/2026
                  </option>
                  <option value="MM/DD/YYYY">
                    11/09/2026
                  </option>
                </select>
              </div>

              <div className="settings-field">
                <label htmlFor="response-format">
                  API response format
                </label>
                <p className="settings-field-description">
                  Default format used when viewing API
                  results in the playground.
                </p>

                <select
                  id="response-format"
                  className="settings-input"
                  defaultValue="pretty"
                >
                  <option value="pretty">
                    Pretty JSON
                  </option>
                  <option value="compact">
                    Compact JSON
                  </option>
                </select>
              </div>

              <div className="settings-actions">
                <button
                  className="settings-button"
                  type="button"
                >
                  Save preferences
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

interface SettingToggleProps {
  title: string;
  description: string;
  defaultChecked?: boolean;
}

function SettingToggle({
  title,
  description,
  defaultChecked = false,
}: SettingToggleProps) {
  return (
    <label className="settings-toggle">
      <div className="settings-toggle-copy">
        <strong>{title}</strong>
        <span>{description}</span>
      </div>

      <input
        type="checkbox"
        defaultChecked={defaultChecked}
      />

      <span className="settings-switch" aria-hidden="true">
        <span />
      </span>
    </label>
  );
}
