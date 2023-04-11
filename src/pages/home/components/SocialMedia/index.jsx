import './index.scss'

const ITEMS = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/francisco-garcia-94a2a2232/'
  },
  {
    label: 'GitHub',
    url: 'https://github.com/francisco-JGC'
  }
]

export const SocialMedia = () => {
  return (
    <div className="social-media">
      <span>SOCIAL</span>

      <ul className="social-media__list">
        {ITEMS.map((item, index) => (
          <li key={index}>
            {item.label}
            {index !== ITEMS.length - 1 && <span>|</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}
