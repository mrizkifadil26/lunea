import './UsagePageExample.css';

const productUsage = [
  {
    name: 'Person Lookup',
    description:
      'Find people using identity and contact signals.',
    requests: '18,420',
    credits: '21,340',
    percentage: 31,
  },
  {
    name: 'Person Enrichment',
    description:
      'Enrich person records with additional data.',
    requests: '9,842',
    credits: '31,280',
    percentage: 46,
  },
  {
    name: 'Company Lookup',
    description:
      'Find companies using firmographic signals.',
    requests: '8,190',
    credits: '8,210',
    percentage: 12,
  },
  {
    name: 'Company Enrichment',
    description:
      'Enrich company records with additional data.',
    requests: '4,321',
    credits: '7,590',
    percentage: 11,
  },
];

const endpointUsage = [
  {
    endpoint: '/v1/person/lookup',
    requests: '18,420',
    success: '99.8%',
  },
  {
    endpoint: '/v1/person/enrich',
    requests: '9,842',
    success: '99.5%',
  },
  {
    endpoint: '/v1/company/lookup',
    requests: '8,190',
    success: '99.9%',
  },
  {
    endpoint: '/v1/company/enrich',
    requests: '4,321',
    success: '99.2%',
  },
];

const activity = [
  {
    date: 'Nov 9',
    operation: 'Person enrichment',
    requests: '842',
    credits: '2,410',
  },
  {
    date: 'Nov 8',
    operation: 'Person lookup',
    requests: '1,204',
    credits: '1,204',
  },
  {
    date: 'Nov 8',
    operation: 'Company enrichment',
    requests: '391',
    credits: '812',
  },
  {
    date: 'Nov 7',
    operation: 'Person enrichment',
    requests: '723',
    credits: '2,104',
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="usage-icon"
    >
      <path
        d="M3.5 8h9M8.5 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="usage-icon"
    >
      <path
        d="M8 2.5v7M5 7.5l3 3 3-3M3 13.5h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="trend-icon"
    >
      <path
        d="M3 11l3-3 2.25 2L13 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 5H13v3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UsageChart() {
  return (
    <div className="usage-chart">
      <div className="chart-y-axis">
        <span>10k</span>
        <span>8k</span>
        <span>6k</span>
        <span>4k</span>
        <span>2k</span>
        <span>0</span>
      </div>

      <div className="chart-area">
        <div className="chart-grid">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <svg
          className="chart-line"
          viewBox="0 0 900 260"
          preserveAspectRatio="none"
          aria-label="Credits consumed over the last 30 days"
          role="img"
        >
          <defs>
            <linearGradient
              id="usageGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopOpacity="0.16" />
              <stop offset="100%" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            className="chart-fill"
            d="
              M0 220
              L30 214
              L60 205
              L90 211
              L120 190
              L150 196
              L180 178
              L210 185
              L240 158
              L270 166
              L300 150
              L330 154
              L360 132
              L390 142
              L420 125
              L450 138
              L480 110
              L510 118
              L540 104
              L570 88
              L600 98
              L630 74
              L660 82
              L690 62
              L720 70
              L750 48
              L780 58
              L810 40
              L840 48
              L870 30
              L900 38
              L900 260
              L0 260
              Z
            "
          />

          <path
            className="chart-stroke"
            d="
              M0 220
              L30 214
              L60 205
              L90 211
              L120 190
              L150 196
              L180 178
              L210 185
              L240 158
              L270 166
              L300 150
              L330 154
              L360 132
              L390 142
              L420 125
              L450 138
              L480 110
              L510 118
              L540 104
              L570 88
              L600 98
              L630 74
              L660 82
              L690 62
              L720 70
              L750 48
              L780 58
              L810 40
              L840 48
              L870 30
              L900 38
            "
          />
        </svg>

        <div className="chart-x-axis">
          <span>Nov 1</span>
          <span>Nov 5</span>
          <span>Nov 10</span>
          <span>Nov 15</span>
          <span>Nov 20</span>
          <span>Nov 25</span>
          <span>Nov 30</span>
        </div>
      </div>
    </div>
  );
}

export default function UsagePageExample() {
  return (
    <main className="usage-page">
      <div className="usage-container">
        <header className="usage-header">
          <div>
            <h1>Usage</h1>
            <p>
              Monitor your API consumption, credits, and
              data operations.
            </p>
          </div>

          <div className="usage-header-actions">
            <button className="usage-button usage-button-secondary">
              <span>November 2026</span>

              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="chevron-icon"
              >
                <path
                  d="m4 6 4 4 4-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button className="usage-button usage-button-secondary">
              <DownloadIcon />
              <span>Export CSV</span>
            </button>
          </div>
        </header>

        <section className="usage-summary">
          <article className="usage-card usage-card-primary">
            <div className="usage-card-header">
              <span className="usage-card-label">
                Credits used
              </span>

              <span className="usage-card-icon">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10 6.5v7M12.5 8.5c0-1-1-1.5-2.5-1.5S7.5 7.5 7.5 8.5 8.5 10 10 10s2.5.5 2.5 1.5S11.5 13 10 13s-2.5-.5-2.5-1.5"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>

            <div className="usage-card-value">68,420</div>

            <div className="usage-card-meta">
              <span>of 100,000 credits</span>
              <span className="usage-positive">68.4%</span>
            </div>

            <div className="usage-progress">
              <span style={{ width: '68.4%' }} />
            </div>
          </article>

          <article className="usage-card">
            <div className="usage-card-header">
              <span className="usage-card-label">
                API requests
              </span>

              <span className="usage-card-icon">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 6.5h10M5 10h10M5 13.5h6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>

            <div className="usage-card-value">42,891</div>

            <div className="usage-card-meta">
              <span>this month</span>
              <span className="usage-positive">
                <TrendIcon />
                12.4%
              </span>
            </div>
          </article>

          <article className="usage-card">
            <div className="usage-card-header">
              <span className="usage-card-label">
                Records retrieved
              </span>

              <span className="usage-card-icon">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <rect
                    x="4"
                    y="4"
                    width="12"
                    height="12"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M7 8h6M7 11h6M7 14h3"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>

            <div className="usage-card-value">18,240</div>

            <div className="usage-card-meta">
              <span>records</span>
              <span className="usage-positive">
                <TrendIcon />
                14.2%
              </span>
            </div>
          </article>

          <article className="usage-card">
            <div className="usage-card-header">
              <span className="usage-card-label">
                Enrichment jobs
              </span>

              <span className="usage-card-icon">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 4v12M4 10h12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>

            <div className="usage-card-value">3,842</div>

            <div className="usage-card-meta">
              <span>completed</span>
              <span className="usage-positive">
                <TrendIcon />
                6.1%
              </span>
            </div>
          </article>
        </section>

        <section className="usage-section">
          <div className="section-header">
            <div>
              <h2>Usage over time</h2>
              <p>
                Track your credit consumption throughout the
                month.
              </p>
            </div>

            <div className="segmented-control">
              <button className="segment-button">
                Daily
              </button>
              <button className="segment-button segment-button-active">
                Weekly
              </button>
              <button className="segment-button">
                Monthly
              </button>
            </div>
          </div>

          <div className="usage-chart-card">
            <div className="chart-toolbar">
              <div>
                <span className="chart-value">68,420</span>
                <span className="chart-unit"> credits</span>
              </div>

              <span className="chart-change">
                +8.7% vs last month
              </span>
            </div>

            <UsageChart />
          </div>
        </section>

        <section className="usage-section">
          <div className="section-header">
            <div>
              <h2>Usage breakdown</h2>
              <p>
                See which data products are consuming your
                credits.
              </p>
            </div>
          </div>

          <div className="usage-table-card">
            <table className="usage-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Requests</th>
                  <th>Credits</th>
                  <th>Usage</th>
                  <th />
                </tr>
              </thead>

              <tbody>
                {productUsage.map((product) => (
                  <tr key={product.name}>
                    <td>
                      <div className="product-cell">
                        <strong>{product.name}</strong>
                        <span>{product.description}</span>
                      </div>
                    </td>

                    <td>{product.requests}</td>

                    <td className="credits-cell">
                      {product.credits}
                    </td>

                    <td>
                      <div className="table-usage">
                        <div className="table-progress">
                          <span
                            style={{
                              width: `${product.percentage}%`,
                            }}
                          />
                        </div>

                        <span>{product.percentage}%</span>
                      </div>
                    </td>

                    <td>
                      <button
                        className="table-action"
                        aria-label={`View ${product.name}`}
                      >
                        <ArrowIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="usage-grid">
          <div className="usage-section usage-grid-section">
            <div className="section-header">
              <div>
                <h2>API usage</h2>
                <p>
                  Request volume and endpoint performance.
                </p>
              </div>

              <button className="text-button">
                View API logs
                <ArrowIcon />
              </button>
            </div>

            <div className="usage-table-card">
              <table className="usage-table compact-table">
                <thead>
                  <tr>
                    <th>Endpoint</th>
                    <th>Requests</th>
                    <th>Success</th>
                  </tr>
                </thead>

                <tbody>
                  {endpointUsage.map((endpoint) => (
                    <tr key={endpoint.endpoint}>
                      <td>
                        <code>{endpoint.endpoint}</code>
                      </td>
                      <td>{endpoint.requests}</td>
                      <td>
                        <span className="success-value">
                          {endpoint.success}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="usage-section usage-grid-section">
            <div className="section-header">
              <div>
                <h2>Response status</h2>
                <p>API response distribution this month.</p>
              </div>
            </div>

            <div className="status-card">
              <div className="status-total">
                <span>42,891</span>
                <small>total requests</small>
              </div>

              <div className="status-list">
                <div className="status-row">
                  <span>
                    <i className="status-dot status-success" />
                    2xx
                  </span>
                  <strong>40,512</strong>
                  <small>99.4%</small>
                </div>

                <div className="status-row">
                  <span>
                    <i className="status-dot status-warning" />
                    4xx
                  </span>
                  <strong>219</strong>
                  <small>0.5%</small>
                </div>

                <div className="status-row">
                  <span>
                    <i className="status-dot status-error" />
                    5xx
                  </span>
                  <strong>42</strong>
                  <small>0.1%</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="usage-section">
          <div className="section-header">
            <div>
              <h2>Recent activity</h2>
              <p>Your latest data operations.</p>
            </div>

            <button className="text-button">
              View all activity
              <ArrowIcon />
            </button>
          </div>

          <div className="usage-table-card">
            <table className="usage-table activity-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Operation</th>
                  <th>Requests</th>
                  <th>Credits</th>
                </tr>
              </thead>

              <tbody>
                {activity.map((item, index) => (
                  <tr
                    key={`${item.date}-${item.operation}-${index}`}
                  >
                    <td className="activity-date">
                      {item.date}
                    </td>
                    <td>
                      <span className="activity-operation">
                        {item.operation}
                      </span>
                    </td>
                    <td>{item.requests}</td>
                    <td className="credits-cell">
                      {item.credits}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="usage-limit">
          <div className="usage-limit-content">
            <div className="usage-limit-heading">
              <span className="limit-icon">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 3.5 17 16H3l7-12.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 8v3M10 13.5v.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <div>
                <h2>Usage limit</h2>
                <p>
                  You've used 68,420 of your 100,000 monthly
                  credits.
                </p>
              </div>
            </div>

            <div className="limit-progress">
              <div className="limit-progress-header">
                <span>68.4% used</span>
                <span>31,580 credits remaining</span>
              </div>

              <div className="limit-progress-bar">
                <span style={{ width: '68.4%' }} />
              </div>
            </div>
          </div>

          <button className="usage-button usage-button-primary">
            Manage plan
            <ArrowIcon />
          </button>
        </section>
      </div>
    </main>
  );
}
