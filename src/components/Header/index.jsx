import logo from '../../assets/logo/Chico-Dev-Logo.png'
import { Navigation } from '../Navigation'
import './index.scss'

export const Header = () => {
  return (
    <header className="header-container">
      <a href="#home-page" className="logo-container">
        <img src={logo} alt="Chico Dev Logo" />
        <span>CHICO DEV</span>
      </a>

      <Navigation />

      <div className="bar-menu-container">
        <div className="content">
          <div className="bar-menu__line"></div>
          <div className="bar-menu__line"></div>
          <div className="bar-menu__line"></div>
        </div>
      </div>
    </header>
  )
}
