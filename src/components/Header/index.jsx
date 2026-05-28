import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo/Chico-Dev-Logo.png'
import { ITEMS, Navigation } from '../Navigation'
import './index.scss'

export const Header = () => {
  const headerRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let lastScrollTop = 0
    const handleScroll = () => {
      const header = headerRef.current
      if (!header) return
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (scrollTop > lastScrollTop && scrollTop > 80) {
        header.classList.add('header-container--hide')
      } else {
        header.classList.remove('header-container--hide')
      }
      lastScrollTop = Math.max(0, scrollTop)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="header-container" ref={headerRef}>
        <a href="#start" className="logo-container" onClick={closeMenu}>
          <img src={logo} alt="Chico Dev Logo" />
          <span>CHICO DEV</span>
        </a>

        <Navigation />

        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-overlay${menuOpen ? ' mobile-overlay--open' : ''}`}>
        <nav>
          {ITEMS.map((item, index) => (
            <a
              key={index}
              href={`#${item.to}`}
              onClick={closeMenu}
              style={{ transitionDelay: `${index * 0.08 + 0.1}s` }}
            >
              <i className={item.icon} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
