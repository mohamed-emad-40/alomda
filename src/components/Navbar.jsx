import { useState } from 'react'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { NAV_LINKS } from '../data/content'
import { useScrollY } from '../hooks/useAnimations'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollY = useScrollY()
  const scrolled = scrollY > 40

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a className="navbar-logo" onClick={() => handleNav('#home')}>
          <div className="logo-mark">AG</div>
          <span className="logo-text">Alomda <b>Group</b></span>
        </a>

        <nav className="navbar-links desktop-only">
          {NAV_LINKS.map(link => (
            <a key={link.href} onClick={() => handleNav(link.href)} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions desktop-only">
          <a href="tel:+201000000000" className="nav-phone">
            <Phone size={15} />
            <span>01000000000</span>
          </a>
          <button className="btn-nav-cta" onClick={() => handleNav('#contact')}>
            احصل على عرض سعر
          </button>
        </div>

        <button className="mobile-menu-btn mobile-only" onClick={() => setMenuOpen(v => !v)} aria-label="قائمة">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu mobile-only">
          {NAV_LINKS.map(link => (
            <a key={link.href} onClick={() => handleNav(link.href)} className="mobile-nav-link">
              {link.label}
            </a>
          ))}
          <button className="btn-nav-cta mobile" onClick={() => handleNav('#contact')}>
            احصل على عرض سعر
          </button>
        </div>
      )}
    </header>
  )
}
