import './DataProductsExample.css';

const products = [
  {
    category: 'People',
    items: [
      {
        name: 'Person lookup',
        description:
          'Find and identify a person using email, name, company, phone, or other available identifiers.',
        endpoint: 'POST /v1/person/lookup',
        credits: 'From 1 credit',
        status: 'Available',
        icon: 'P',
      },
      {
        name: 'Person enrichment',
        description:
          'Enrich an existing person record with contact, employment, social, and profile information.',
        endpoint: 'POST /v1/person/enrich',
        credits: 'From 2 credits',
        status: 'Available',
        icon: 'E',
      },
    ],
  },
  {
    category: 'Companies',
    items: [
      {
        name: 'Company lookup',
        description:
          'Find a company using a domain, company name, or other identifiers.',
        endpoint: 'POST /v1/company/lookup',
        credits: 'From 1 credit',
        status: 'Available',
        icon: 'C',
      },
      {
        name: 'Company enrichment',
        description:
          'Enrich a company profile with firmographic, technology, and business information.',
        endpoint: 'POST /v1/company/enrich',
        credits: 'From 2 credits',
        status: 'Available',
        icon: 'E',
      },
    ],
  },
];

export default function DataProductsExample() {
  return (
    <div className="data-products">
      <aside className="data-products-sidebar">
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

            <a className="nav-item" href="#">
              <svg viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4.5 4.5" />
              </svg>
              Playground
            </a>

            <a className="nav-item active" href="#">
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

      <main className="data-products-main">
        <header className="data-products-header">
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

        <div className="data-products-content">
          <section className="products-intro">
            <div>
              <span className="eyebrow">Data API</span>

              <h1>Data products</h1>

              <p>
                Explore the data capabilities available
                through the Lunea API. Test any product in
                the playground or integrate it directly into
                your application.
              </p>
            </div>

            <a className="primary-button" href="#">
              Open playground
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </section>

          <section className="catalog">
            {products.map((group) => (
              <div
                className="product-group"
                key={group.category}
              >
                <div className="group-heading">
                  <h2>{group.category}</h2>
                  <span>{group.items.length} products</span>
                </div>

                <div className="product-list">
                  {group.items.map((product) => (
                    <article
                      className="product-card"
                      key={product.name}
                    >
                      <div className="product-icon">
                        {product.icon}
                      </div>

                      <div className="product-main">
                        <div className="product-name-row">
                          <h3>{product.name}</h3>

                          <span className="available">
                            <span />
                            {product.status}
                          </span>
                        </div>

                        <p>{product.description}</p>

                        <div className="product-meta">
                          <code>{product.endpoint}</code>
                          <span>{product.credits}</span>
                        </div>
                      </div>

                      <div className="product-actions">
                        <a href="#">
                          Try it
                          <svg viewBox="0 0 24 24">
                            <path d="M5 12h14" />
                            <path d="m13 6 6 6-6 6" />
                          </svg>
                        </a>

                        <a
                          className="secondary-action"
                          href="#"
                        >
                          Docs
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="developer-callout">
            <div className="callout-icon">
              <svg viewBox="0 0 24 24">
                <path d="m8 9-3 3 3 3" />
                <path d="m16 9 3 3-3 3" />
                <path d="m14 5-4 14" />
              </svg>
            </div>

            <div>
              <h2>Ready to integrate?</h2>
              <p>
                Get your API credentials and start making
                requests from your application.
              </p>
            </div>

            <a href="#">
              API access
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}
