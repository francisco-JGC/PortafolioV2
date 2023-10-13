import { useRef, useState } from 'react'
import logo from '../../assets/logo/Chico-Dev-Logo.png'
import { Navigation } from '../Navigation'
import './index.scss'

export const Header = () => {
  const headerRef = useRef(null)
  const [showMenu, setShowMenu] = useState(false)

  const witdhScreen = window.innerWidth
  let lastScrollTop = 0

  window.addEventListener('scroll', () => {
    const header = headerRef.current
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop) {
      header.classList.add('header-container--hide')
    } else {
      header.classList.remove('header-container--hide')
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
  })

  return (
    <header className={`header-container`} ref={headerRef}>
      <a href="#start" className="logo-container">
        <img src={logo} alt="Chico Dev Logo" />
        <span>CHICO DEV</span>
      </a>

      <Navigation showMenu={showMenu} />
    </header>
  )
}
