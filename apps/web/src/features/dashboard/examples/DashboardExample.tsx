import './DashboardExample.css';

const products = [
  {
    icon: 'P',
    title: 'Person lookup',
    description:
      'Find a person using identifiers such as email, name, or company.',
    endpoint: 'POST /v1/person/lookup',
  },
  {
    icon: 'E',
    title: 'Person enrichment',
    description:
      'Enrich an existing person with additional profile and employment data.',
    endpoint: 'POST /v1/person/enrich',
  },
  {
    icon: 'C',
    title: 'Company lookup',
    description:
      'Find a company using a domain, name, or other identifiers.',
    endpoint: 'POST /v1/company/lookup',
  },
];

const recentRequests = [
  {
    product: 'Person lookup',
    input: 'john.doe@example.com',
    status: 'Success',
    credits: 1,
    time: '2 min ago',
  },
  {
    product: 'Company enrichment',
    input: 'stripe.com',
    status: 'Success',
    credits: 3,
    time: '18 min ago',
  },
  {
    product: 'Person enrichment',
    input: 'per_8f21c9',
    status: 'Success',
    credits: 2,
    time: '41 min ago',
  },
  {
    product: 'Company lookup',
    input: 'acme.com',
    status: 'Not found',
    credits: 1,
    time: '1 hr ago',
  },
];

export function DashboardExample() {
  return (
    <div className="dashboard">
      <aside className="dashboard-sidebar">
        <div className="sidebar-brand">
          <img src="/assets/brand/logo.svg" alt="Lunea" />
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <span className="nav-label">Workspace</span>

            <a className="nav-item active" href="#">
              <svg viewBox="0 0 24 24" aria-hidden="true">
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

            <a className="nav-item" href="#">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4.5 4.5" />
              </svg>
              Playground
            </a>

            <a className="nav-item" href="#">
              <svg viewBox="0 0 24 24" aria-hidden="true">
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
              <svg viewBox="0 0 24 24" aria-hidden="true">
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
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 19V5" />
                <path d="M4 19h16" />
                <path d="m7 15 4-4 3 2 5-6" />
              </svg>
              Usage
            </a>
          </div>

          <div className="nav-section nav-section-bottom">
            <a className="nav-item" href="#">
              <svg viewBox="0 0 24 24" aria-hidden="true">
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
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="8" r="3" />
                <path d="M5 20c.8-3.2 3.2-5 7-5s6.2 1.8 7 5" />
              </svg>
              Profile
            </a>

            <a className="nav-item" href="#">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v2" />
                <path d="M12 19v2" />
                <path d="m4.2 5.2 1.4 1.4" />
                <path d="m18.4 17.4 1.4 1.4" />
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
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="5" cy="12" r="1" />
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
            </svg>
          </button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="mobile-brand">
            <img src="/assets/brand/logo.svg" alt="Lunea" />
          </div>

          <div className="header-spacer" />

          <a className="docs-link" href="#">
            Documentation
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>

          <button
            className="header-icon"
            aria-label="Notifications"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
              <path d="M10 21h4" />
            </svg>
          </button>
        </header>

        <div className="dashboard-content">
          <section className="welcome">
            <div>
              <span className="eyebrow">Workspace</span>
              <h1>Welcome back, Rizki.</h1>
              <p>
                Explore your data API, test requests, and
                build with your remaining credits.
              </p>
            </div>

            <a className="primary-button" href="#">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4.5 4.5" />
              </svg>
              Open playground
            </a>
          </section>

          <section className="top-grid">
            <div className="credits-card">
              <div className="card-header">
                <div>
                  <span className="card-eyebrow">
                    Credits
                  </span>
                  <h2>Available credits</h2>
                </div>

                <span className="plan-badge">PRO</span>
              </div>

              <div className="credit-number">
                8,420 <span>/ 10,000</span>
              </div>

              <div className="credit-progress">
                <div
                  className="credit-progress-value"
                  style={{ width: '84.2%' }}
                />
              </div>

              <div className="credit-meta">
                <span>1,580 credits used</span>
                <a href="#">View usage</a>
              </div>

              <div className="credits-footer">
                <span>Renews on December 1, 2026</span>
                <a href="#">Manage plan</a>
              </div>
            </div>

            <div className="quick-card">
              <div className="card-header">
                <div>
                  <span className="card-eyebrow">
                    API activity
                  </span>
                  <h2>This month</h2>
                </div>

                <div className="activity-icon">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M4 17V7" />
                    <path d="M8 17v-4" />
                    <path d="M12 17V9" />
                    <path d="M16 17V5" />
                    <path d="M20 17v-7" />
                  </svg>
                </div>
              </div>

              <div className="activity-number">1,284</div>

              <span className="activity-label">
                API requests
              </span>

              <div className="activity-stats">
                <div>
                  <strong>97.8%</strong>
                  <span>Success rate</span>
                </div>

                <div>
                  <strong>42 ms</strong>
                  <span>Avg. response</span>
                </div>
              </div>

              <a className="card-link" href="#">
                View usage
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>
            </div>
          </section>

          <section className="section">
            <div className="section-heading">
              <div>
                <span className="section-eyebrow">
                  Data API
                </span>
                <h2>Explore your data products</h2>
                <p>
                  Test endpoints directly in the playground
                  before integrating them into your
                  application.
                </p>
              </div>

              <a className="section-link" href="#">
                View all products
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>
            </div>

            <div className="product-grid">
              {products.map((product) => (
                <a
                  className="product-card"
                  href="#"
                  key={product.title}
                >
                  <div className="product-top">
                    <div className="product-icon">
                      {product.icon}
                    </div>

                    <svg
                      className="product-arrow"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </div>

                  <h3>{product.title}</h3>
                  <p>{product.description}</p>

                  <code>{product.endpoint}</code>
                </a>
              ))}
            </div>
          </section>

          <section className="section recent-section">
            <div className="section-heading compact">
              <div>
                <span className="section-eyebrow">
                  Activity
                </span>
                <h2>Recent requests</h2>
              </div>

              <a className="section-link" href="#">
                View all
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>
            </div>

            <div className="recent-card">
              <div className="recent-table">
                <div className="table-row table-header">
                  <span>Product</span>
                  <span>Input</span>
                  <span>Status</span>
                  <span>Credits</span>
                  <span>Time</span>
                </div>

                {recentRequests.map((request) => (
                  <div
                    className="table-row"
                    key={`${request.product}-${request.time}`}
                  >
                    <strong>{request.product}</strong>

                    <code>{request.input}</code>

                    <span
                      className={`status ${
                        request.status === 'Success'
                          ? 'success'
                          : 'not-found'
                      }`}
                    >
                      <span className="status-dot" />
                      {request.status}
                    </span>

                    <span>{request.credits}</span>

                    <span className="muted">
                      {request.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
