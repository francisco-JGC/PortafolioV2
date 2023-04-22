import { ContactForm } from '../components/Contact'
import { Social } from '../components/Social'
import './index.scss'

export const ContactPage = () => {
  return (
    <div className="contact-page" id="contact">
      <Social />
      <ContactForm />

      <div className="contact-page__footer">
        <p>
          © Made with <span className="code">{'</>'}</span> by CHICO
        </p>
      </div>
    </div>
  )
}
