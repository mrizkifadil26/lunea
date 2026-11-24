import './ApiAccessExample.css';

export function ApiAccessExample() {
  return (
    <div className="page">
      <header className="page-header">
        <div>
          <div className="eyebrow">Developer</div>
          <h1>API access</h1>
          <p>
            Manage your API keys and connect your
            application to the Lunea data API.
          </p>
        </div>

        <button className="button button-primary">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
          Create API key
        </button>
      </header>

      <section className="section">
        <div className="section-header">
          <div>
            <h2>API keys</h2>
            <p>
              Use an API key to authenticate requests to the
              Lunea API.
            </p>
          </div>
        </div>

        <div className="key-list">
          <article className="key-card">
            <div className="key-main">
              <div className="key-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="15" r="3" />
                  <path d="m10.5 12.5 6-6M14 7l3 3M17 4l3 3" />
                </svg>
              </div>

              <div className="key-info">
                <div className="key-name-row">
                  <h3>Production</h3>
                  <span className="status status-active">
                    Active
                  </span>
                </div>

                <code className="key-value">
                  lun_live_••••••••••••••••••••••••9f42
                </code>

                <div className="key-meta">
                  <span>Created Nov 8, 2026</span>
                  <span>Last used 4 minutes ago</span>
                </div>
              </div>
            </div>

            <div className="key-actions">
              <button className="button button-secondary">
                Reveal
              </button>

              <button
                className="icon-button"
                aria-label="More actions"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <circle
                    cx="5"
                    cy="12"
                    r="1"
                    fill="currentColor"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="1"
                    fill="currentColor"
                  />
                  <circle
                    cx="19"
                    cy="12"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </article>

          <article className="key-card">
            <div className="key-main">
              <div className="key-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="15" r="3" />
                  <path d="m10.5 12.5 6-6M14 7l3 3M17 4l3 3" />
                </svg>
              </div>

              <div className="key-info">
                <div className="key-name-row">
                  <h3>Development</h3>
                  <span className="status status-active">
                    Active
                  </span>
                </div>

                <code className="key-value">
                  lun_test_••••••••••••••••••••••••7a21
                </code>

                <div className="key-meta">
                  <span>Created Oct 31, 2026</span>
                  <span>Last used yesterday</span>
                </div>
              </div>
            </div>

            <div className="key-actions">
              <button className="button button-secondary">
                Reveal
              </button>

              <button
                className="icon-button"
                aria-label="More actions"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <circle
                    cx="5"
                    cy="12"
                    r="1"
                    fill="currentColor"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="1"
                    fill="currentColor"
                  />
                  <circle
                    cx="19"
                    cy="12"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </article>
        </div>
      </section>

      <section className="section integration-section">
        <div className="section-header">
          <div>
            <h2>Quickstart</h2>
            <p>
              Make your first request with your API key.
            </p>
          </div>

          <a href="#" className="text-link">
            View API docs
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
        </div>

        <div className="code-card">
          <div className="code-header">
            <span>cURL</span>

            <button className="copy-button">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <rect
                  x="8"
                  y="8"
                  width="11"
                  height="11"
                  rx="2"
                />
                <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
              </svg>
              Copy
            </button>
          </div>

          <pre>
            <code>{`curl https://api.lunea.dev/v1/person/lookup \\
  -H "Authorization: Bearer lun_live_••••••••••••••••" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "jane@example.com"
  }'`}</code>
          </pre>
        </div>
      </section>

      <section className="info-card">
        <div className="info-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path d="M12 3 4.5 6v5.5c0 4.5 3.1 7.8 7.5 9.5 4.4-1.7 7.5-5 7.5-9.5V6L12 3Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>

        <div>
          <h3>Keep your API keys secure</h3>
          <p>
            Never expose secret keys in browser code, public
            repositories, or client-side applications. Store
            them as environment variables on your server.
          </p>
        </div>

        <a href="#" className="text-link">
          Security guide
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </a>
      </section>
    </div>
  );
}
