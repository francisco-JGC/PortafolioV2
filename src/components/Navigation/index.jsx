const ITEMS = [
  { label: 'Inicio', to: 'start' },
  { label: 'Sobre mi', to: 'about' },
  { label: 'Proyectos', to: 'projects' },
  { label: 'Contáctame', to: 'contact' }
]

import './index.scss'

export const Navigation = () => {
  return (
    <nav className="navigation-container">
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
