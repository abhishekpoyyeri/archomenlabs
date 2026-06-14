const principles = [
  { id: '01', text: 'Ship fewer features, but make every one indispensable.' },
  { id: '02', text: 'Privacy is a right, not a feature toggle.' },
  { id: '03', text: 'Performance is a design decision, not an afterthought.' },
  { id: '04', text: 'Build for the long term — no growth hacks, no dark patterns.' },
]

export default function Approach() {
  return (
    <section className="section" id="approach">
      <div className="container">
        <div className="approach-grid">
          <div className="approach-content">
            <p className="mono reveal">Our Approach</p>
            <h2 className="heading-lg reveal">
              Opinionated software,<br />
              built with restraint
            </h2>
            <p className="body-lg reveal">
              We believe the best products are the ones that disappear into your
              workflow. No feature bloat. No engagement tricks. Just tools that
              work the way you think.
            </p>

            <div className="approach-list stagger-children">
              {principles.map((p) => (
                <div key={p.id} className="approach-list-item reveal">
                  <span className="approach-list-number">{p.id}</span>
                  <span className="approach-list-text">{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="approach-visual reveal">
            <div className="window-chrome">
              <span className="window-dot" />
              <span className="window-dot" />
              <span className="window-dot" />
            </div>
            <div className="window-content" style={{ padding: 'var(--space-lg)' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'var(--space-md)',
                height: '100%',
              }}>
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--color-surface-alt)',
                      borderRadius: 'var(--border-radius)',
                      border: '1px solid var(--color-border)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
