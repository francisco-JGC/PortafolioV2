import Page from '../../../components/Page'
import { Contact } from '../components/Contact'
import { Social } from '../components/Social'
import './index.scss'

export const ContactPage = () => {
  return (
    <Page className="contact-page" id="contact">
      <Social />
      <Contact />

      <div className="contact-page__footer">
        <p>
          © Made with <span className="code">{'</>'}</span> by CHICO
        </p>
      </div>
    </Page>
  )
}
