const products = [
  {
    name: '0pinion',
    description: 'A minimal, monochromatic debating platform. No doomscrolling, no media, no images, no distractions. Just opinions and thoughtful debate.',
    tag: 'Debate',
    featured: true,
    icon: (
      <svg viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h4" />
      </svg>
    ),
  },
]

export default function Products() {
  return (
    <section className="section" id="products">
      <div className="container">
        <div className="products-header reveal">
          <p className="mono">Coming Soon</p>
          <h2 className="heading-lg">
            Our first product
          </h2>
          <p className="body-lg">
            We are currently crafting a new way to connect and debate. Focused entirely on what matters.
          </p>
        </div>

        <div className="bento-grid stagger-children">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`bento-card reveal ${index === 0 ? 'featured' : ''}`}
              id={`product-${product.name.toLowerCase()}`}
            >
              <div className="bento-card-icon">
                {product.icon}
              </div>
              <h3 className="bento-card-title">{product.name}</h3>
              <p className="bento-card-desc">{product.description}</p>
              <span className="bento-card-tag">{product.tag}</span>

              {index === 0 && (
                <div className="bento-card-preview">
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'var(--color-surface-alt)',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 'var(--space-lg)',
                  }}>
                    <div className="window-chrome">
                      <span className="window-dot" />
                      <span className="window-dot" />
                      <span className="window-dot" />
                    </div>
                    <div className="window-content">
                      <div className="window-line" />
                      <div className="window-line" />
                      <div className="window-line" />
                      <div className="window-line" />
                      <div className="window-line" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
