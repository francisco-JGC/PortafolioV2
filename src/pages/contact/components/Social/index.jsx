import './index.scss'

const SOCIAL_ITEMS = [
  {
    name: 'GitHub',
    url: 'https://github.com/francisco-JGC',
    icon: 'fab fa-github',
    handle: '@francisco-JGC'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/francisco-garcia-94a2a2232/',
    icon: 'fab fa-linkedin',
    handle: 'Francisco Garcia'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/Francisco_JGC',
    icon: 'fab fa-telegram',
    handle: '@Francisco_JGC'
  }
]

export const Social = () => {
  return (
    <div className="social">
      <small>Contacto {'/>'}</small>

      <h2>
        ¿Hablamos? <span>.</span>
      </h2>

      <p className="social__description">
        Estoy disponible para proyectos freelance, colaboraciones o nuevas
        oportunidades. No dudes en escribirme.
      </p>

      <div className="social__email">
        <i className="fas fa-envelope" />
        <a href="mailto:jjjchico1@gmail.com">jjjchico1@gmail.com</a>
      </div>

      <div className="social__links">
        <span className="social__links__label">Encuéntrame en</span>
        <div className="social__links__list">
          {SOCIAL_ITEMS.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="social__links__item"
            >
              <div className="social__links__item__icon">
                <i className={item.icon} />
              </div>
              <div className="social__links__item__info">
                <span className="name">{item.name}</span>
                <span className="handle">{item.handle}</span>
              </div>
              <i className="fas fa-arrow-right social__links__item__arrow" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
