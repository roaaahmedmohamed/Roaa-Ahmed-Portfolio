import { memo } from 'react'
import { navLinks } from '../../../data/portfolio'
import '../css/Navigation.css'

export const Navigation = memo(function Navigation() {
  return (
    <nav className="nav-bar" aria-label="Main navigation">
      <a className="brand-mark" href="#top" aria-label="Portfolio home">
        R
      </a>
      <div className="nav-links">
        {navLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
})
