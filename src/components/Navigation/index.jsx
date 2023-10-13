import './index.scss'

export const ITEMS = [
  { label: 'Inicio />', to: 'start', icon: 'fa fa-home' },
  { label: 'Proyectos />', to: 'projects', icon: 'fa fa-code' },
  { label: 'Sobre mi />', to: 'about', icon: 'fa fa-user' },
  // { label: 'Servicios />', to: 'services', icon: 'fa fa-cogs' },
  { label: 'Contáctame />', to: 'contact', icon: 'fa fa-envelope' }
]

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
