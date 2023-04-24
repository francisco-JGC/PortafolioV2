import './index.scss'

const SOCIAL_ITEMS = [
  {
    name: 'GitHub',
    url: 'https://github.com/francisco-JGC',
    icon: 'fab fa-github',
    animation: 'fade-right',
    offset: '200',
    easing: 'ease-in-sine'
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/francisco-garcia-94a2a2232/',
    icon: 'fab fa-linkedin',
    animation: 'fade-right',
    offset: '300',
    easing: 'ease-in-sine'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/Francisco_JGC',
    icon: 'fab fa-telegram',
    animation: 'fade-right',
    offset: '400',
    easing: 'ease-in-sine'
  }
]

export const Social = () => {
  return (
    <div className="social">
      <span>Contact {'/>'}</span>
      <div className="links">
        <h3>Buscame en:</h3>
        <div>
          {SOCIAL_ITEMS.map((item, index) => (
            <a key={index} href={item.url} target="_blank" rel="noreferrer">
              <i className={item.icon} />
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
