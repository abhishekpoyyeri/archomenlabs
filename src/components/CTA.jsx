export default function CTA() {
  return (
    <section className="section cta-section" id="contact">
      <div className="container">
        <div className="cta-card reveal">
          <h2 className="heading-lg">
            Ready to build something<br />worth using?
          </h2>
          <p className="body-lg">
            We partner with teams who care about craft. If that sounds
            like you, we should talk.
          </p>
          <a href="mailto:hello@archomenlabs.com" className="btn-light">
            Start a conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
