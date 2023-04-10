import { Layout } from '../../../components/Layout'
import { Profile } from '../components/Profile'

import './index.scss'

export const HomePage = () => {
  return (
    <Layout>
      <div className="home-page">
        <Profile />
      </div>
    </Layout>
  )
}
