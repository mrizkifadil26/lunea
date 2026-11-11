import './PlanBillingPageExample.css';

const plans = [
  {
    name: 'Starter',
    description: 'For individuals exploring the platform.',
    price: '$49',
    period: '/ month',
    credits: '25,000',
    requests: '25,000',
    features: [
      'Person & company lookup',
      'Basic enrichment',
      'API access',
    ],
    action: 'Downgrade',
  },
  {
    name: 'Growth',
    description:
      'For teams building data-driven applications.',
    price: '$149',
    period: '/ month',
    credits: '100,000',
    requests: '100,000',
    features: [
      'Person & company lookup',
      'Advanced enrichment',
      'API access',
      'Priority processing',
    ],
    action: 'Current plan',
    current: true,
  },
  {
    name: 'Scale',
    description: 'For high-volume production workloads.',
    price: 'Custom',
    period: '',
    credits: 'Custom',
    requests: 'Custom',
    features: [
      'Everything in Growth',
      'Higher usage limits',
      'Dedicated support',
      'Custom data requirements',
    ],
    action: 'Contact sales',
  },
];

const invoices = [
  {
    date: 'Nov 1, 2026',
    number: 'INV-00124',
    amount: '$149.00',
    status: 'Paid',
  },
  {
    date: 'Oct 1, 2026',
    number: 'INV-00103',
    amount: '$149.00',
    status: 'Paid',
  },
  {
    date: 'Sep 1, 2026',
    number: 'INV-00082',
    amount: '$149.00',
    status: 'Paid',
  },
  {
    date: 'Aug 1, 2026',
    number: 'INV-00061',
    amount: '$149.00',
    status: 'Paid',
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="billing-icon"
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
      className="billing-icon"
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

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="check-icon"
    >
      <path
        d="m4 8 2.5 2.5L12 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CardIcon({ type }: { type: 'card' | 'invoice' }) {
  if (type === 'invoice') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        className="billing-card-icon-svg"
      >
        <path
          d="M5 3.5h7l3 3V16a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 5 16V3.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M12 3.5V7h3M7.5 10h5M7.5 13h3"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="billing-card-icon-svg"
    >
      <rect
        x="3"
        y="5"
        width="14"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M3 8h14M6 12h3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PlanBillingPageExample() {
  return (
    <main className="billing-page">
      <div className="billing-container">
        <header className="billing-header">
          <div>
            <h1>Plan &amp; Billing</h1>
            <p>
              Manage your subscription, payment method, and
              invoices.
            </p>
          </div>
        </header>

        {/* Current plan */}

        <section className="current-plan">
          <div className="current-plan-main">
            <div className="current-plan-label">
              <span className="current-plan-dot" />
              Current plan
            </div>

            <div className="current-plan-title-row">
              <div>
                <h2>Growth</h2>
                <p>
                  For teams building data-driven
                  applications.
                </p>
              </div>

              <div className="current-plan-price">
                <strong>$149</strong>
                <span>/ month</span>
              </div>
            </div>

            <div className="current-plan-details">
              <div>
                <span>Billing cycle</span>
                <strong>Monthly</strong>
              </div>

              <div>
                <span>Next renewal</span>
                <strong>Dec 1, 2026</strong>
              </div>

              <div>
                <span>Monthly credits</span>
                <strong>100,000</strong>
              </div>

              <div>
                <span>API requests</span>
                <strong>100,000</strong>
              </div>
            </div>
          </div>

          <div className="current-plan-actions">
            <button className="billing-button billing-button-primary">
              Change plan
            </button>

            <button className="billing-button billing-button-secondary">
              Manage subscription
            </button>
          </div>
        </section>

        {/* Billing overview */}

        <section className="billing-section">
          <div className="billing-section-header">
            <div>
              <h2>Billing overview</h2>
              <p>
                Your upcoming charge and payment method.
              </p>
            </div>
          </div>

          <div className="billing-overview-grid">
            <article className="billing-info-card">
              <div className="billing-info-card-header">
                <div className="billing-info-icon">
                  <CardIcon type="invoice" />
                </div>

                <span>Next invoice</span>
              </div>

              <div className="billing-info-value">
                $149.00
              </div>

              <div className="billing-info-meta">
                <span>Due Dec 1, 2026</span>
                <span className="billing-muted">
                  Monthly subscription
                </span>
              </div>

              <button className="billing-link-button">
                View upcoming invoice
                <ArrowIcon />
              </button>
            </article>

            <article className="billing-info-card">
              <div className="billing-info-card-header">
                <div className="billing-info-icon">
                  <CardIcon type="card" />
                </div>

                <span>Payment method</span>
              </div>

              <div className="payment-method">
                <div className="visa-mark">VISA</div>

                <div>
                  <strong>•••• 4242</strong>
                  <span>Expires 08/29</span>
                </div>
              </div>

              <div className="billing-info-meta">
                <span>Default payment method</span>
              </div>

              <button className="billing-link-button">
                Update payment method
                <ArrowIcon />
              </button>
            </article>
          </div>
        </section>

        {/* Usage allowance */}

        <section className="billing-section">
          <div className="billing-section-header">
            <div>
              <h2>Plan usage</h2>
              <p>
                Your current usage against your plan limits.
              </p>
            </div>

            <button className="billing-link-button section-link">
              View usage
              <ArrowIcon />
            </button>
          </div>

          <div className="allowance-card">
            <div className="allowance-item">
              <div className="allowance-header">
                <div>
                  <strong>Credits</strong>
                  <span>68,420 of 100,000 used</span>
                </div>

                <strong>68.4%</strong>
              </div>

              <div className="allowance-bar">
                <span style={{ width: '68.4%' }} />
              </div>

              <span className="allowance-remaining">
                31,580 credits remaining
              </span>
            </div>

            <div className="allowance-divider" />

            <div className="allowance-item">
              <div className="allowance-header">
                <div>
                  <strong>API requests</strong>
                  <span>42,891 of 100,000 used</span>
                </div>

                <strong>42.9%</strong>
              </div>

              <div className="allowance-bar">
                <span style={{ width: '42.9%' }} />
              </div>

              <span className="allowance-remaining">
                57,109 requests remaining
              </span>
            </div>
          </div>
        </section>

        {/* Plans */}

        <section className="billing-section">
          <div className="billing-section-header plans-header">
            <div>
              <h2>Plans</h2>
              <p>
                Choose the plan that fits your data
                requirements.
              </p>
            </div>

            <div className="billing-cycle-toggle">
              <button className="billing-cycle-active">
                Monthly
              </button>
              <button>Yearly</button>
              <span>Save 20%</span>
            </div>
          </div>

          <div className="plans-grid">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`plan-card ${
                  plan.current ? 'plan-card-current' : ''
                }`}
              >
                {plan.current && (
                  <div className="plan-current-badge">
                    Current plan
                  </div>
                )}

                <div className="plan-card-content">
                  <h3>{plan.name}</h3>

                  <p className="plan-description">
                    {plan.description}
                  </p>

                  <div className="plan-price">
                    <strong>{plan.price}</strong>
                    {plan.period && (
                      <span>{plan.period}</span>
                    )}
                  </div>

                  <div className="plan-entitlements">
                    <div>
                      <strong>{plan.credits}</strong>
                      <span>credits / month</span>
                    </div>

                    <div>
                      <strong>{plan.requests}</strong>
                      <span>API requests / month</span>
                    </div>
                  </div>

                  <div className="plan-features">
                    {plan.features.map((feature) => (
                      <div key={feature}>
                        <CheckIcon />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  className={`plan-button ${
                    plan.current
                      ? 'plan-button-current'
                      : 'plan-button-default'
                  }`}
                  disabled={plan.current}
                >
                  {plan.action}
                  {!plan.current && <ArrowIcon />}
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Invoice history */}

        <section className="billing-section invoice-section">
          <div className="billing-section-header">
            <div>
              <h2>Invoice history</h2>
              <p>
                View and download your previous invoices.
              </p>
            </div>

            <button className="billing-link-button">
              Billing details
              <ArrowIcon />
            </button>
          </div>

          <div className="invoice-card">
            <table className="invoice-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Invoice</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>

              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.number}>
                    <td>{invoice.date}</td>

                    <td>
                      <span className="invoice-number">
                        {invoice.number}
                      </span>
                    </td>

                    <td className="invoice-amount">
                      {invoice.amount}
                    </td>

                    <td>
                      <span className="invoice-status">
                        <span />
                        {invoice.status}
                      </span>
                    </td>

                    <td>
                      <button
                        className="invoice-download"
                        aria-label={`Download ${invoice.number}`}
                      >
                        <DownloadIcon />
                        <span>PDF</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Billing contact */}

        <section className="billing-contact">
          <div>
            <h2>Need a custom plan?</h2>
            <p>
              Talk to us about higher limits, custom data
              requirements, or enterprise billing.
            </p>
          </div>

          <button className="billing-button billing-button-secondary">
            Contact sales
            <ArrowIcon />
          </button>
        </section>
      </div>
    </main>
  );
}
