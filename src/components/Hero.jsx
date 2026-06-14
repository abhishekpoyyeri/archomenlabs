export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-tag reveal">
        <span className="hero-tag-dot" />
        <span className="mono" style={{ color: 'var(--color-text-muted)' }}>Building what matters</span>
      </div>

      <h1 className="heading-display hero-title reveal">
        We build products<br />
        people <em>rely on</em>
      </h1>

      <p className="body-lg hero-subtitle reveal">
        ArchomenLabs is a product studio creating focused, thoughtful
        applications built for the people.
      </p>

      <div className="hero-actions reveal">
        <a href="#products" className="btn-primary">
          Explore products
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a href="#approach" className="btn-secondary">Our approach</a>
      </div>

      <div className="hero-scroll-indicator reveal" aria-hidden="true">
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
