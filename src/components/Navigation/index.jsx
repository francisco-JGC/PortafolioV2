const ITEMS = [
  { label: 'Inicio', to: 'start' },
  { label: 'Proyectos', to: 'projects' },
  { label: 'Sobre mi', to: 'about' },
  { label: 'Contáctame', to: 'contact' }
]

import './index.scss'

export const Navigation = ({ showMenu }) => {
  return (
    <nav className={`navigation-container`}>
      <ul className="navigation-list">
        {ITEMS.map((item, index) => (
          <li key={index} className="navigation-item">
            <a href={`#${item.to}`}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
