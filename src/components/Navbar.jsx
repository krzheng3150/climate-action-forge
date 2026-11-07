import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  function handleNavClick() {
    setOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" onClick={handleNavClick}>
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="6" fill="#10b981"/>
            <path d="M16 6c-1.5 4-5 7-9 8 2 1 4 3 5 6 1-3 3-5 5-6-2-1-3-4-1-8z" fill="#fff"/>
            <path d="M18 12c-1 3-3.5 5-6.5 6 1.5.7 3 2 3.5 4 .7-2 2-3.5 3.5-4.2-1.4-.7-2-2.5-.5-5.8z" fill="#fff" opacity=".6"/>
          </svg>
          Climate Action Forge
        </Link>
        <ul className="nav-links">
          <li><a href="/#apps">Apps</a></li>
          <li><a href="/#consultancy">Consultancy</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        <a href="/#apps" onClick={handleNavClick}>Apps</a>
        <a href="/#consultancy" onClick={handleNavClick}>Consultancy</a>
        <a href="/#contact" onClick={handleNavClick}>Contact</a>
      </div>
    </nav>
  )
}
