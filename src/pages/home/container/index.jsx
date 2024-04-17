import Page from '../../../components/Page'
import { Profile } from '../components/Profile'

import './index.scss'

export const HomePage = () => {
  return (
    <Page className="home-page" id="start">
      <div className="home-page">
        <Profile />
      </div>
    </Page>
  )
}
