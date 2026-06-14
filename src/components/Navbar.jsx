import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    document.body.style.overflow = !menuOpen ? 'hidden' : ''
  }

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container navbar-inner">
          <a href="#" className="navbar-logo" aria-label="ArchomenLabs Home">
            <div className="navbar-logo-mark">
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2L14 14H2L8 2Z" fill="white" />
              </svg>
            </div>
            <span className="navbar-logo-text">ArchomenLabs</span>
          </a>

          <div className="navbar-links">
            <a href="#products" className="navbar-link">Products</a>
            <a href="#approach" className="navbar-link">Approach</a>
            <a href="#about" className="navbar-link">About</a>
            <a href="#contact" className="navbar-cta">Get in touch</a>
          </div>

          <button
            className={`navbar-menu-btn ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            id="menu-toggle"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
        <a href="#products" onClick={closeMenu}>Products</a>
        <a href="#approach" onClick={closeMenu}>Approach</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </>
  )
}
