import { FloatingOrbs } from '../../../components/FloatingOrbs'
import { Stats } from '../../../components/Stats'
import Page from '../../../components/Page'
import { Profile } from '../components/Profile'
import './index.scss'

export const HomePage = () => {
  return (
    <Page className="home-page" id="start">
      <FloatingOrbs />
      <div className="home-page__content">
        <Profile />
        <Stats />
      </div>
    </Page>
  )
}
