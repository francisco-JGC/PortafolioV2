import { Link } from 'react-router-dom'
import './index.scss'

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__data">
        <div className="profile__data__name">
          <span>Francisco Garcia</span>
        </div>
        <div className="profile__data__ocupation">
          <span>Desarrollador web full-stack</span>
        </div>
      </div>

      <div className="profile__contact">
        <Link to="/contact" className="contact">
          <span>Contacta me</span>
        </Link>

        <a
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
          className="CV"
        >
          <span>CV</span>
        </a>
      </div>
    </div>
  )
}
