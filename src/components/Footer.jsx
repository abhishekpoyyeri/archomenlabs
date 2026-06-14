const footerColumns = [
  {
    title: 'Products',
    links: [
      { label: 'ConnectHub', href: '#' },
      { label: 'Vaultic', href: '#' },
      { label: 'Formatic', href: '#' },
      { label: 'Beacon', href: '#' },
      { label: 'Pulseboard', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Status', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="about">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="navbar-logo">
              <div className="navbar-logo-mark">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M8 2L14 14H2L8 2Z" fill="white" />
                </svg>
              </div>
              <span className="navbar-logo-text">ArchomenLabs</span>
            </div>
            <p className="footer-brand-desc">
              Building focused, privacy-respecting products that millions
              of people trust every day.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="footer-col-title">{col.title}</p>
              <div className="footer-links">
                {col.links.map((link) => (
                  <a key={link.label} href={link.href} className="footer-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-text">
            {year} ArchomenLabs. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy</a>
            <a href="#" className="footer-bottom-link">Terms</a>
            <a href="#" className="footer-bottom-link">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
