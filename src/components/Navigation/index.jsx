import { Link } from 'react-router-dom'

const ITEMS = [
  { label: 'Inicio', to: '/' },
  { label: 'Sobre mi', to: '/about' },
  { label: 'Proyectos', to: '/projects' },
  { label: 'Contacta me', to: '/contact' }
]

import './index.scss'

export const Navigation = () => {
  return (
    <nav className="navigation-container">
      <ul className="navigation-list">
        {ITEMS.map((item, index) => (
          <li key={index} className="navigation-item">
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
