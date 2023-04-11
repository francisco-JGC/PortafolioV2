import { Layout } from '../../../components/Layout'
import { MyInfo } from '../components/MyInfo'
import { Profile } from '../components/Profile'

import './index.scss'

export const HomePage = () => {
  return (
    <Layout>
      <div className="home-page">
        <Profile />
        <div className="my-info-container">
          <MyInfo />
        </div>
      </div>
    </Layout>
  )
}
