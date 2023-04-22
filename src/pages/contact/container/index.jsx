import { ContactForm } from '../components/Contact'
import { Social } from '../components/Social'
import './index.scss'

export const ContactPage = () => {
  return (
    <div className="contact-page" id="contact">
      <Social />

      <ContactForm />
    </div>
  )
}
