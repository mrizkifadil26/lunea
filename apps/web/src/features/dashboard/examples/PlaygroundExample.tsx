import './PlaygroundExample.css';

const products = [
  {
    id: 'person-lookup',
    name: 'Person lookup',
    description: 'Find a person using known identifiers.',
  },
  {
    id: 'person-enrichment',
    name: 'Person enrichment',
    description:
      'Enrich an existing person with additional data.',
  },
  {
    id: 'company-lookup',
    name: 'Company lookup',
    description:
      'Find a company using identifiers such as domain or name.',
  },
  {
    id: 'company-enrichment',
    name: 'Company enrichment',
    description: 'Enrich an existing company profile.',
  },
];

export function PlaygroundExample() {
  return (
    <div className="playground">
      <aside className="playground-sidebar">
        <div className="sidebar-brand">
          <img src="/assets/brand/logo.svg" alt="Lunea" />
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <span className="nav-label">Workspace</span>

            <a className="nav-item" href="#">
              <svg viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="3"
                  width="7"
                  height="7"
                  rx="1"
                />
                <rect
                  x="14"
                  y="3"
                  width="7"
                  height="7"
                  rx="1"
                />
                <rect
                  x="3"
                  y="14"
                  width="7"
                  height="7"
                  rx="1"
                />
                <rect
                  x="14"
                  y="14"
                  width="7"
                  height="7"
                  rx="1"
                />
              </svg>
              Overview
            </a>

            <a className="nav-item active" href="#">
              <svg viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4.5 4.5" />
              </svg>
              Playground
            </a>

            <a className="nav-item" href="#">
              <svg viewBox="0 0 24 24">
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
                <circle cx="8" cy="6" r="1.5" />
                <circle cx="15" cy="12" r="1.5" />
                <circle cx="11" cy="18" r="1.5" />
              </svg>
              Data products
            </a>

            <a className="nav-item" href="#">
              <svg viewBox="0 0 24 24">
                <rect
                  x="4"
                  y="10"
                  width="16"
                  height="10"
                  rx="2"
                />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
              </svg>
              API access
            </a>

            <a className="nav-item" href="#">
              <svg viewBox="0 0 24 24">
                <path d="M4 19V5" />
                <path d="M4 19h16" />
                <path d="m7 15 4-4 3 2 5-6" />
              </svg>
              Usage
            </a>
          </div>

          <div className="nav-section nav-section-bottom">
            <a className="nav-item" href="#">
              <svg viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                />
                <path d="M3 10h18" />
              </svg>
              Plan & billing
            </a>

            <a className="nav-item" href="#">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="3" />
                <path d="M5 20c.8-3.2 3.2-5 7-5s6.2 1.8 7 5" />
              </svg>
              Profile
            </a>

            <a className="nav-item" href="#">
              <svg viewBox="0 0 24 24">
                <path d="M12 3v2" />
                <path d="M12 19v2" />
                <path d="m4.2 5.2 1.4 1.4" />
                <path d="m18.4 17.4 1.4-1.4" />
                <path d="M3 12h2" />
                <path d="M19 12h2" />
                <path d="m4.2 18.8 1.4-1.4" />
                <path d="m18.4 6.6 1.4-1.4" />
                <circle cx="12" cy="12" r="4" />
              </svg>
              Settings
            </a>
          </div>
        </nav>

        <div className="sidebar-user">
          <div className="user-avatar">R</div>

          <div className="user-info">
            <strong>Rizki</strong>
            <span>Personal workspace</span>
          </div>

          <button
            className="user-menu"
            aria-label="User menu"
          >
            <svg viewBox="0 0 24 24">
              <circle cx="5" cy="12" r="1" />
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
            </svg>
          </button>
        </div>
      </aside>

      <main className="playground-main">
        <header className="playground-header">
          <div className="mobile-brand">
            <img src="/assets/brand/logo.svg" alt="Lunea" />
          </div>

          <div className="header-spacer" />

          <a className="docs-link" href="#">
            Documentation
            <svg viewBox="0 0 24 24">
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>

          <button
            className="header-icon"
            aria-label="Notifications"
          >
            <svg viewBox="0 0 24 24">
              <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
              <path d="M10 21h4" />
            </svg>
          </button>
        </header>

        <div className="playground-content">
          <div className="playground-title">
            <div>
              <span className="eyebrow">
                Developer playground
              </span>

              <h1>Explore your data API</h1>

              <p>
                Test data products, experiment with
                parameters, and inspect responses before
                integrating them into your application.
              </p>
            </div>

            <div className="balance">
              <span>Available credits</span>
              <strong>8,420</strong>
            </div>
          </div>

          <div className="product-selector">
            <div className="selector-label">
              Data product
            </div>

            <div className="product-tabs">
              {products.map((product, index) => (
                <button
                  className={`product-tab ${index === 0 ? 'active' : ''}`}
                  key={product.id}
                >
                  <span className="product-tab-icon">
                    {product.name.charAt(0)}
                  </span>

                  <span>
                    <strong>{product.name}</strong>
                    <small>{product.description}</small>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="request-response">
            <section className="request-panel">
              <div className="panel-header">
                <div>
                  <span className="panel-eyebrow">
                    Request
                  </span>
                  <h2>Person lookup</h2>
                </div>

                <span className="method">POST</span>
              </div>

              <div className="endpoint">
                <span>https://api.lunea.dev</span>
                <strong>/v1/person/lookup</strong>

                <button aria-label="Copy endpoint">
                  <svg viewBox="0 0 24 24">
                    <rect
                      x="8"
                      y="8"
                      width="11"
                      height="11"
                      rx="2"
                    />
                    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                  </svg>
                </button>
              </div>

              <div className="form-section">
                <div className="form-section-header">
                  <div>
                    <h3>Identifiers</h3>
                    <p>
                      Provide one or more attributes to
                      identify the person.
                    </p>
                  </div>

                  <span className="required-label">
                    Optional
                  </span>
                </div>

                <div className="field">
                  <div className="field-label">
                    <label htmlFor="email">Email</label>
                    <span className="strong-label">
                      Strong identifier
                    </span>
                  </div>

                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    defaultValue="john@example.com"
                  />

                  <p className="field-hint">
                    Usually provides the highest match
                    confidence.
                  </p>
                </div>

                <div className="field">
                  <div className="field-label">
                    <label htmlFor="name">Full name</label>
                    <span>Optional</span>
                  </div>

                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    defaultValue="John Doe"
                  />
                </div>

                <div className="field">
                  <div className="field-label">
                    <label htmlFor="company">Company</label>
                    <span>Optional</span>
                  </div>

                  <input
                    id="company"
                    type="text"
                    placeholder="Acme Corporation"
                  />
                </div>

                <div className="field">
                  <div className="field-label">
                    <label htmlFor="location">
                      Location
                    </label>
                    <span>Optional</span>
                  </div>

                  <input
                    id="location"
                    type="text"
                    placeholder="Jakarta, Indonesia"
                  />
                </div>
              </div>

              <div className="form-section">
                <div className="form-section-header">
                  <div>
                    <h3>Enrichment</h3>
                    <p>
                      Select the data you want returned.
                    </p>
                  </div>
                </div>

                <label className="checkbox-row">
                  <input type="checkbox" defaultChecked />

                  <span className="checkbox-content">
                    <strong>Contact information</strong>
                    <small>
                      Email, phone, and available contact
                      details.
                    </small>
                  </span>
                </label>

                <label className="checkbox-row">
                  <input type="checkbox" defaultChecked />

                  <span className="checkbox-content">
                    <strong>Employment</strong>
                    <small>
                      Current role, company, and employment
                      history.
                    </small>
                  </span>
                </label>

                <label className="checkbox-row">
                  <input type="checkbox" />

                  <span className="checkbox-content">
                    <strong>Social profiles</strong>
                    <small>
                      Available professional and social
                      profiles.
                    </small>
                  </span>
                </label>
              </div>

              <div className="form-section">
                <div className="form-section-header">
                  <div>
                    <h3>Match settings</h3>
                    <p>
                      Control how strictly the lookup should
                      match.
                    </p>
                  </div>
                </div>

                <div className="select-field">
                  <label htmlFor="match">
                    Match strategy
                  </label>

                  <select
                    id="match"
                    defaultValue="balanced"
                  >
                    <option value="balanced">
                      Balanced
                    </option>
                    <option value="strict">Strict</option>
                    <option value="broad">Broad</option>
                  </select>
                </div>
              </div>

              <div className="request-footer">
                <div className="request-cost">
                  <span>Estimated cost</span>
                  <strong>2 credits</strong>
                </div>

                <button className="run-button">
                  <svg viewBox="0 0 24 24">
                    <path d="m8 5 11 7-11 7V5Z" />
                  </svg>
                  Run request
                </button>
              </div>
            </section>

            <section className="response-panel">
              <div className="panel-header">
                <div>
                  <span className="panel-eyebrow">
                    Response
                  </span>
                  <h2>Person</h2>
                </div>

                <div className="response-status">
                  <span />
                  200 OK
                </div>
              </div>

              <div className="response-meta">
                <span>2 credits used</span>
                <span>842 ms</span>
                <span>8,418 remaining</span>
              </div>

              <div className="response-tabs">
                <button className="active">Preview</button>
                <button>JSON</button>
                <button>Request</button>
              </div>

              <div className="response-preview">
                <div className="person-summary">
                  <div className="person-avatar">JD</div>

                  <div>
                    <h3>John Doe</h3>
                    <p>Senior Software Engineer</p>
                  </div>

                  <span className="confidence">
                    94% match
                  </span>
                </div>

                <div className="result-section">
                  <span className="result-section-title">
                    Contact
                  </span>

                  <div className="result-grid">
                    <div>
                      <label>Email</label>
                      <strong>john.doe@example.com</strong>
                    </div>

                    <div>
                      <label>Phone</label>
                      <strong>+62 812 1234 5678</strong>
                    </div>
                  </div>
                </div>

                <div className="result-section">
                  <span className="result-section-title">
                    Employment
                  </span>

                  <div className="employment">
                    <div className="company-logo">A</div>

                    <div>
                      <strong>Acme Corporation</strong>
                      <span>Senior Software Engineer</span>
                      <small>
                        Jakarta, Indonesia · Current
                      </small>
                    </div>
                  </div>
                </div>

                <div className="result-section">
                  <span className="result-section-title">
                    Profiles
                  </span>

                  <div className="profile-list">
                    <a href="#">LinkedIn</a>
                    <a href="#">GitHub</a>
                  </div>
                </div>
              </div>

              <div className="response-json">
                <div className="json-header">
                  <span>JSON response</span>

                  <button>
                    <svg viewBox="0 0 24 24">
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

                <pre>{`{
  "id": "person_8f21c9",
  "match": {
    "confidence": 0.94
  },
  "person": {
    "name": "John Doe",
    "email": "john.doe@example.com"
  },
  "employment": {
    "title": "Senior Software Engineer",
    "company": {
      "name": "Acme Corporation"
    }
  }
}`}</pre>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
